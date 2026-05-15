'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/app/lib/config';
import Button from '@/app/components/ui/Button';

// ============================================================================
// Dark sections — IDs of sections with dark backgrounds
// The header will stay in "dark mode" when these are behind it
// ============================================================================

const DARK_SECTION_IDS = ['hero', 'donate'];

// ============================================================================
// COMPONENT
// ============================================================================

export default function Header() {
  const pathname = usePathname();
  const isLanding = pathname === '/';

  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [onDark, setOnDark] = useState(isLanding); // start dark only on landing
  const [hasScrolled, setHasScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const lastScrollY = useRef(0);

  const checkBackground = useCallback(() => {
    if (!isLanding) {
      setOnDark(false);
      setHasScrolled(true);
      return;
    }

    const header = headerRef.current;
    if (!header) return;

    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY >= lastScrollY.current;
    lastScrollY.current = currentScrollY;

    // Scrolling down: check from bottom of header (changes when new section meets header)
    // Scrolling up: check from top of viewport (changes when section clears the top)
    const checkPoint = scrollingDown
      ? header.getBoundingClientRect().bottom
      : header.getBoundingClientRect().top + 1;

    // Check if any dark section is at the check point
    const isOverDark = DARK_SECTION_IDS.some((id) => {
      let el: HTMLElement | null = null;
      if (id === 'hero') {
        el = document.querySelector('[aria-labelledby="hero-heading"]') as HTMLElement;
      } else {
        el = document.getElementById(id);
      }
      if (!el) return false;

      const rect = el.getBoundingClientRect();
      return rect.top < checkPoint && rect.bottom > checkPoint;
    });

    setOnDark(isOverDark);
    setHasScrolled(currentScrollY > 5);
  }, [isLanding]);

  useEffect(() => {
    checkBackground();

    window.addEventListener('scroll', checkBackground, { passive: true });
    window.addEventListener('resize', checkBackground, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkBackground);
      window.removeEventListener('resize', checkBackground);
    };
  }, [checkBackground]);

  // Derived state
  const showSolidBg = !onDark && hasScrolled;

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 ${
        showSolidBg
          ? 'bg-surface/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
      role="banner"
    >
      <div
        className="px-6 md:px-8 lg:px-10 flex items-center justify-between h-16 md:h-[72px]"
        style={{ marginRight: 'var(--scrollbar-width, 0px)' }}
      >
        {/* Logo / Wordmark */}
        <a
          href="/"
          className={`flex items-baseline gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded transition-colors duration-200 ${
            onDark ? 'text-white/40' : 'text-primary-700'
          }`}
          aria-label={`${siteConfig.candidate.fullName} — home`}
        >
          <span className="text-xl md:text-2xl font-medium tracking-tight">
            {siteConfig.candidate.firstName}
          </span>
          <span className={`text-xs md:text-sm font-normal ${
            onDark ? 'text-white/25' : 'text-text-subtle'
          }`}>
            for District 2
          </span>
        </a>

        {/* Desktop Nav — only on landing page */}
        {isLanding && (
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-150 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded ${
                  onDark
                    ? hoveredLink === item.href
                      ? 'text-white'
                      : hoveredLink
                      ? 'text-white/40'
                      : 'text-white/80'
                    : hoveredLink === item.href
                    ? 'text-primary-600'
                    : hoveredLink
                    ? 'text-text-subtle'
                    : 'text-text-muted'
                }`}
                onMouseEnter={() => setHoveredLink(item.href)}
              >
                {item.label}
              </a>
            ))}
            <Button href={siteConfig.donateUrl} size="sm" variant={onDark ? 'secondary' : 'primary'}>
              Donate
            </Button>
          </nav>
        )}

        {/* Mobile Menu Toggle — only on landing page */}
        {isLanding && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
              onDark ? 'text-white/80 hover:text-white' : 'text-text-muted hover:text-text'
            }`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Nav — only on landing page */}
      {isLanding && mobileOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden bg-surface border-t border-border animate-fade-in"
          aria-label="Mobile navigation"
        >
          <div className="px-6 py-5 flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-text-muted hover:text-primary-600 py-3 transition-colors motion-reduce:transition-none rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-border">
              <Button href={siteConfig.donateUrl} size="md" variant="primary" fullWidth>
                Donate
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}