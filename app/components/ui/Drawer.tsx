'use client';

import { useState, useEffect, useRef, useCallback, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

// ============================================================================
// TYPES
// ============================================================================

interface DrawerProps {
  /** Whether the drawer is open */
  isOpen: boolean;

  /** Callback when drawer should close */
  onClose: () => void;

  /** Drawer content */
  children: ReactNode;

  /**
   * Side the drawer slides in from
   * @default 'right'
   */
  side?: 'left' | 'right';

  /**
   * Accessible label for the drawer
   */
  ariaLabel?: string;

  /**
   * Element to receive focus when drawer opens.
   * If not provided, focuses the first focusable element.
   */
  initialFocusRef?: React.RefObject<HTMLElement | null>;

  /**
   * Element to receive focus when drawer closes.
   * If not provided, restores focus to the previously focused element.
   */
  returnFocusRef?: React.RefObject<HTMLElement | null>;
}

// ============================================================================
// CONSTANTS
// ============================================================================

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Slide-in drawer component.
 *
 * Features:
 * - Slides in from left or right
 * - Backdrop with blur and dark overlay
 * - Focus trap (Tab cycles within drawer)
 * - Scroll lock on body (with scrollbar width compensation)
 * - ESC to close
 * - Click outside to close
 * - Proper ARIA attributes
 * - Reduced motion support (CSS-driven)
 * - Self-contained scroll lock that defers to ModalStackContext if already locked
 */
export default function Drawer({
  isOpen,
  onClose,
  children,
  side = 'right',
  ariaLabel,
  initialFocusRef,
  returnFocusRef,
}: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const scrollLockApplied = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // --------------------------------------------------------------------------
  // Focus: store previously focused element on open
  // --------------------------------------------------------------------------

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
    }
  }, [isOpen]);

  // --------------------------------------------------------------------------
  // Focus: set initial focus when opening
  // --------------------------------------------------------------------------

  useEffect(() => {
    if (!isOpen) return;

    const focusInitial = () => {
      if (initialFocusRef?.current) {
        initialFocusRef.current.focus();
      } else if (drawerRef.current) {
        const firstFocusable = drawerRef.current.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
        if (firstFocusable) {
          firstFocusable.focus();
        } else {
          drawerRef.current.focus();
        }
      }
    };

    requestAnimationFrame(focusInitial);
  }, [isOpen, initialFocusRef]);

  // --------------------------------------------------------------------------
  // Focus: restore on close
  // --------------------------------------------------------------------------

  useEffect(() => {
    if (isOpen) return;

    if (previousActiveElement.current) {
      const elementToFocus = returnFocusRef?.current ?? previousActiveElement.current;
      elementToFocus?.focus();
      previousActiveElement.current = null;
    }
  }, [isOpen, returnFocusRef]);

  // --------------------------------------------------------------------------
  // Scroll lock (self-contained, defers if already locked by Modal)
  // --------------------------------------------------------------------------

  useEffect(() => {
    if (!isOpen) {
      if (scrollLockApplied.current) {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        scrollLockApplied.current = false;
      }
      return;
    }

    // If ModalStackContext (or another Drawer) already locked scroll, don't double-lock
    const isAlreadyLocked = document.body.style.overflow === 'hidden';

    if (!isAlreadyLocked) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      scrollLockApplied.current = true;
    }

    return () => {
      if (scrollLockApplied.current) {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        scrollLockApplied.current = false;
      }
    };
  }, [isOpen]);

  // --------------------------------------------------------------------------
  // ESC to close
  // --------------------------------------------------------------------------

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // --------------------------------------------------------------------------
  // Focus trap
  // --------------------------------------------------------------------------

  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;

    const drawer = drawerRef.current;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const focusableElements = drawer.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    drawer.addEventListener('keydown', handleTabKey);
    return () => drawer.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  // --------------------------------------------------------------------------
  // Backdrop click
  // --------------------------------------------------------------------------

  const handleBackdropClick = useCallback(() => {
    onClose();
  }, [onClose]);

  // --------------------------------------------------------------------------
  // SSR guard — wait for mount so server and client render the same tree
  // --------------------------------------------------------------------------

  if (!mounted) return null;

  // --------------------------------------------------------------------------
  // Render
  // --------------------------------------------------------------------------

  const translateClass = side === 'right'
    ? (isOpen ? 'translate-x-0' : 'translate-x-full')
    : (isOpen ? 'translate-x-0' : '-translate-x-full');

  const positionClass = side === 'right' ? 'right-0' : 'left-0';

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={[
          'fixed inset-0 bg-primary-800/60 backdrop-blur-sm z-40',
          'transition-opacity duration-250 ease-in-out',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal={isOpen}
        aria-hidden={!isOpen}
        aria-label={ariaLabel}
        tabIndex={-1}
        inert={!isOpen ? (true as unknown as undefined) : undefined}
        className={[
          'fixed top-0 h-full bg-surface z-50 outline-none',
          'w-80 max-w-[85vw]',
          'transition-transform duration-250 ease-in-out motion-reduce:transition-none',
          positionClass,
          translateClass,
          isOpen ? 'shadow-2xl' : '',
        ].filter(Boolean).join(' ')}
      >
        {children}
      </div>
    </>,
    document.body,
  );
}