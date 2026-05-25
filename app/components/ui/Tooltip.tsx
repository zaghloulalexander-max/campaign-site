'use client';

import { useState, useRef, useCallback, useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

// ============================================================================
// TYPES
// ============================================================================

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  children: ReactNode;
  text: string;
  position?: TooltipPosition;
  delay?: number;
  className?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function Tooltip({
  children,
  text,
  position = 'bottom',
  delay = 100,
  className = '',
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dismissRef = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  // Detect touch device and mount
  useEffect(() => {
    setMounted(true);
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Dismiss tooltip on scroll (mobile fix)
  useEffect(() => {
    if (!isVisible) return;
    const handleScroll = () => setIsVisible(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  // Dismiss tooltip on outside tap (mobile fix)
  useEffect(() => {
    if (!isVisible || !isTouchDevice) return;
    const handleOutsideTap = (e: TouchEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        setIsVisible(false);
      }
    };
    document.addEventListener('touchstart', handleOutsideTap);
    return () => document.removeEventListener('touchstart', handleOutsideTap);
  }, [isVisible, isTouchDevice]);

  const calculatePosition = useCallback(() => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const gap = 8;

    switch (position) {
      case 'top':
        setCoords({ top: rect.top - gap, left: rect.left + rect.width / 2 });
        break;
      case 'bottom':
        setCoords({ top: rect.bottom + gap, left: rect.left + rect.width / 2 });
        break;
      case 'left':
        setCoords({ top: rect.top + rect.height / 2, left: rect.left - gap });
        break;
      case 'right':
        setCoords({ top: rect.top + rect.height / 2, left: rect.right + gap });
        break;
    }
  }, [position]);

  const showTooltip = () => {
    calculatePosition();
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (dismissRef.current) {
      clearTimeout(dismissRef.current);
      dismissRef.current = null;
    }
    setIsVisible(false);
  };

  const handleTap = () => {
    if (!isTouchDevice) return;
    calculatePosition();
    setIsVisible(true);
    // Auto-dismiss after 2 seconds on touch
    if (dismissRef.current) clearTimeout(dismissRef.current);
    dismissRef.current = setTimeout(() => setIsVisible(false), 2000);
  };

  const transformMap: Record<TooltipPosition, string> = {
    top: 'translateX(-50%) translateY(-100%)',
    bottom: 'translateX(-50%)',
    left: 'translateX(-100%) translateY(-50%)',
    right: 'translateY(-50%)',
  };

  return (
    <span
      ref={triggerRef}
      className={`relative inline-flex ${className}`}
      onMouseEnter={!isTouchDevice ? showTooltip : undefined}
      onMouseLeave={!isTouchDevice ? hideTooltip : undefined}
      onTouchStart={isTouchDevice ? handleTap : undefined}
    >
      {children}
      {isVisible && mounted && createPortal(
        <span
          className="fixed px-2.5 py-1.5 text-xs font-medium whitespace-nowrap pointer-events-none bg-text text-surface rounded"
          style={{
            top: coords.top,
            left: coords.left,
            transform: transformMap[position],
            zIndex: 9999,
          }}
          role="tooltip"
        >
          {text}
        </span>,
        document.body,
      )}
    </span>
  );
}