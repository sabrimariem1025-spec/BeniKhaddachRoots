'use client';

import { useState, useRef, useEffect } from 'react';
import { locationsData } from '@/lib/locations-data';
import { MapView } from '@/components/map-view';
import { LocationCard } from '@/components/location-card';
import { AudioGuide } from '@/components/audio-guide';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { X, Volume2, ShoppingBag, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";


export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showMap, setShowMap] = useState(true);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const mapRef = useRef<HTMLDivElement>(null);

  const filteredLocations =
    activeCategory === 'all'
      ? locationsData
      : locationsData.filter((loc) => loc.type === activeCategory);

  const selectedLocationData = locationsData.find((loc) => loc.id === selectedLocation);

  return (
    <div className='min-h-screen bg-background text-foreground flex flex-col'>
      {/* Header */}
      <header className='sticky top-0 z-40 bg-card border-b border-border shadow-sm'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div >
            <Image
  src="/logo.png"
  alt="Beni Khaddach Roots Logo"
  width={160}
  height={160}
  className="object-contain"
/>            </div>
            <div className='hidden sm:block'>
              <h1 className='text-xl md:text-2xl font-bold text-primary'>
                {language === 'en' ? 'Beni Khaddach' : 'بني خداش'}
              </h1>
              <p className='text-xs text-muted-foreground'>
                {language === 'en' ? 'Discover Heritage Tourism' : 'اكتشف السياحة البديلة'}
              </p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <Link href='/sites'>
              <Button
                variant='outline'
                size='sm'
                className='hidden sm:flex gap-2'
              >
                <MapPin className='h-4 w-4' />
                <span className='text-xs'>
                  {language === 'en' ? 'All Sites' : 'جميع المواقع'}
                </span>
              </Button>
            </Link>
            <Link href='/artisans'>
              <Button
                variant='outline'
                size='sm'
                className='hidden sm:flex gap-2'
              >
                <ShoppingBag className='h-4 w-4' />
                <span className='text-xs'>
                  {language === 'en' ? 'Artisans' : 'الحرفيون'}
                </span>
              </Button>
            </Link>
            <Link href='/guesthouses'>
              <Button
                variant='outline'
                size='sm'
                className='hidden sm:flex gap-2'
              >
                {/* Home icon should be imported here */}
                <span className='text-xs'>
                  {language === 'en' ? 'Stay' : 'الإقامة'}
                </span>
              </Button>
            </Link>
            <Button
              variant='outline'
              size='sm'
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className='text-xs'
            >
              {language === 'en' ? 'العربية' : 'English'}
            </Button>
          </div>
        </div>
      </header>

      <div className='flex-1 container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Main Content */}
        <div className='lg:col-span-2 space-y-6'>
          {/* Map */}
          {showMap && (
            <div className='rounded-lg overflow-hidden shadow-lg border border-border'>
              <MapView
                locations={filteredLocations}
                selectedLocation={selectedLocation}
                onSelectLocation={setSelectedLocation}
                language={language}
              />
            </div>
          )}

          {/* Navigation & Filters */}
          <Navigation
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            language={language}
          />

          {/* Locations Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
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

        {/* Sidebar - Selected Location Details */}
        <div className='lg:col-span-1'>
          {selectedLocationData ? (
            <div className='sticky top-20 space-y-4'>
              <div className='relative rounded-lg overflow-hidden shadow-lg bg-card border border-border'>
                {/* Close Button */}
                <button
                  onClick={() => setSelectedLocation(null)}
                  className='absolute top-2 right-2 z-10 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition'
                >
                  <X className='h-5 w-5' />
                </button>

                {/* Image */}
                <div className='relative w-full h-64 bg-muted'>
                  <img
                    src={selectedLocationData.image || "/placeholder.svg"}
                    alt={selectedLocationData.name}
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Content */}
                <div className='p-4 space-y-3'>
                  <div>
                    <h3 className='text-lg font-bold text-primary'>
                      {language === 'en' ? selectedLocationData.name : selectedLocationData.nameAr}
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      {language === 'en' ? selectedLocationData.address : selectedLocationData.addressAr}
                    </p>
                  </div>

                  <p className='text-sm leading-relaxed text-foreground'>
                    {language === 'en'
                      ? selectedLocationData.description
                      : selectedLocationData.descriptionAr}
                  </p>

                  {selectedLocationData.contact && (
                    <div className='text-sm'>
                      <p className='font-semibold text-muted-foreground'>Contact:</p>
                      <p className='text-foreground'>{selectedLocationData.contact}</p>
                    </div>
                  )}

                  {selectedLocationData.rating && (
                    <div className='text-sm'>
                      <p className='font-semibold text-muted-foreground'>Rating:</p>
                      <p className='text-foreground flex items-center gap-1'>
                        <span className='text-accent'>★</span> {selectedLocationData.rating}/5
                      </p>
                    </div>
                  )}

                  {/* Audio Guide */}
                  <AudioGuide
                    location={selectedLocationData}
                    language={language}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className='sticky top-20 rounded-lg border-2 border-dashed border-border p-8 text-center bg-muted/30'>
              <Volume2 className='h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50' />
              <p className='text-muted-foreground font-medium'>
                {language === 'en' ? 'Select a location' : 'اختر موقعاً'}
              </p>
              <p className='text-sm text-muted-foreground mt-1'>
                {language === 'en'
                  ? 'Click on any location to learn more'
                  : 'انقر على أي موقع لمعرفة المزيد'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}
