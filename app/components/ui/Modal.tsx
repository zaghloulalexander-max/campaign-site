'use client';

import { useEffect, useLayoutEffect, useCallback, useRef, useState, createContext, useContext, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { useModalStack } from '@/app/contexts/ModalStackContext';
import { MODAL_EXIT_DURATION, MODAL_ENTER_DURATION, EASING } from '@/app/lib/animations';

const BASE_Z_INDEX = 50;
const ENTER_Y = 60;
const EXIT_Y = 40;

interface ModalContextValue {
  handleClose: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  beforeClose?: () => boolean;
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = 'sm',
  closeOnBackdrop = true,
  closeOnEscape = true,
  beforeClose,
  className = '',
}: ModalProps) {
  const zIndexRef = useRef(BASE_Z_INDEX);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalIdRef = useRef<string | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const { register, unregister, isTopmost } = useModalStack();

  const handleClose = useCallback(() => {
    if (beforeClose && !beforeClose()) return;
    onClose();
  }, [onClose, beforeClose]);

  const handleBackdropClick = useCallback(() => {
    if (closeOnBackdrop && modalIdRef.current && isTopmost(modalIdRef.current)) {
      handleClose();
    }
  }, [closeOnBackdrop, isTopmost, handleClose]);

  // Register/unregister in modal stack
  useLayoutEffect(() => {
    if (isOpen) {
      const { id, zIndex: newZIndex } = register();
      modalIdRef.current = id;
      zIndexRef.current = newZIndex;
      return () => {
        if (modalIdRef.current) {
          unregister(modalIdRef.current);
          modalIdRef.current = null;
        }
      };
    } else if (modalIdRef.current) {
      unregister(modalIdRef.current);
      modalIdRef.current = null;
    }
  }, [isOpen, register, unregister]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedRef.current = document.activeElement as HTMLElement;
    } else if (previouslyFocusedRef.current) {
      const timer = setTimeout(() => {
        previouslyFocusedRef.current?.focus({ preventScroll: true });
        previouslyFocusedRef.current = null;
      }, MODAL_EXIT_DURATION * 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!closeOnEscape || !isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalIdRef.current && isTopmost(modalIdRef.current)) {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, handleClose, isTopmost]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;
    const modalElement = modalRef.current;
    const focusableSelectors = [
      'a[href]', 'button:not([disabled])', 'textarea:not([disabled])',
      'input:not([disabled])', 'select:not([disabled])', '[tabindex]:not([tabindex="-1"])',
    ].join(',');

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (!modalIdRef.current || !isTopmost(modalIdRef.current)) return;
      const focusableElements = Array.from(modalElement.querySelectorAll(focusableSelectors)) as HTMLElement[];
      if (focusableElements.length === 0) return;
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === firstElement) { e.preventDefault(); lastElement.focus(); }
      } else {
        if (document.activeElement === lastElement) { e.preventDefault(); firstElement.focus(); }
      }
    };
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen, isTopmost]);

  const sizeClasses = {
    xs: 'max-w-sm',
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-3xl',
  };

  const modalTitleId = title ? 'modal-title' : undefined;

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 flex items-center justify-center p-4 sm:p-6"
          style={{ zIndex: zIndexRef.current }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalTitleId}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASING.easeOut }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleBackdropClick}
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, y: ENTER_Y }}
            animate={{
              opacity: 1, y: 0,
              transition: { duration: MODAL_ENTER_DURATION, ease: EASING.easeOut },
            }}
            exit={{
              opacity: 0, y: EXIT_Y,
              transition: { duration: MODAL_EXIT_DURATION, ease: EASING.easeIn },
            }}
            className={[
              'relative bg-surface rounded-[var(--radius-lg)] w-full max-h-[85vh] sm:max-h-[90vh] flex flex-col overflow-hidden',
              'shadow-[0_8px_50px_rgba(0,0,0,0.25)] border border-border',
              'motion-reduce:transition-none',
              sizeClasses[size],
              className,
            ].filter(Boolean).join(' ')}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalContext.Provider value={{ handleClose }}>
              {children}
            </ModalContext.Provider>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

export function ModalBody({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`p-6 sm:p-8 space-y-4 overflow-y-auto flex-1 ${className}`}>
      {children}
    </div>
  );
}

Modal.Body = ModalBody;