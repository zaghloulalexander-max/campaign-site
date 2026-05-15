'use client';

import { useState } from 'react';
import { siteConfig } from '@/app/lib/config';
import Button from '@/app/components/ui/Button';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-8 flex items-center justify-between h-16 md:h-18">
        {/* Logo / Name */}
        <a href="/" className="flex items-center gap-2">
          <span className="font-heading text-xl md:text-2xl font-semibold text-primary-700 tracking-tight">
            {siteConfig.candidate.firstName}
            <span className="text-text-muted font-normal ml-1.5 text-base md:text-lg">
              {siteConfig.candidate.title}
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-muted hover:text-primary-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button href={siteConfig.donateUrl} size="sm">
            Donate
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-muted hover:text-text transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-surface border-t border-border animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-3">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-text-muted hover:text-primary-600 py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button href={siteConfig.donateUrl} size="md" className="mt-2 w-full">
              Donate
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
