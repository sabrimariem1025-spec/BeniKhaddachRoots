'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function PhotoAccueil() {
  const images = ['/benikhadech.jpg','/benikhadech2.jpg','/kassour.jpg' ];

  const [currentImage, setCurrentImage] = useState(0);
  const t = useTranslations();

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        nextSlide();
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentImage]);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index:any) => {
    setCurrentImage(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Image */}
      <Image
        src={images[currentImage]}
        alt="Accueil"
        fill
        priority
        className="object-cover transition-all duration-1000 scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <h1 className="text-white text-5xl md:text-8xl font-extrabold tracking-[8px] uppercase drop-shadow-2xl animate-fadeIn">
 {t('header.title')}        </h1>

        <p className="text-white text-lg md:text-2xl mt-6 max-w-2xl leading-relaxed font-light tracking-widest">
{t('header.subtitle')}
        </p>
      </div>

      {/* 3 points */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentImage === index
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/70'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}