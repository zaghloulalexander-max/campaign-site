import type { HTMLAttributes, ReactNode } from 'react';

// ============================================================================
// TYPES
// ============================================================================

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'ghost';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  as?: 'div' | 'section' | 'article';
}

// ============================================================================
// STYLE MAPS
// ============================================================================

const variantClasses = {
  default: 'border-[1.5px] border-border',
  elevated: 'shadow-[0_0_40px_rgba(0,0,0,0.08)]',
  bordered: 'border-2 border-border',
  ghost: 'border-0',
};

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-5 sm:p-6',
  lg: 'p-6 sm:p-8',
};

// ============================================================================
// COMPONENT
// ============================================================================

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  interactive = false,
  selected = false,
  disabled = false,
  onClick,
  as: Component = 'div',
  className = '',
  ...props
}: CardProps) {
  const classes = [
    'bg-surface rounded-[var(--radius-lg)] transition-all duration-200 motion-reduce:transition-none overflow-hidden',
    variantClasses[variant],
    paddingClasses[padding],
    interactive && !disabled ? 'cursor-pointer hover:shadow-md hover:-translate-y-0.5' : '',
    selected ? 'border-primary-600 border-2 scale-[1.01]' : '',
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
    (interactive || onClick) && !disabled
      ? 'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'
      : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`${classes} text-left w-full`}
        aria-pressed={selected}
        aria-disabled={disabled}
      >
        {children}
      </button>
    );
  }

  return (
    <Component
      className={classes}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive && !disabled ? 0 : undefined}
      aria-disabled={disabled || undefined}
      {...props}
    >
      {children}
    </Component>
  );
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

export function CardTitle({
  children,
  className = '',
  as: Component = 'h3',
  ...props
}: HTMLAttributes<HTMLHeadingElement> & { as?: 'h1' | 'h2' | 'h3' | 'h4' }) {
  return (
    <Component className={` text-lg font-semibold text-text ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function CardBody({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mt-3 text-sm text-text-muted leading-relaxed ${className}`} {...props}>
      {children}
    </div>
  );
}

Card.Title = CardTitle;
Card.Body = CardBody;