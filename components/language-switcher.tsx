'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown, Globe } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English' },
  // cSpell:disable-next-line
  { code: 'ar', label: 'العربية' },
  { code: 'fr', label: 'Français' },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const current = languages.find((l) => l.code === locale) ?? languages[0];

  const switchTo = (code: string) => {
    setOpen(false);
    const newPath = pathname.replace(`/${locale}`, `/${code}`);
    router.push(newPath);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-border rounded-md bg-card hover:bg-muted transition"
      >
        <Globe className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="font-medium">{current.label}</span>
        <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-1 z-50 min-w-[130px] rounded-md border border-border bg-card shadow-lg overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchTo(lang.code)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-xs hover:bg-muted transition text-left
                  ${locale === lang.code ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground'}`}
              >
                <span>{lang.label}</span>
                {locale === lang.code && (
                  <span className="ml-auto text-primary">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}