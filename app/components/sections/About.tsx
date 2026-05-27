import Image from 'next/image';
import Section from '@/app/components/ui/Section';
import type { Dictionary } from '@/app/lib/i18n';

interface AboutProps {
  dict: Dictionary['about'];
}

export default function About({ dict }: AboutProps) {
  return (
    <Section id="about" background="warm" ariaLabel="About Nabil">
      <div className="mt-8 md:mt-12">
        <div className="float-none md:float-left md:mr-10 md:mb-6 md:w-[55%] mb-8">
          <div className="aspect-[4/3] rounded-[var(--radius-xl)] bg-surface-muted overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.08)] relative">
            <Image
              src="/images/about-headshot.jpeg"
              alt={dict.photoAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
          </div>
        </div>

        <div className="space-y-5 text-text-muted leading-[1.75] text-base">
          {dict.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}