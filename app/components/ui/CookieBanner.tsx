'use client';

import { useState, useEffect } from 'react';
import IconButton from '@/app/components/ui/IconButton';

const STORAGE_KEY = 'cookie-consent-dismissed';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);
      if (!dismissed) setVisible(true);
    } catch {
      // localStorage unavailable — don't show
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // localStorage unavailable — banner won't persist but still dismisses
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-40 bg-surface border border-border rounded-[var(--radius-md)]"
      role="region"
      aria-label="Cookie notice"
    >
      <div className="mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <p className="text-[11px] text-text-subtle">
          This site uses cookies for basic functionality.{' '}
          <a
            href="/privacy"
            className="underline hover:text-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
          >
            Privacy Policy
          </a>
        </p>
        <IconButton
          icon="close"
          size="sm"
          onClick={dismiss}
          aria-label="Dismiss cookie notice"
        />
      </div>
    </div>
  );
}