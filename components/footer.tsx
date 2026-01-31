'use client';

import { Heart } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ar';
}

export function Footer({ language }: FooterProps) {
  return (
    <footer className='bg-card border-t border-border mt-8'>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* About */}
          <div className='space-y-2'>
            <h3 className='font-bold text-primary'>
              {language === 'en' ? 'About Beni Khaddach' : 'عن بني خداش'}
            </h3>
            <p className='text-sm text-muted-foreground'>
              {language === 'en'
                ? 'A heritage tourism initiative showcasing the rich cultural and archaeological treasures of the region.'
                : 'مبادرة سياحية تراثية تعرض الكنوز الثقافية والأثرية الغنية للمنطقة.'}
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-2'>
            <h3 className='font-bold text-primary'>
              {language === 'en' ? 'Quick Links' : 'روابط سريعة'}
            </h3>
            <ul className='space-y-1 text-sm'>
              <li>
                <a href='#' className='text-muted-foreground hover:text-primary transition'>
                  {language === 'en' ? 'Map & Locations' : 'الخريطة والمواقع'}
                </a>
              </li>
              <li>
                <a href='/artisans' className='text-muted-foreground hover:text-primary transition'>
                  {language === 'en' ? 'Artisans & Crafts' : 'الحرفيون والحرف اليدوية'}
                </a>
              </li>
              <li>
                <a href='/guesthouses' className='text-muted-foreground hover:text-primary transition'>
                  {language === 'en' ? 'Accommodations' : 'الإقامة'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className='space-y-2'>
            <h3 className='font-bold text-primary'>
              {language === 'en' ? 'Contact' : 'اتصل بنا'}
            </h3>
            <p className='text-sm text-muted-foreground'>
              {language === 'en' ? 'For more information and inquiries' : 'للمزيد من المعلومات والاستفسارات'}
            </p>
            <p className='text-sm font-semibold text-foreground'>+216 XX XXX XXX</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-xs text-muted-foreground text-center sm:text-left'>
            {language === 'en'
              ? '© 2026 Beni Khaddach Tourism. All rights reserved.'
              : '© 2026 سياحة بني خداش. جميع الحقوق محفوظة.'}
          </p>
          <div className='flex items-center gap-2 text-xs text-muted-foreground'>
            <span>
              {language === 'en'
                ? 'Made with'
                : 'من صنع'}
            </span>
            <Heart className='h-3 w-3 fill-destructive text-destructive' />
            <span>
              {language === 'en'
                ? 'for alternative tourism'
                : 'من أجل السياحة البديلة'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
