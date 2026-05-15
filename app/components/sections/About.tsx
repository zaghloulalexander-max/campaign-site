import Section from '@/app/components/ui/Section';
import type { Dictionary } from '@/app/lib/i18n';

interface AboutProps {
  dict: Dictionary['about'];
}

export default function About({ dict }: AboutProps) {
  return (
    <Section id="about" background="warm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="aspect-[4/5] rounded-[var(--radius-xl)] bg-surface-muted overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.08)]">
            <div className="w-full h-full bg-gradient-to-br from-primary-100/60 to-surface-muted flex items-center justify-center">
              <span className="text-text-subtle text-sm tracking-wide">{dict.photoAlt}</span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="space-y-5 text-text-muted leading-[1.75] text-base">
            {dict.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}