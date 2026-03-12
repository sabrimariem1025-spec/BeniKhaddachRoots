'use client';

import { useEffect, useRef } from 'react';
import { Location } from '@/lib/locations-data';
import { useTranslations } from 'next-intl';

interface MapViewProps {
  locations: Location[];
  selectedLocation: string | null;
  onSelectLocation: (id: string) => void;
  language: 'en' | 'ar' | 'fr';
}

export function MapView({ locations, selectedLocation, onSelectLocation, language }: MapViewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const t = useTranslations();
  

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // ✅ Filtrer uniquement les guesthouses
    const guesthouses = locations.filter((l) => l.type === 'guesthouse');

    // Background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f8f6f3');
    gradient.addColorStop(1, '#faf8f5');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid
    ctx.strokeStyle = '#e5dcd0';
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.15;
    for (let i = 0; i < canvas.width; i += 60) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 60) {
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
    }
    ctx.globalAlpha = 1;

    if (guesthouses.length === 0) return;

    // Bounds
    const latitudes = guesthouses.map((l) => l.latitude);
    const longitudes = guesthouses.map((l) => l.longitude);
    const minLat = Math.min(...latitudes);
    const maxLat = Math.max(...latitudes);
    const minLon = Math.min(...longitudes);
    const maxLon = Math.max(...longitudes);
    const latRange = maxLat - minLat || 0.01;
    const lonRange = maxLon - minLon || 0.01;

    const padding = 80;
    const mapWidth = canvas.width - padding * 2;
    const mapHeight = canvas.height - padding * 2;

    //   chaque guesthouse avec sa photo
    guesthouses.forEach((location) => {
      const x = padding + ((location.longitude - minLon) / lonRange) * mapWidth;
      const y = padding + ((maxLat - location.latitude) / latRange) * mapHeight;

      const radius = 32;
      const isSelected = selectedLocation === location.id;

      // Charger  l'image dans un cercle
     const img = new Image();
     img.crossOrigin = 'anonymous';
img.src = location.logo || '/placeholder.svg';
// img.src = location.logo || '/placeholder.svg';
// img.loading = 'lazy';

      img.onload = () => {
        // Anneau extérieur (sélectionné = primary, sinon blanc)
        ctx.beginPath();
        ctx.arc(x, y, radius + 5, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#8b6f47' : '#ffffff';
        ctx.shadowColor = 'rgba(0,0,0,0.2)';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowColor = 'transparent';

        // Clip circulaire pour la photo
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, x - radius, y - radius, radius * 2, radius * 2);
        ctx.restore();

        // Bordure blanche
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = isSelected ? '#8b6f47' : '#ffffff';
        ctx.lineWidth = 3;
        ctx.stroke();

const name = language === 'ar'
  ? `${location.nameAr} ⭐${location.rating ?? ''}`
  : `${location.name} ⭐${location.rating ?? ''}`;        
        // Fond du label
ctx.font = 'bold 10px -apple-system, BlinkMacSystemFont, sans-serif';
        const textWidth = ctx.measureText(name).width;
        const labelX = x - textWidth / 2 - 6;
        const labelY = y + radius + 6;

        ctx.fillStyle = 'rgba(255,255,255,0.92)';
        ctx.beginPath();
        ctx.roundRect(labelX, labelY, textWidth + 12, 20, 4);
        ctx.fill();

        ctx.strokeStyle = '#e5dcd0';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Texte du label
        ctx.fillStyle = isSelected ? '#8b6f47' : '#3a3530';
        ctx.textAlign = 'center';
        ctx.fillText(name, x, labelY + 14);
      };

      // Fallback si image non chargée — cercle coloré
      img.onerror = () => {
        ctx.beginPath();
        ctx.arc(x, y, radius + 5, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#8b6f47' : '#d4a574';
        ctx.fill();

        ctx.font = 'bold 11px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText('🏠', x, y + 5);
      };
    });

  }, [locations, selectedLocation, language]);

  return (
    <div className='w-full'>
      <div className='relative w-full h-96 bg-muted rounded-lg overflow-hidden'>
        <canvas
          ref={canvasRef}
       onClick={(e) => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const guesthouses = locations.filter((l) => l.type === 'guesthouse');

  const latitudes = guesthouses.map((l) => l.latitude);
  const longitudes = guesthouses.map((l) => l.longitude);
  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLon = Math.min(...longitudes);
  const maxLon = Math.max(...longitudes);
  const latRange = maxLat - minLat || 0.01;
  const lonRange = maxLon - minLon || 0.01;
  const padding = 80;
  const mapWidth = canvas.width - padding * 2;
  const mapHeight = canvas.height - padding * 2;
canvas.style.cursor = 'pointer';
  guesthouses.forEach((location) => {
    const locX = padding + ((location.longitude - minLon) / lonRange) * mapWidth;
    const locY = padding + ((maxLat - location.latitude) / latRange) * mapHeight;
    const distance = Math.sqrt((x - locX) ** 2 + (y - locY) ** 2);

    if (distance < 37) {
      onSelectLocation(location.id);

const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`;
      window.open(mapsUrl, '_blank');
    }
  });
}}
          className='w-full h-full cursor-pointer'
        />
      </div>
      <p className='text-xs text-muted-foreground mt-2 text-center'>
        {t('map.clickToExplore')}
      </p>
    </div>
  );
}

export default MapView;