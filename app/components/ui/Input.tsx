'use client';

import { useId, useRef, useEffect } from 'react';
import type { InputHTMLAttributes } from 'react';

import { useIsTouchDevice } from '@/app/hooks/useMediaQuery';

// ============================================================================
// TYPES
// ============================================================================

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'autoFocus'> {
  label?: string;
  error?: string;
  srOnlyLabel?: boolean;
  /** true = autofocus on desktop only, 'always' = autofocus everywhere including mobile */
  autoFocus?: boolean | 'always';
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function Input({
  label,
  error,
  srOnlyLabel = false,
  autoFocus,
  className = '',
  id,
  disabled,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const inputRef = useRef<HTMLInputElement>(null);
  const isTouchDevice = useIsTouchDevice();

  useEffect(() => {
    if (isTouchDevice === null) return;

    const shouldFocus =
      autoFocus === 'always' ? true :
      autoFocus === true ? !isTouchDevice :
      false;

    if (shouldFocus) {
      inputRef.current?.focus();
    }
  }, [isTouchDevice, autoFocus]);

  const inputClassName = [
    'w-full p-3 text-base',
    'border-[1.5px] border-border',
    'rounded-[var(--radius-md)]',
    'bg-surface text-text placeholder:text-text-subtle',
    'transition-[border-color,box-shadow] duration-150',
    'outline-none focus:outline-none',
    'hover:border-border-strong',
    'focus:border-primary-400 focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)]',
    error ? 'border-red-500' : '',
    disabled ? 'opacity-50 cursor-not-allowed' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div>
      {label && (
        <label
          htmlFor={inputId}
          className={srOnlyLabel ? 'sr-only' : 'block text-sm font-medium text-text mb-2'}
        >
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        id={inputId}
        className={inputClassName}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}