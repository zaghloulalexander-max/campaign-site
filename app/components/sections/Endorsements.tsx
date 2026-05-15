import Section from '@/app/components/ui/Section';

// ============================================================================
// DATA
// ============================================================================

interface Endorsement {
  name: string;
  title: string;
  quote: string;
}

const endorsements: Endorsement[] = [
  {
    name: 'Name',
    title: 'Title / Organization',
    quote: 'Endorsement quote goes here. Keep these genuine and specific — generic praise reads as fake.',
  },
  {
    name: 'Name',
    title: 'Title / Organization',
    quote: 'Another endorsement. The best ones name something specific the candidate has done.',
  },
  {
    name: 'Name',
    title: 'Title / Organization',
    quote: 'Third endorsement. Three is a good starting number — can always add more.',
  },
];

// ============================================================================
// COMPONENT
// ============================================================================

export default function Endorsements() {
  return (
    <Section id="endorsements" background="warm" labelledBy="endorsements-heading">
      <div className="max-w-2xl mb-14">
        <p className="text-primary-500 text-sm font-medium tracking-wide uppercase mb-3">
          Endorsements
        </p>
        <h2
          id="endorsements-heading"
          className="text-3xl md:text-4xl font-semibold text-text leading-tight"
        >
          Trusted by the Community
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {endorsements.map((endorsement, i) => (
          <div
            key={i}
            className="relative bg-surface rounded-[var(--radius-lg)] border-[1.5px] border-border p-6 md:p-8"
          >
            {/* Decorative quote mark */}
            <span
              className="absolute top-4 left-6 text-5xl text-primary-200 leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="relative pt-8">
              <p className="text-text-muted leading-[1.75] text-[15px] italic">
                {endorsement.quote}
              </p>
              <footer className="mt-5 pt-5 border-t border-border">
                <p className="font-semibold text-text text-sm">{endorsement.name}</p>
                <p className="text-xs text-text-subtle mt-0.5">{endorsement.title}</p>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>
    </Section>
  );
}