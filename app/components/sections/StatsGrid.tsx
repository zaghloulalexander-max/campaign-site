'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

interface Stat {
  readonly number: string;
  readonly label: string;
  readonly description: string;
}

interface StatsGridProps {
  stats: readonly Stat[];
  label?: string;
}

export default function StatsGrid({ stats, label }: StatsGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect touch device on mount
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Close on tap outside (mobile)
  useEffect(() => {
    if (!isTouchDevice || activeIndex === null) return;

    function handleTapOutside(e: TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveIndex(null);
      }
    }

    document.addEventListener('touchstart', handleTapOutside);
    return () => document.removeEventListener('touchstart', handleTapOutside);
  }, [isTouchDevice, activeIndex]);

  const handleMouseEnter = useCallback((index: number) => {
    if (isTouchDevice) return;
    // Cancel any pending leave
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setActiveIndex(index);
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    // Delay clearing to prevent flicker between stats
    leaveTimer.current = setTimeout(() => {
      setActiveIndex(null);
      leaveTimer.current = null;
    }, 150);
  }, [isTouchDevice]);

  const handleTap = useCallback((index: number) => {
    if (isTouchDevice) {
      setActiveIndex((prev) => (prev === index ? null : index));
    }
  }, [isTouchDevice]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  const activeStat = activeIndex !== null ? stats[activeIndex] : null;

  return (
    <div ref={containerRef} className="clear-both mt-16 pt-12 border-t border-border">
      {label && (
        <p className="text-base text-text-muted mb-10">
          {label}
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
        {stats.map((stat, i) => (
          <button
            key={i}
            type="button"
            className="text-left transition-opacity duration-300 ease-out cursor-default"
            style={{
              opacity: activeIndex === null || activeIndex === i ? 1 : 0.25,
            }}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleTap(i)}
            aria-expanded={activeIndex === i}
            aria-controls="stat-description"
          >
            <p className="text-3xl md:text-4xl font-medium text-text tracking-tight">
              {stat.number}
            </p>
            <p className="text-sm text-text-muted mt-1">
              {stat.label}
            </p>
          </button>
        ))}
      </div>

      {/* Description area — fixed height, no layout shift */}
      <div
        id="stat-description"
        className="mt-10 h-[8rem] md:h-[5rem]"
        aria-live="polite"
        onMouseEnter={() => {
          if (leaveTimer.current) {
            clearTimeout(leaveTimer.current);
            leaveTimer.current = null;
          }
        }}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="transition-opacity duration-300 ease-out border-l-[3px] border-primary-400 pl-5"
          style={{ opacity: activeStat ? 1 : 0 }}
        >
          {activeStat && (
            <p className="text-xl text-text-muted leading-[1.75]">
              {activeStat.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}