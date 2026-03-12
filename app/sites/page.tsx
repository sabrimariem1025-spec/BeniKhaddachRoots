'use client';

import { useState } from 'react';
import { archaeologicalSites } from '@/lib/archaeological-sites';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Footer } from '@/components/footer';
import { ArrowLeft, MapPin, Star } from 'lucide-react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/language-switcher';

export default function ArchaeologicalSitesPage() {
  const locale = useLocale();
  const t = useTranslations();

  const [selectedSite, setSelectedSite] = useState<string | null>(null);
  const selectedSiteData = archaeologicalSites.find((s) => s.id === selectedSite);

  // fr et en affichent la version anglaise (fallback)
const loc = (en: string, ar: string, fr?: string) => {
  if (locale === 'ar') return ar;
  if (locale === 'fr') return fr ?? en; // fallback EN si pas de traduction FR
  return en;
};
  return (
    <div className='min-h-screen bg-background'>

      <header className='sticky top-0 z-50 bg-background border-b border-border backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Link href={`/${locale}`}>
                <Button variant='ghost' size='icon'>
                  <ArrowLeft className='h-5 w-5' />
                </Button>
              </Link>
              <div>
                <h1 className='text-2xl font-bold text-primary'>
                  {t('categories.archaeological')}
                </h1>
                <p className='text-sm text-muted-foreground'>
                  {t('sites.exploreAll')}
                </p>
              </div>
            </div>

            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid lg:grid-cols-3 gap-8'>

          <div className='lg:col-span-2'>
            <div className='grid gap-4'>
              {archaeologicalSites.map((site) => (
                <Card
                  key={site.id}
                  className={`p-4 cursor-pointer transition-all hover:shadow-lg ${
                    selectedSite === site.id ? 'ring-2 ring-primary bg-accent/10' : ''
                  }`}
                  onClick={() => setSelectedSite(site.id)}
                >
                  <div className='flex gap-4'>
                    <div className='w-20 h-20 rounded-lg overflow-hidden flex-shrink-0'>
                      <img
                        src={site.image || '/placeholder.svg'}
                        alt={site.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div className='flex-1'>
                      <div className='flex items-start justify-between mb-2'>
                        <div>
                          <h3 className='font-semibold text-foreground'>
                            {loc(site.name, site.nameAr)}
                          </h3>
                          <div className='flex items-center gap-2 text-sm text-muted-foreground mt-1'>
                            <MapPin className='h-4 w-4' />
                            <span>{loc(site.address, site.addressAr)}</span>
                          </div>
                        </div>
                        {site.rating && (
                          <div className='flex items-center gap-1'>
                            <Star className='h-4 w-4 fill-primary text-primary' />
                            <span className='text-sm font-medium'>{site.rating}</span>
                          </div>
                        )}
                      </div>
                      <p className='text-sm text-muted-foreground line-clamp-2'>
                        {loc(site.description, site.descriptionAr)}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {selectedSiteData && (
            <div className='lg:col-span-1'>
              <Card className='p-6 sticky top-24'>
                <div className='w-full h-48 rounded-lg overflow-hidden mb-4'>
                  <img
                    src={selectedSiteData.image || '/placeholder.svg'}
                    alt={selectedSiteData.name}
                    className='w-full h-full object-cover'
                  />
                </div>

                <h2 className='text-xl font-bold text-primary mb-2'>
                  {loc(selectedSiteData.name, selectedSiteData.nameAr)}
                </h2>

                <div className='flex items-center gap-2 text-sm text-muted-foreground mb-4'>
                  <MapPin className='h-4 w-4' />
                  <span>{loc(selectedSiteData.address, selectedSiteData.addressAr)}</span>
                </div>

                {selectedSiteData.rating && (
                  <div className='flex items-center gap-2 mb-4'>
                    <div className='flex items-center'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(selectedSiteData.rating!)
                              ? 'fill-primary text-primary'
                              : 'text-border'
                          }`}
                        />
                      ))}
                    </div>
                    <span className='text-sm font-medium'>{selectedSiteData.rating}</span>
                  </div>
                )}

                <div className='mb-6 pb-4 border-b border-border'>
                  <p className='text-sm text-foreground leading-relaxed'>
                    {loc(selectedSiteData.description, selectedSiteData.descriptionAr)}
                  </p>
                </div>

                <Button
                  className='w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground mb-2'
                  onClick={() => {
                    const query = encodeURIComponent(
                      `${selectedSiteData.address} Beni Khaddach Tunisia`
                    );
                    const url = `https://www.google.com/maps/search/${query}/@${selectedSiteData.latitude},${selectedSiteData.longitude},15z`;
                    window.open(url, '_blank');
                  }}
                >
                  <MapPin className='h-4 w-4' />
                  {t('sites.openMaps')}
                </Button>

                <Button
                  variant='outline'
                  className='w-full'
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: loc(selectedSiteData.name, selectedSiteData.nameAr),
                        text: loc(selectedSiteData.description, selectedSiteData.descriptionAr),
                        url: window.location.href,
                      });
                    }
                  }}
                >
                  {t('sites.share')}
                </Button>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer language={locale as 'en' | 'ar' | 'fr'} />
    </div>
  );
}