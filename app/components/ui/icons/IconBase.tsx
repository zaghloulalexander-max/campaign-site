import type { SVGAttributes, ReactNode } from 'react';

export type IconSize = 'sm' | 'md' | 'lg';

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'children'> {
  size?: IconSize;
}

const sizeClasses: Record<IconSize, string> = {
  sm: 'w-4 h-4 shrink-0',
  md: 'w-5 h-5 shrink-0',
  lg: 'w-6 h-6 shrink-0',
};

/**
 * Base SVG wrapper for all icons.
 * 24×24 viewBox, stroke-based, currentColor, aria-hidden by default.
 */
export default function IconBase({
  size = 'md',
  className,
  children,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={[sizeClasses[size], className].filter(Boolean).join(' ')}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}