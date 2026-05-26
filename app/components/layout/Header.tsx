'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/app/lib/config';
import Button from '@/app/components/ui/Button';
import Drawer from '@/app/components/ui/Drawer';
import IconButton from '@/app/components/ui/IconButton';
import { MenuIcon } from '@/app/components/ui/icons';
import type { Dictionary } from '@/app/lib/i18n';

// ============================================================================
// CONSTANTS
// ============================================================================

const DARK_SECTION_IDS = ['hero', 'donate'];

// ============================================================================
// TYPES
// ============================================================================

interface HeaderProps {
  dict: Dictionary['header'];
  donateLabel: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function Header({ dict, donateLabel }: HeaderProps) {
  const pathname = usePathname();
  const isLanding = pathname === '/' || pathname === '/en' || pathname === '/es';

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [onDark, setOnDark] = useState(isLanding);
  const [hasScrolled, setHasScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const rafId = useRef(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // --------------------------------------------------------------------------
  // Background detection (dark/light section awareness)
  // --------------------------------------------------------------------------

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

    const checkPoint = scrollingDown
      ? header.getBoundingClientRect().bottom
      : header.getBoundingClientRect().top + 1;

    const isOverDark = DARK_SECTION_IDS.some((id) => {
      const el = id === 'hero'
        ? document.querySelector('[aria-labelledby="hero-heading"]') as HTMLElement | null
        : document.getElementById(id);

      if (!el) return false;

      const rect = el.getBoundingClientRect();
      return rect.top < checkPoint && rect.bottom > checkPoint;
    });

    setOnDark(isOverDark);
    setHasScrolled(currentScrollY > 5);
  }, [isLanding]);

  const onScrollOrResize = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(checkBackground);
  }, [checkBackground]);

  useEffect(() => {
    checkBackground();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [checkBackground, onScrollOrResize]);

  // --------------------------------------------------------------------------
  // Close drawer on route change (hash navigation)
  // --------------------------------------------------------------------------

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const handleNavClick = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  // --------------------------------------------------------------------------
  // Derived state
  // --------------------------------------------------------------------------

  const showSolidBg = !onDark && hasScrolled;

  // --------------------------------------------------------------------------
  // Render
  // --------------------------------------------------------------------------

  return (
    <>
      <header
        ref={headerRef}
        className={[
          'fixed top-0 left-0 right-0 z-50',
          showSolidBg
            ? 'bg-surface/95 backdrop-blur-md border-b border-border shadow-sm'
            : hasScrolled && onDark
            ? 'bg-primary-800/95 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent border-b border-transparent',
        ].join(' ')}
        role="banner"
      >
        <div
          className="px-6 md:px-8 lg:px-10 flex items-center justify-between h-16 md:h-[72px]"
          style={{ marginRight: 'var(--scrollbar-width, 0px)' }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            className={[
              'flex items-baseline gap-2',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
              'rounded transition-colors duration-200',
              onDark ? 'text-white/40' : 'text-primary-700',
            ].join(' ')}
            aria-label={`${siteConfig.candidate.fullName} — ${dict.homeLabel}`}
          >
            <span className="text-xl md:text-2xl font-medium tracking-tight">
              {siteConfig.candidate.firstName}
            </span>
            <span
              className={[
                'text-xs md:text-sm font-normal',
                onDark ? 'text-white/25' : 'text-text-subtle',
              ].join(' ')}
            >
              {dict.district}
            </span>
          </Link>

          {/* Desktop navigation */}
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
                  className={[
                    'text-sm font-medium transition-colors duration-150 motion-reduce:transition-none',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded',
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
                      : 'text-text-muted',
                  ].join(' ')}
                  onMouseEnter={() => setHoveredLink(item.href)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                as="a"
                href={siteConfig.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant={onDark ? 'secondary' : 'primary'}
              >
                {donateLabel}
              </Button>
            </nav>
          )}

          {/* Mobile menu trigger */}
          {isLanding && (
            <button
              ref={menuButtonRef}
              onClick={() => setDrawerOpen(true)}
              className={[
                'md:hidden p-2 rounded transition-colors',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
                onDark ? 'text-white/80 hover:text-white' : 'text-text-muted hover:text-text',
              ].join(' ')}
              aria-label={dict.menuOpen}
            >
              <MenuIcon size="lg" />
            </button>
          )}
        </div>
      </header>

      {/* Mobile navigation drawer */}
      {isLanding && (
        <Drawer
          isOpen={drawerOpen}
          onClose={closeDrawer}
          ariaLabel="Mobile navigation"
          returnFocusRef={menuButtonRef}
          fullHeight={false}
        >
          <div>
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-border">
              <Link
                href="/"
                className="flex items-baseline gap-2 text-primary-700"
                aria-label={`${siteConfig.candidate.fullName} — ${dict.homeLabel}`}
                onClick={handleNavClick}
              >
                <span className="text-xl font-medium tracking-tight">
                  {siteConfig.candidate.firstName}
                </span>
                <span className="text-xs font-normal text-text-subtle">
                  {dict.district}
                </span>
              </Link>
              <IconButton
                icon="close"
                size="md"
                onClick={closeDrawer}
                aria-label={dict.menuClose}
              />
            </div>

            {/* Navigation links */}
            <nav className="px-6 py-6" aria-label="Mobile navigation">
              <div className="flex flex-col gap-1">
                {siteConfig.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className={[
                      'text-base font-medium text-text-muted hover:text-primary-600',
                      'py-3 transition-colors motion-reduce:transition-none',
                      'rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
                    ].join(' ')}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Donate button */}
            <div className="px-6 pb-6">
              <Button
                as="a"
                href={siteConfig.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                variant="primary"
                fullWidth
              >
                {donateLabel}
              </Button>
            </div>
          </div>
        </Drawer>
      )}
    </>
  );
}