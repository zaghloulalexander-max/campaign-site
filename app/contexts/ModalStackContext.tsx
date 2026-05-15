'use client';

import {
  createContext,
  useContext,
  useRef,
  useCallback,
  useState,
  useEffect,
  type ReactNode,
} from 'react';

import { MODAL_EXIT_DURATION } from '@/app/lib/animations';

const BASE_Z_INDEX = 50;
const EXIT_ANIMATION_DURATION_MS = MODAL_EXIT_DURATION * 1000;

interface ModalRegistration {
  id: string;
  zIndex: number;
}

interface ModalStackContextValue {
  register: () => ModalRegistration;
  unregister: (id: string) => void;
  isTopmost: (id: string) => boolean;
  modalCount: number;
}

const ModalStackContext = createContext<ModalStackContextValue | undefined>(undefined);

export function ModalStackProvider({ children }: { children: ReactNode }) {
  const stackRef = useRef<string[]>([]);
  const idCounter = useRef(0);
  const unlockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [modalCount, setModalCount] = useState(0);

  const lockScroll = useCallback(() => {
    const root = document.documentElement;
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    root.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

    const computedStyle = window.getComputedStyle(document.body);
    const currentPaddingRight = parseFloat(computedStyle.paddingRight) || 0;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
  }, []);

  const unlockScroll = useCallback(() => {
    const root = document.documentElement;
    root.style.removeProperty('--scrollbar-width');
    document.body.style.overflow = 'unset';
    document.body.style.paddingRight = '';
  }, []);

  const register = useCallback((): ModalRegistration => {
    const id = `modal-${++idCounter.current}`;
    const zIndex = BASE_Z_INDEX + stackRef.current.length;

    if (stackRef.current.length === 0) {
      if (unlockTimerRef.current) {
        clearTimeout(unlockTimerRef.current);
        unlockTimerRef.current = null;
      } else {
        lockScroll();
      }
    }

    stackRef.current = [...stackRef.current, id];
    setModalCount(stackRef.current.length);
    return { id, zIndex };
  }, [lockScroll]);

  const unregister = useCallback((id: string) => {
    stackRef.current = stackRef.current.filter((modalId) => modalId !== id);
    setModalCount(stackRef.current.length);

    if (stackRef.current.length === 0) {
      unlockTimerRef.current = setTimeout(() => {
        unlockScroll();
        unlockTimerRef.current = null;
      }, EXIT_ANIMATION_DURATION_MS);
    }
  }, [unlockScroll]);

  const isTopmost = useCallback((id: string) => {
    const stack = stackRef.current;
    return stack.length === 0 || stack[stack.length - 1] === id;
  }, []);

  useEffect(() => {
    return () => {
      if (unlockTimerRef.current) {
        clearTimeout(unlockTimerRef.current);
      }
      unlockScroll();
    };
  }, [unlockScroll]);

  return (
    <ModalStackContext.Provider value={{ register, unregister, isTopmost, modalCount }}>
      {children}
    </ModalStackContext.Provider>
  );
}

export function useModalStack(): ModalStackContextValue {
  const context = useContext(ModalStackContext);
  if (!context) {
    throw new Error('useModalStack must be used within a ModalStackProvider.');
  }
  return context;
}