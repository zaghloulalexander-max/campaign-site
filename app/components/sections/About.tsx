import Section from '@/app/components/ui/Section';

// ============================================================================
// COMPONENT
// ============================================================================

export default function About() {
  return (
    <Section id="about" background="warm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Photo */}
        <div className="order-2 lg:order-1">
          <div className="aspect-[4/5] rounded-[var(--radius-xl)] bg-surface-muted overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.08)]">
            {/* Replace with <Image /> when photo is ready */}
            <div className="w-full h-full bg-gradient-to-br from-primary-100/60 to-surface-muted flex items-center justify-center">
              <span className="text-text-subtle text-sm tracking-wide">Candidate Photo</span>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="order-1 lg:order-2">
          <div className="space-y-5 text-text-muted leading-[1.75] text-base">
            <p>
              [Candidate&apos;s story goes here. Keep it personal and specific — not a resume,
              but a window into who they are and what drives them. 2-3 paragraphs.]
            </p>
            <p>
              [What brought them to this moment. A specific experience, a pattern they&apos;ve
              seen in the community, a gap they want to fill.]
            </p>
            <p>
              [What they believe the county commission can do differently, and why
              they&apos;re the person to do it.]
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}