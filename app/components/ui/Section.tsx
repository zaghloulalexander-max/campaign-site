import { type ReactNode } from 'react';

// ============================================================================
// TYPES
// ============================================================================

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'warm' | 'muted' | 'primary';
  /** ID of the heading element for aria-labelledby */
  labelledBy?: string;
}

// ============================================================================
// STYLE MAPS
// ============================================================================

const bgStyles: Record<NonNullable<SectionProps['background']>, string> = {
  default: 'bg-surface',
  warm: 'bg-surface-warm',
  muted: 'bg-surface-muted',
  primary: 'bg-primary-700 text-text-inverse',
};

// ============================================================================
// COMPONENT
// ============================================================================

export default function Section({
  id,
  children,
  className = '',
  background = 'default',
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${bgStyles[background]} ${className}`}
      aria-labelledby={labelledBy}
    >
      <div className="relative z-10 mx-auto max-w-[var(--content-max)] px-6 md:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}