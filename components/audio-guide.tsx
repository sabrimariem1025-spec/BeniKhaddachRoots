'use client';

import { useEffect, useRef, useState } from 'react';
import { Location } from '@/lib/locations-data';
import { Button } from '@/components/ui/button';
import { Volume2, Pause, Play } from 'lucide-react';

interface AudioGuideProps {
  location: Location;
  language: 'en' | 'ar';
}

export function AudioGuide({ location, language }: AudioGuideProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioStory = language === 'en' ? location.audioStory : location.audioStoryAr;
  const audioLang = language === 'en' ? 'en-US' : 'ar-SA';

  const handlePlayAudio = async () => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    if ('speechSynthesis' in window) {
      // Cancel any existing speech
      window.speechSynthesis.cancel();

      setIsSynthesizing(true);
      const utterance = new SpeechSynthesisUtterance(audioStory);
      utterance.lang = audioLang;
      utterance.rate = 0.95;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onstart = () => {
        setIsPlaying(true);
        setIsSynthesizing(false);
      };

      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        setIsSynthesizing(false);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className='bg-muted/50 rounded-lg p-3 space-y-2 border border-border/50'>
      <div className='flex items-center gap-2'>
        <Volume2 className='h-4 w-4 text-secondary' />
        <span className='text-xs font-semibold text-foreground'>
          {language === 'en' ? 'Audio Guide' : 'الدليل الصوتي'}
        </span>
      </div>

      <Button
        onClick={handlePlayAudio}
        disabled={isSynthesizing}
        size='sm'
        className='w-full flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground'
      >
        {isSynthesizing ? (
          <>
            <div className='h-4 w-4 rounded-full border-2 border-secondary-foreground border-t-transparent animate-spin' />
            {language === 'en' ? 'Preparing...' : 'جاري التحضير...'}
          </>
        ) : isPlaying ? (
          <>
            <Pause className='h-4 w-4' />
            {language === 'en' ? 'Stop' : 'إيقاف'}
          </>
        ) : (
          <>
            <Play className='h-4 w-4' />
            {language === 'en' ? 'Play Story' : 'اسمع القصة'}
          </>
        )}
      </Button>

      <p className='text-xs text-muted-foreground italic'>
        {language === 'en' ? 'Click to hear the story of this location' : 'انقر لسماع قصة هذا الموقع'}
      </p>

      <audio ref={audioRef} style={{ display: 'none' }} />
    </div>
  );
}
