import Section from '@/app/components/ui/Section';

export default function About() {
  return (
    <Section id="about" background="warm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Photo */}
        <div className="order-2 md:order-1">
          <div className="aspect-[4/5] rounded-[var(--radius-lg)] bg-surface-muted overflow-hidden shadow-lg">
            {/* Replace with candidate photo */}
            <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
              <span className="text-text-subtle text-sm">Candidate Photo</span>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="order-1 md:order-2">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text leading-tight">
            Why I&apos;m Running
          </h2>
          <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
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
