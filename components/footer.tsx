'use client';

import { useTranslations } from 'next-intl';
import { Heart } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ar' | 'fr';
}

export function Footer({ language }: FooterProps) {
  const t = useTranslations('footer');

  return (
    <footer className='bg-card border-t border-border mt-auto py-6'>
      <div className='container mx-auto px-4 flex flex-col items-center gap-2 text-center'>

        <p className='text-sm font-semibold text-primary'>Beni Khedache Roots</p>

        <p className='text-xs text-muted-foreground'>
          {t('madeWith')} <Heart className='h-3 w-3 text-red-500 fill-red-500 inline mx-1' /> {t('by')} <span className='font-medium text-foreground'>Mariem Sabri</span>
        </p>

        <p className='text-xs text-muted-foreground'>
          ADES — جمعية التنمية والدراسات الاستراتيجية
        </p>

        <p className='text-xs text-muted-foreground'>
          © {new Date().getFullYear()} Beni Khedache, Médenine, Tunisie
        </p>

      </div>
    </footer>
  );
}