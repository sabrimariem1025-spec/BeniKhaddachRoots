'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locationsData } from '@/lib/locations-data';
import { MapView } from '@/components/map-view';
import { LocationCard } from '@/components/location-card';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { LanguageSwitcher } from '@/components/language-switcher';
import { VillageVideo } from '@/components/village-video';
import PhotoAccueil from '@/components/photoAccieul';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
const sites = locationsData.filter((l) => l.type === 'site');
const artisans = locationsData.filter((l) => l.type === 'artisan');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('guesthouse');

  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const language = locale as 'en' | 'ar';

  const filteredLocations =
    activeCategory === 'all'
      ? locationsData
      : locationsData.filter((loc) => loc.type === activeCategory);

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

          <LanguageSwitcher />
        </div>
      </header>

      {/* Main Content Full Width */}
      <div className="flex-1 container mx-auto px-4 pt-0 pb-6 space-y-6">

        {/* Hero Section */}
        <PhotoAccueil />

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-lg border border-border">
          <MapView
            locations={filteredLocations}
            selectedLocation={selectedLocation}
            onSelectLocation={setSelectedLocation}
            language={language}
          />
        </div>

        {/* Navigation */}
        <Navigation
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          language={language}
        />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* Video */}
      <VillageVideo />

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}