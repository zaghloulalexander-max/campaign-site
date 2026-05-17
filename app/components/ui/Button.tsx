import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { ArrowIcon, ChevronIcon, SpinnerIcon } from '@/app/components/ui/icons';

// ============================================================================
// TYPES
// ============================================================================

export type ButtonVariant =
  | 'primary'    // Charcoal solid — main actions on light backgrounds
  | 'secondary'  // Warm white solid — actions on dark backgrounds
  | 'outline'    // Charcoal outline — secondary actions
  | 'ghost'      // Subtle — tertiary actions
  | 'link';      // Text only — inline links

export type ButtonSize =
  | 'sm'   // px-4 py-2 text-sm
  | 'md'   // px-6 py-3 (default)
  | 'lg';  // px-8 py-4 text-lg

export type AnimatedIcon = 'arrow' | 'chevron';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  animatedIcon?: AnimatedIcon;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  iconOnly?: boolean;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

type ButtonAsLink = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { as: 'a'; href: string };

type WithIconOnly<T> =
  | (T & { iconOnly?: false })
  | (T & { iconOnly: true; 'aria-label': string });

export type ButtonProps = WithIconOnly<ButtonAsButton | ButtonAsLink>;

// ============================================================================
// STYLE MAPS
// ============================================================================

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-800 text-text-inverse hover:bg-primary-900 active:bg-primary-900 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 shadow-sm hover:shadow-md',
  secondary:
    'bg-surface text-primary-800 hover:bg-surface-muted active:bg-surface-hover focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 shadow-sm hover:shadow-md',
  outline:
    'bg-transparent border-[1.5px] border-primary-400 text-primary-700 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
  ghost:
    'text-text-muted hover:bg-surface-hover hover:text-text focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
  link:
    'text-primary-700 hover:text-primary-900 p-0 rounded-none underline-offset-2 hover:underline focus-visible:ring-2 focus-visible:ring-primary-500',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const AnimatedIconSvg: Record<AnimatedIcon, ReactNode> = {
  arrow: (
    <ArrowIcon
      size="sm"
      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out motion-reduce:transition-none"
    />
  ),
  chevron: (
    <ChevronIcon
      size="sm"
      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out motion-reduce:transition-none"
    />
  ),
};

// ============================================================================
// COMPONENT
// ============================================================================

export default function Button({
  as = 'button',
  variant = 'primary',
  size = 'md',
  animatedIcon,
  fullWidth = false,
  loading = false,
  iconOnly = false,
  disabled,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = [
    'rounded-[var(--radius-md)]',
    'font-semibold',
    'transition-all duration-150 motion-reduce:transition-none',
    'cursor-pointer',
    'focus:outline-none',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
    'active:enabled:scale-[0.98]',
    'inline-block',
    animatedIcon ? 'group' : '',
    variantClasses[variant],
    !iconOnly && variant !== 'link' ? sizeClasses[size] : '',
    iconOnly ? 'p-2' : '',
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <span className={`relative inline-flex items-center justify-center ${animatedIcon ? 'gap-1.5' : ''}`}>
      <span className={loading ? 'invisible' : undefined}>{children}</span>
      {animatedIcon && !loading && AnimatedIconSvg[animatedIcon]}
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center" aria-label="Loading">
          <SpinnerIcon size="md" />
        </span>
      )}
    </span>
  );

  if (as === 'a') {
    const { href, ...anchorRest } = props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string };
    const isInternal = href.startsWith('/') && !href.startsWith('//');

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...anchorRest}>
          {content}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...anchorRest}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}