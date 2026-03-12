'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locationsData } from '@/lib/locations-data';
import { MapView } from '@/components/map-view';
import { LocationCard } from '@/components/location-card';
import { AudioGuide } from '@/components/audio-guide';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { X, Volume2 } from 'lucide-react';
import Image from 'next/image';
import { LanguageSwitcher } from '@/components/language-switcher';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // ← remplace useState language + setLanguage
  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  // language prop pour les composants qui n'ont pas encore migré
  const language = locale as 'en' | 'ar';

  const filteredLocations =
    activeCategory === 'all'
      ? locationsData
      : locationsData.filter((loc) => loc.type === activeCategory);

  const selectedLocationData = locationsData.find(
    (loc) => loc.id === selectedLocation
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">

      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Beni Khaddach Roots Logo"
              width={200}
              height={160}
              className="object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                {t('header.title')}
              </h1>
              <p className="text-xs text-muted-foreground">
                {t('header.subtitle')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
          <LanguageSwitcher/>
          </div>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-lg overflow-hidden shadow-lg border border-border">
            <MapView
              locations={filteredLocations}
              selectedLocation={selectedLocation}
              onSelectLocation={setSelectedLocation}
              language={language}
            />
          </div>

          <Navigation
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            language={language}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredLocations.map((location) => (
              <LocationCard
                key={location.id}
                location={location}
                isSelected={selectedLocation === location.id}
                onSelect={setSelectedLocation}
                language={language}
              />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {selectedLocationData ? (
            <div className="sticky top-20 space-y-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-card border border-border">

                <button
                  onClick={() => setSelectedLocation(null)}
                  className="absolute top-2 right-2 z-10 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="relative w-full h-64 bg-muted">
                  <img
                    src={selectedLocationData.image || '/placeholder.svg'}
                    alt={selectedLocationData.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {locale === 'en'
                        ? selectedLocationData.name
                        : selectedLocationData.nameAr}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {locale === 'en'
                        ? selectedLocationData.address
                        : selectedLocationData.addressAr}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-foreground">
                    {locale === 'en'
                      ? selectedLocationData.description
                      : selectedLocationData.descriptionAr}
                  </p>

                  {selectedLocationData.contact && (
                    <div className="text-sm">
                      <p className="font-semibold text-muted-foreground">
                        {t('sidebar.contact')}
                      </p>
                      <p className="text-foreground">
                        {selectedLocationData.contact}
                      </p>
                    </div>
                  )}

                  {selectedLocationData.rating && (
                    <div className="text-sm">
                      <p className="font-semibold text-muted-foreground">
                        {t('sidebar.rating')}
                      </p>
                      <p className="text-foreground flex items-center gap-1">
                        <span className="text-accent">★</span>{' '}
                        {selectedLocationData.rating}/5
                      </p>
                    </div>
                  )}

                  {/* <AudioGuide
                    location={selectedLocationData}
                    language={language}
                  /> */}
                </div>
              </div>
            </div>
          ) : (
            <div className="sticky top-20 rounded-lg border-2 border-dashed border-border p-8 text-center bg-muted/30">
              {/* <Volume2 className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
              <p className="text-muted-foreground font-medium">
                {t('sidebar.selectLocation')}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {t('sidebar.clickToLearn')}
              </p> */}
            </div>
          )}
        </div>
      </div>

      <Footer language={language} />
    </div>
  );
}