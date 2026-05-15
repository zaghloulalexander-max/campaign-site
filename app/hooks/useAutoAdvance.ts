'use client';

import { useState, useCallback, useEffect, useRef } from 'react';

// ============================================================================
// TYPES
// ============================================================================

interface UseAutoAdvanceOptions {
  /** Total number of items to cycle through */
  itemCount: number;
  /** Duration in seconds before auto-advancing to next item */
  duration?: number;
  /** Whether auto-advance is enabled */
  enabled?: boolean;
}

interface UseAutoAdvanceReturn {
  /** Currently active index */
  activeIndex: number;
  /** Key that resets when animation should restart (for progress bars) */
  animationKey: number;
  /** Jump to a specific index */
  goTo: (index: number) => void;
  /** Advance to the next item */
  next: () => void;
  /** Pause auto-advance (e.g. on hover) */
  pause: () => void;
  /** Resume auto-advance */
  resume: () => void;
  /** Whether currently paused */
  isPaused: boolean;
}

// ============================================================================
// HOOK
// ============================================================================

export function useAutoAdvance({
  itemCount,
  duration = 8,
  enabled = true,
}: UseAutoAdvanceOptions): UseAutoAdvanceReturn {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % itemCount);
    setAnimationKey((prev) => prev + 1);
  }, [itemCount]);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    setAnimationKey((prev) => prev + 1);
  }, []);

  const pause = useCallback(() => {
    setIsPaused(true);
    clearTimer();
  }, [clearTimer]);

  const resume = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Auto-advance timer
  useEffect(() => {
    if (!enabled || isPaused || itemCount <= 1) return;

    timerRef.current = setTimeout(() => {
      next();
    }, duration * 1000);

    return clearTimer;
  }, [activeIndex, animationKey, duration, enabled, isPaused, itemCount, next, clearTimer]);

  return {
    activeIndex,
    animationKey,
    goTo,
    next,
    pause,
    resume,
    isPaused,
  };
}