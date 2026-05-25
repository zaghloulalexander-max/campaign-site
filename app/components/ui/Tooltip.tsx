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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Wait for client mount before using portal
  useEffect(() => {
    setMounted(true);
  }, []);

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
    setIsVisible(false);
  };

  const transformMap: Record<TooltipPosition, string> = {
    top: 'translateX(-50%) translateY(-100%)',
    bottom: 'translateX(-50%)',
    left: 'translateX(-100%) translateY(-50%)',
    right: 'translateY(-50%)',
  };

  return (
    <div
      ref={triggerRef}
      className={`relative inline-flex ${className}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && mounted && createPortal(
        <div
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
        </div>,
        document.body,
      )}
    </div>
  );
}