import type { ButtonHTMLAttributes, ReactNode, ComponentType } from 'react';
import { CloseIcon, ArrowIcon, ChevronIcon, MenuIcon, type IconProps } from '@/app/components/ui/icons';

// ============================================================================
// TYPES
// ============================================================================

export type IconButtonSize = 'sm' | 'md' | 'lg';

export type IconButtonIcon = 'close' | 'arrow' | 'chevron' | 'menu';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Named icon or custom ReactNode */
  icon?: IconButtonIcon | ReactNode;
  size?: IconButtonSize;
  className?: string;
}

// ============================================================================
// ICON REGISTRY
// ============================================================================

const iconComponents: Record<IconButtonIcon, ComponentType<IconProps>> = {
  close: CloseIcon,
  arrow: ArrowIcon,
  chevron: ChevronIcon,
  menu: MenuIcon,
};

function isIconName(value: unknown): value is IconButtonIcon {
  return typeof value === 'string' && value in iconComponents;
}

// ============================================================================
// STYLE MAPS
// ============================================================================

const sizeClasses: Record<IconButtonSize, string> = {
  sm: 'p-1.5',
  md: 'p-2',
  lg: 'p-2.5',
};

// ============================================================================
// COMPONENT
// ============================================================================

function ResolvedIcon({ icon, size }: { icon: IconButtonIcon | ReactNode; size: IconButtonSize }) {
  if (isIconName(icon)) {
    const Component = iconComponents[icon];
    return <Component size={size} />;
  }
  return <>{icon}</>;
}

export default function IconButton({
  icon = 'close',
  size = 'md',
  className = '',
  ...props
}: IconButtonProps) {
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
      <ResolvedIcon icon={icon} size={size} />
    </button>
  );
}