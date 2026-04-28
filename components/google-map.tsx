'use client';

import React from "react"

import { useEffect, useRef, useState } from 'react';
import { Location } from '@/lib/locations-data';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation2 } from 'lucide-react';

interface GoogleMapProps {
  locations: Location[];
  selectedLocation: string | null;
  onSelectLocation: (id: string) => void;
  language: 'en' | 'ar' | 'fr';
}

// Simple marker clustering logic
function getClusters(
  locations: Location[],
  zoom: number,
  mapBounds: { minLat: number; maxLat: number; minLon: number; maxLon: number }
) {
  const clusters: Array<{
    lat: number;
    lon: number;
    count: number;
    locations: Location[];
  }> = [];

  // Grid size increases as we zoom out
  const gridSize = Math.pow(2, 10 - zoom) / 100;

  const grouped: { [key: string]: Location[] } = {};
  locations.forEach((loc) => {
    const gridX = Math.floor(loc.longitude / gridSize);
    const gridY = Math.floor(loc.latitude / gridSize);
    const key = `${gridX}-${gridY}`;
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(loc);
  });

  Object.values(grouped).forEach((locs) => {
    const avgLat = locs.reduce((sum, l) => sum + l.latitude, 0) / locs.length;
    const avgLon = locs.reduce((sum, l) => sum + l.longitude, 0) / locs.length;
    clusters.push({
      lat: avgLat,
      lon: avgLon,
      count: locs.length,
      locations: locs,
    });
  });

  return clusters;
}

function getMarkerColor(type: string): string {
  if (type === 'site') return '#8b6f47';
  if (type === 'artisan') return '#d4a574';
  if (type === 'guesthouse') return '#6b5d4f';
  return '#8b6f47';
}

function openGoogleMaps(location: Location, language: 'en' | 'ar'|'fr'): void {
  const query = encodeURIComponent(
    `${location.address} Beni Khedache Tunisia`
  );
  const url = `https://www.google.com/maps/search/${query}/@${location.latitude},${location.longitude},15z`;
  window.open(url, '_blank');
}

export function GoogleMap({
  locations,
  selectedLocation,
  onSelectLocation,
  language,
}: GoogleMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [zoom, setZoom] = useState(6);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showMarkerInfo, setShowMarkerInfo] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Calculate bounds
    const latitudes = locations.map((l) => l.latitude);
    const longitudes = locations.map((l) => l.longitude);

    const minLat = Math.min(...latitudes);
    const maxLat = Math.max(...latitudes);
    const minLon = Math.min(...longitudes);
    const maxLon = Math.max(...longitudes);

    // Draw background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#e8dfd5');
    gradient.addColorStop(1, '#f5f1ed');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw decorative grid
    ctx.strokeStyle = '#d4a574';
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.1;

    for (let i = 0; i < canvas.width; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }

    for (let i = 0; i < canvas.height; i += 40) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }

    ctx.globalAlpha = 1;

    // Calculate projection
    const mapBounds = { minLat, maxLat, minLon, maxLon };
    const latRange = maxLat - minLat || 0.01;
    const lonRange = maxLon - minLon || 0.01;

    const padding = 80;
    const mapWidth = canvas.width - padding * 2;
    const mapHeight = canvas.height - padding * 2;

    // Project coordinates to canvas
    const projectCoord = (lat: number, lon: number) => {
      let x = padding + ((lon - minLon) / lonRange) * mapWidth;
      let y = padding + ((maxLat - lat) / latRange) * mapHeight;

      // Apply zoom and pan
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      x = centerX + (x - centerX) * (zoom / 6) + pan.x;
      y = centerY + (y - centerY) * (zoom / 6) + pan.y;

      return { x, y };
    };

    // Get clusters
    const clusters = getClusters(locations, zoom, mapBounds);

    // Draw clusters and markers
    clusters.forEach((cluster) => {
      const { x, y } = projectCoord(cluster.lat, cluster.lon);

      // Skip if outside canvas
      if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) return;

      if (cluster.count === 1) {
        // Single marker
        const location = cluster.locations[0];
        const isSelected = selectedLocation === location.id;
        const color = getMarkerColor(location.type);

        const size = isSelected ? 18 : 14;

        // Draw marker
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#ffffff' : color;
        ctx.fill();

        if (isSelected) {
          ctx.strokeStyle = color;
          ctx.lineWidth = 3;
          ctx.stroke();

          // Draw glow
          ctx.strokeStyle = color + '40';
          ctx.lineWidth = 10;
          ctx.stroke();
        } else {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Draw shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.beginPath();
        ctx.ellipse(x, y + size + 4, size, 3, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Cluster of multiple markers
        const clusterSize = Math.min(24, 12 + Math.log(cluster.count) * 3);

        // Draw cluster circle
        ctx.beginPath();
        ctx.arc(x, y, clusterSize, 0, Math.PI * 2);
        ctx.fillStyle = '#8b6f47';
        ctx.fill();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw count text
        ctx.fillStyle = '#ffffff';
        ctx.font = `bold ${Math.max(12, clusterSize - 4)}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(cluster.count.toString(), x, y);

        // Draw shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.beginPath();
        ctx.ellipse(x, y + clusterSize + 4, clusterSize, 3, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Draw legend
    const legendX = 15;
    const legendY = canvas.height - 110;

    // Legend background
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 2;

    ctx.fillRect(legendX - 5, legendY - 5, 200, 100);
    ctx.shadowColor = 'transparent';

    ctx.strokeStyle = '#d4a574';
    ctx.lineWidth = 1;
    ctx.strokeRect(legendX - 5, legendY - 5, 200, 100);

    // Legend title
    ctx.fillStyle = '#2d2520';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(language === 'en' ? 'Legend' : 'المفتاح', legendX + 5, legendY + 12);

    // Legend items
    const legendItems = [
      {
        label: language === 'en' ? 'Archaeological' : 'مواقع أثرية',
        color: '#8b6f47',
      },
      { label: language === 'en' ? 'Artisans' : 'حرفيون', color: '#d4a574' },
      {
        label: language === 'en' ? 'Guesthouses' : 'دور ضيافة',
        color: '#6b5d4f',
      },
    ];

    ctx.font = '10px sans-serif';
    legendItems.forEach((item, index) => {
      const y = legendY + 30 + index * 18;

      ctx.fillStyle = item.color;
      ctx.beginPath();
      ctx.arc(legendX + 10, y, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#2d2520';
      ctx.textAlign = 'left';
      ctx.fillText(item.label, legendX + 22, y + 3);
    });

    // Draw zoom and pan instructions
    ctx.fillStyle = '#7a6d5e';
    ctx.font = '9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(
      language === 'en'
        ? 'Scroll to zoom • Drag to pan'
        : 'تمرير للتكبير • السحب للحركة',
      canvas.width / 2,
      canvas.height - 10
    );
  }, [locations, selectedLocation, zoom, pan, language]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) {
      // Check hover on markers
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Simple hover detection
      canvas.style.cursor = 'pointer';
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;

      setPan({ x: pan.x + deltaX, y: pan.y + deltaY });
      setIsDragging(false);
    } else {
      // Handle click on marker
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Check which marker was clicked
      locations.forEach((location) => {
        const latitudes = locations.map((l) => l.latitude);
        const longitudes = locations.map((l) => l.longitude);

        const minLat = Math.min(...latitudes);
        const maxLat = Math.max(...latitudes);
        const minLon = Math.min(...longitudes);
        const maxLon = Math.max(...longitudes);

        const latRange = maxLat - minLat || 0.01;
        const lonRange = maxLon - minLon || 0.01;

        const padding = 80;
        const mapWidth = canvas.width - padding * 2;
        const mapHeight = canvas.height - padding * 2;

        let x = padding + ((location.longitude - minLon) / lonRange) * mapWidth;
        let y = padding + ((maxLat - location.latitude) / latRange) * mapHeight;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        x = centerX + (x - centerX) * (zoom / 6) + pan.x;
        y = centerY + (y - centerY) * (zoom / 6) + pan.y;

        const distance = Math.sqrt((clickX - x) ** 2 + (clickY - y) ** 2);

        if (distance < 25) {
          onSelectLocation(location.id);
          setShowMarkerInfo(location.id);
        }
      });
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const newZoom = Math.min(18, Math.max(2, zoom + (e.deltaY > 0 ? -1 : 1)));
    setZoom(newZoom);
  };

  const selectedLocationData = locations.find(
    (loc) => loc.id === selectedLocation
  );

  return (
    <div className='w-full space-y-4'>
      <div className='relative w-full h-96 bg-muted rounded-lg overflow-hidden shadow-lg border border-border'>
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
          className='w-full h-full cursor-grab active:cursor-grabbing'
        />

        {/* Zoom Controls */}
        <div className='absolute top-4 right-4 flex flex-col gap-2 z-10'>
          <button
            onClick={() => setZoom(Math.min(18, zoom + 1))}
            className='w-10 h-10 bg-primary text-primary-foreground rounded-lg shadow hover:bg-primary/90 flex items-center justify-center font-bold'
          >
            +
          </button>
          <button
            onClick={() => setZoom(Math.max(2, zoom - 1))}
            className='w-10 h-10 bg-primary text-primary-foreground rounded-lg shadow hover:bg-primary/90 flex items-center justify-center font-bold text-lg'
          >
            −
          </button>
          <button
            onClick={() => {
              setZoom(6);
              setPan({ x: 0, y: 0 });
            }}
            className='w-10 h-10 bg-secondary text-secondary-foreground rounded-lg shadow hover:bg-secondary/90 flex items-center justify-center'
          >
            <Navigation2 className='h-5 w-5' />
          </button>
        </div>

        {/* Location Info Popup */}
        {selectedLocationData && (
          <div className='absolute bottom-4 left-4 bg-card border border-border rounded-lg shadow-lg max-w-xs z-10 p-3'>
            <div className='space-y-2'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='font-bold text-sm text-primary'>
                    {language === 'en'
                      ? selectedLocationData.name
                      : selectedLocationData.nameAr}
                  </h3>
                  <p className='text-xs text-muted-foreground'>
                    {language === 'en'
                      ? selectedLocationData.address
                      : selectedLocationData.addressAr}
                  </p>
                </div>
              </div>

              <Button
                size='sm'
                className='w-full text-xs gap-2 bg-primary hover:bg-primary/90'
                onClick={() => openGoogleMaps(selectedLocationData, language)}
              >
                <MapPin className='h-3 w-3' />
                {language === 'en' ? 'Navigate' : 'اتجاه'}
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className='text-xs text-muted-foreground text-center'>
        {language === 'en'
          ? `Zoom: ${zoom} | Showing ${locations.length} locations`
          : `التكبير: ${zoom} | يعرض ${locations.length} موقع`}
      </div>
    </div>
  );
}
