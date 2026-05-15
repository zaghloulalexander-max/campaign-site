import type { ButtonHTMLAttributes, ReactNode } from 'react';

// ============================================================================
// TYPES
// ============================================================================

export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon element to render, or 'close' for default X icon */
  icon?: 'close' | ReactNode;
  size?: IconButtonSize;
  className?: string;
}

// ============================================================================
// STYLE MAPS
// ============================================================================

const sizeClasses: Record<IconButtonSize, string> = {
  sm: 'p-1.5',
  md: 'p-2',
  lg: 'p-2.5',
};

const iconSizeClasses: Record<IconButtonSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

// ============================================================================
// COMPONENT
// ============================================================================

export default function IconButton({
  icon = 'close',
  size = 'md',
  className = '',
  ...props
}: IconButtonProps) {
  const renderIcon = () => {
    if (icon === 'close') {
      return (
        <svg
          className={iconSizeClasses[size]}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      );
    }
    return icon;
  };

  return (
    <button
      type="button"
      className={[
        'rounded-[var(--radius-md)]',
        'transition-colors duration-150 motion-reduce:transition-none',
        'cursor-pointer',
        'inline-flex items-center justify-center',
        'text-text-subtle hover:text-text hover:bg-surface-hover',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size],
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {renderIcon()}
    </button>
  );
}