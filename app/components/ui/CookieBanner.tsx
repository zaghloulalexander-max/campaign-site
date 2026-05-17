'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import IconButton from '@/app/components/ui/IconButton';
import type { Dictionary } from '@/app/lib/i18n';

const STORAGE_KEY = 'cookie-consent-dismissed';

interface CookieBannerProps {
  dict: Dictionary['cookie'];
}

export default function CookieBanner({ dict }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);
      if (!dismissed) setVisible(true);
    } catch {}
  }, []);

  const dismiss = () => {
    setVisible(false);
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch {}
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 bg-surface border border-border rounded-[var(--radius-md)]" role="region" aria-label={dict.regionLabel}>
      <div className="mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <p className="text-[11px] text-text-subtle">
          {dict.message}{' '}
          <Link href="/privacy" className="underline hover:text-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded">
            {dict.privacyLink}
          </Link>
        </p>
        <IconButton icon="close" size="sm" onClick={dismiss} aria-label={dict.dismissLabel} />
      </div>
    </div>
  );
}