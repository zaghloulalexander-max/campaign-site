import { type ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'warm' | 'muted' | 'primary';
}

const bgStyles = {
  default: 'bg-surface',
  warm: 'bg-surface-warm',
  muted: 'bg-surface-muted',
  primary: 'bg-primary-600 text-text-inverse',
};

export default function Section({
  id,
  children,
  className = '',
  background = 'default',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${bgStyles[background]} ${className}`}
    >
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-8">
        {children}
      </div>
    </section>
  );
}
