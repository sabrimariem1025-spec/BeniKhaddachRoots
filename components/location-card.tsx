'use client';

import { Location } from '@/lib/locations-data';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star } from 'lucide-react';

interface LocationCardProps {
  location: Location;
  isSelected: boolean;
  onSelect: (id: string) => void;
  language: 'en' | 'ar';
}

const typeLabels: Record<string, { en: string; ar: string }> = {
  site: { en: 'Archaeological Site', ar: 'موقع أثري' },
  artisan: { en: 'Artisan', ar: 'حرفي' },
  guesthouse: { en: 'Guesthouse', ar: 'دار ضيافة' },
  food: { en: 'Food', ar: 'طعام' },
};

const typeColors: Record<string, string> = {
  site: 'bg-primary/10 text-primary hover:bg-primary/20',
  artisan: 'bg-secondary/10 text-secondary hover:bg-secondary/20',
  guesthouse: 'bg-accent/10 text-accent hover:bg-accent/20',
  food: 'bg-amber-100/50 text-amber-900 hover:bg-amber-100',
};

export function LocationCard({
  location,
  isSelected,
  onSelect,
  language,
}: LocationCardProps) {
  return (
    <Card
      onClick={() => onSelect(location.id)}
      className={`overflow-hidden cursor-pointer transition-all duration-300 ${
        isSelected
          ? 'ring-2 ring-primary shadow-lg scale-105'
          : 'hover:shadow-md hover:scale-102'
      }`}
    >
      {/* Image */}
      <div className='relative w-full h-40 bg-muted overflow-hidden'>
        <img
          src={location.image || "/placeholder.svg"}
          alt={language === 'en' ? location.name : location.nameAr}
          className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
        />
        <div className='absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors' />
      </div>

      {/* Content */}
      <div className='p-3 space-y-2'>
        {/* Title and Type */}
        <div className='flex items-start justify-between gap-2'>
          <div className='flex-1 min-w-0'>
            <h3 className='font-bold text-sm text-primary truncate'>
              {language === 'en' ? location.name : location.nameAr}
            </h3>
            <div className='flex items-center gap-1 text-xs text-muted-foreground mt-1'>
              <MapPin className='h-3 w-3 flex-shrink-0' />
              <span className='truncate'>
                {language === 'en' ? location.address : location.addressAr}
              </span>
            </div>
          </div>
        </div>

        {/* Badge */}
        <Badge
          variant='outline'
          className={`w-fit text-xs ${typeColors[location.type]}`}
        >
          {language === 'en'
            ? typeLabels[location.type].en
            : typeLabels[location.type].ar}
        </Badge>

        {/* Description */}
        <p className='text-xs text-foreground line-clamp-2'>
          {language === 'en' ? location.description : location.descriptionAr}
        </p>

        {/* Rating */}
        {location.rating && (
          <div className='flex items-center gap-1 pt-1 border-t border-border'>
            <div className='flex items-center'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(location.rating!)
                      ? 'fill-accent text-accent'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className='text-xs text-muted-foreground ml-1'>
              {location.rating.toFixed(1)}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}
