import type { SVGAttributes } from 'react';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerIconProps extends Omit<SVGAttributes<SVGSVGElement>, 'children'> {
  size?: SpinnerSize;
}

const sizeClasses: Record<SpinnerSize, string> = {
  sm: 'w-4 h-4 shrink-0',
  md: 'w-5 h-5 shrink-0',
  lg: 'w-6 h-6 shrink-0',
};

/**
 * Animated loading spinner.
 * Uses fill rather than stroke, so it extends SVGAttributes directly
 * instead of using IconBase.
 */
export default function SpinnerIcon({
  size = 'md',
  className,
  ...props
}: SpinnerIconProps) {
  return (
    <svg
      className={[sizeClasses[size], 'animate-spin', className].filter(Boolean).join(' ')}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}