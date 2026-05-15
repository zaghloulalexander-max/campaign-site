import { useState, useEffect } from 'react';

/**
 * SSR-safe hook for detecting media query matches.
 * Returns `null` during SSR/hydration, then resolves on client.
 */
export function useMediaQuery(query: string): boolean | null {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}

/** Below sm breakpoint (< 640px) */
export function useIsMobile(): boolean | null {
  return useMediaQuery('(max-width: 639px)');
}

/** Touch device (coarse pointer) vs precision device (mouse/trackpad) */
export function useIsTouchDevice(): boolean | null {
  return useMediaQuery('(pointer: coarse)');
}