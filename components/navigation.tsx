'use client';

import { Button } from '@/components/ui/button';
import { MapPin, Users, Home, UtensilsCrossed } from 'lucide-react';

interface NavigationProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  language: 'en' | 'ar';
}

export function Navigation({ activeCategory, onCategoryChange, language }: NavigationProps) {
  const categories = [
    {
      id: 'all',
      label: { en: 'All Locations', ar: 'جميع المواقع' },
      icon: MapPin,
    },
    {
      id: 'site',
      label: { en: 'Archaeological Sites', ar: 'المواقع الأثرية' },
      icon: MapPin,
    },
    {
      id: 'artisan',
      label: { en: 'Artisans', ar: 'الحرفيون' },
      icon: Users,
    },
    {
      id: 'guesthouse',
      label: { en: 'Guesthouses', ar: 'دور الضيافة' },
      icon: Home,
    },
    {
      id: 'food',
      label: { en: 'Local Food', ar: 'الطعام المحلي' },
      icon: UtensilsCrossed,
    },
  ];

  return (
    <div className='flex flex-wrap gap-2 p-4 bg-card rounded-lg border border-border'>
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;

        return (
          <Button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            variant={isActive ? 'default' : 'outline'}
            className={`flex items-center gap-2 transition-all ${
              isActive
                ? 'bg-primary hover:bg-primary text-primary-foreground'
                : 'hover:border-primary hover:text-primary'
            }`}
          >
            <Icon className='h-4 w-4' />
            <span className='hidden sm:inline text-sm'>
              {language === 'en'
                ? category.label.en
                : category.label.ar}
            </span>
          </Button>
        );
      })}
    </div>
  );
}
