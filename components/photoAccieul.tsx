'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function PhotoAccueil() {
  const images = ['/benikhadech.jpg', '/benikhadech2.jpg', '/im2.jpg'];

  const [currentImage, setCurrentImage] = useState(0);
  const t = useTranslations();

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentImage(index);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Scroll slide
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        nextSlide();
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Image */}
      <Image
        src={images[currentImage]}
        alt="Accueil"
        fill
        priority
        className="object-cover transition-all duration-1000 scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10">
        <h1 className="text-white font-extrabold uppercase drop-shadow-2xl tracking-[3px] sm:tracking-[6px] md:tracking-[8px]
        text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight">
          {t('header.title')}
        </h1>

        <p className="text-white mt-4 sm:mt-6 max-w-xs sm:max-w-xl md:max-w-2xl font-light leading-relaxed tracking-wide
        text-sm sm:text-lg md:text-2xl">
          {t('header.subtitle')}
        </p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300
              w-3 h-3 sm:w-4 sm:h-4
              ${
                currentImage === index
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/70'
              }`}
          />
        ))}
      </div>
    </section>
  );
}