'use client';

import { useEffect, useRef } from 'react';
import { Location } from '@/lib/locations-data';

interface MapViewProps {
  locations: Location[];
  selectedLocation: string | null;
  onSelectLocation: (id: string) => void;
  language: 'en' | 'ar';
}

export function MapView({ locations, selectedLocation, onSelectLocation, language }: MapViewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Draw background - modern clean gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f8f6f3');
    gradient.addColorStop(1, '#faf8f5');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw subtle decorative lines for map feel
    ctx.strokeStyle = '#e5dcd0';
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.15;

    // Draw subtle grid pattern
    for (let i = 0; i < canvas.width; i += 60) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }

    for (let i = 0; i < canvas.height; i += 60) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }

    ctx.globalAlpha = 1;

    // Calculate bounds for locations
    const latitudes = locations.map((l) => l.latitude);
    const longitudes = locations.map((l) => l.longitude);

    const minLat = Math.min(...latitudes);
    const maxLat = Math.max(...latitudes);
    const minLon = Math.min(...longitudes);
    const maxLon = Math.max(...longitudes);

    const latRange = maxLat - minLat || 0.01;
    const lonRange = maxLon - minLon || 0.01;

    // Padding
    const padding = 60;
    const mapWidth = canvas.width - padding * 2;
    const mapHeight = canvas.height - padding * 2;

    // Draw locations with improved modern markers
    locations.forEach((location) => {
      // Normalize coordinates to canvas
      const x = padding + ((location.longitude - minLon) / lonRange) * mapWidth;
      const y = padding + ((maxLat - location.latitude) / latRange) * mapHeight;

      // Color by type - improved palette
      let color = '#8b6f47';
      let accentColor = '#d4a574';
      
      if (location.type === 'site') {
        color = '#8b6f47'; // Bronze
        accentColor = '#b89968';
      } else if (location.type === 'artisan') {
        color = '#d4a574'; // Gold
        accentColor = '#e8c9a0';
      } else if (location.type === 'guesthouse') {
        color = '#6b5d4f'; // Dark brown
        accentColor = '#9d8b75';
      }

      // Draw marker with modern pin-like appearance
      const markerSize = 20;
      const shadowBlur = 8;

      // Draw subtle shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
      ctx.shadowBlur = shadowBlur;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 2;

      // Draw outer glow/ring
      ctx.beginPath();
      ctx.arc(x, y, markerSize + 6, 0, Math.PI * 2);
      ctx.fillStyle = color + '15';
      ctx.fill();

      // Draw main marker circle
      ctx.beginPath();
      ctx.arc(x, y, markerSize, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      // Draw inner highlight
      ctx.beginPath();
      ctx.arc(x - 6, y - 6, 6, 0, Math.PI * 2);
      ctx.fillStyle = accentColor;
      ctx.globalAlpha = 0.4;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Draw border with accent
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Reset shadow
      ctx.shadowColor = 'transparent';
    });

    // Draw modern legend with improved styling
    const legendX = 20;
    const legendY = canvas.height - 105;
    const legendItemSpacing = 26;
    const legendWidth = 200;
    const legendHeight = 100;

    // Draw legend background with subtle shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(legendX - 10, legendY - 10, legendWidth, legendHeight, 8);
    ctx.fill();

    ctx.shadowColor = 'transparent';

    // Draw subtle border
    ctx.strokeStyle = '#e5dcd0';
    ctx.lineWidth = 1;
    ctx.stroke();

    const legendItems = [
      { label: 'Archaeological Sites', label_ar: 'المعالم الأثرية', color: '#8b6f47' },
      { label: 'Artisans', label_ar: 'الحرفيين', color: '#d4a574' },
      { label: 'Guesthouses', label_ar: 'دور الضيافة', color: '#6b5d4f' },
    ];

    ctx.font = 'regular 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    ctx.textAlign = 'left';

    legendItems.forEach((item, index) => {
      const y = legendY + index * legendItemSpacing;
      
      // Draw marker in legend
      ctx.fillStyle = item.color;
      ctx.beginPath();
      ctx.arc(legendX + 8, y + 6, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw label
      ctx.fillStyle = '#3a3530';
      ctx.fillText(language === 'en' ? item.label : item.label_ar, legendX + 22, y + 9);
    });
  }, [locations, selectedLocation, language]);

  return (
    <div className='w-full'>
      <div className='relative w-full h-96 bg-muted rounded-lg overflow-hidden cursor-pointer'>
        <canvas
          ref={canvasRef}
          onClick={(e) => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate bounds for locations
            const latitudes = locations.map((l) => l.latitude);
            const longitudes = locations.map((l) => l.longitude);

            const minLat = Math.min(...latitudes);
            const maxLat = Math.max(...latitudes);
            const minLon = Math.min(...longitudes);
            const maxLon = Math.max(...longitudes);

            const latRange = maxLat - minLat || 0.01;
            const lonRange = maxLon - minLon || 0.01;

            const padding = 60;
            const mapWidth = canvas.width - padding * 2;
            const mapHeight = canvas.height - padding * 2;

            // Check which location was clicked
            locations.forEach((location) => {
              const locX = padding + ((location.longitude - minLon) / lonRange) * mapWidth;
              const locY = padding + ((maxLat - location.latitude) / latRange) * mapHeight;
              const distance = Math.sqrt((x - locX) ** 2 + (y - locY) ** 2);

              if (distance < 26) {
                // Redirect to Google Maps with location
                const query = encodeURIComponent(
                  `${location.address} Beni Khaddach Tunisia`
                );
                const mapsUrl = `https://www.google.com/maps/search/${query}/@${location.latitude},${location.longitude},15z`;
                window.open(mapsUrl, '_blank');
              }
            });
          }}
          className='w-full h-full cursor-pointer'
        />
      </div>
      <p className='text-xs text-muted-foreground mt-2 text-center'>
        {language === 'en' ? 'Click on locations to explore' : 'انقر على المواقع للاستكشاف'}
      </p>
    </div>
  );
}

export default MapView;
