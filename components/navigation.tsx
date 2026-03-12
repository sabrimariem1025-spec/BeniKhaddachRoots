'use client';

import { Button } from '@/components/ui/button';
import { MapPin, Users, Home, UtensilsCrossed } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface NavigationProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  language: 'en' | 'ar' | 'fr';
}

export function Navigation({ activeCategory, onCategoryChange }: NavigationProps) {
const t = useTranslations('navigation');

  const categories = [
    { id: 'site',       label: t('archaeological'), icon: MapPin          },
    { id: 'artisan',    label: t('artisans'),       icon: Users           },
    { id: 'guesthouse', label: t('guesthouses'),    icon: Home            },
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
              {category.label}
            </span>
          </Button>
        );
      })}
    </div>
  );
}