import Section from '@/app/components/ui/Section';
import type { Dictionary } from '@/app/lib/i18n';

interface WorkforceProps {
  dict: Dictionary['workforce'];
}

export default function Workforce({ dict }: WorkforceProps) {
  return (
    <Section id="workforce" background="muted" ariaLabel="Supporting Workers">
      <div className="max-w-3xl">
        <p className="text-text-muted leading-[1.75] text-base">
          {dict.intro}
        </p>

        <h2 className="text-2xl md:text-3xl font-medium text-text mt-12 mb-10">
          {dict.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.pillars.map((pillar, i) => (
            <div key={i}>
              <h3 className="text-lg font-medium text-text mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}