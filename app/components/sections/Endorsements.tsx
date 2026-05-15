import Section from '@/app/components/ui/Section';

interface Endorsement {
  name: string;
  title: string;
  quote: string;
}

// Replace with actual endorsements
const endorsements: Endorsement[] = [
  {
    name: 'Name',
    title: 'Title / Organization',
    quote: '"Endorsement quote goes here. Keep these genuine and specific — generic praise reads as fake."',
  },
  {
    name: 'Name',
    title: 'Title / Organization',
    quote: '"Another endorsement. The best ones name something specific the candidate has done."',
  },
  {
    name: 'Name',
    title: 'Title / Organization',
    quote: '"Third endorsement. Three is a good starting number — can always add more."',
  },
];

export default function Endorsements() {
  return (
    <Section id="endorsements" background="warm">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text">
          Endorsements
        </h2>
        <p className="mt-4 text-text-muted leading-relaxed">
          People who know this community trust this campaign.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {endorsements.map((endorsement, i) => (
          <div
            key={i}
            className="p-6 rounded-[var(--radius-lg)] bg-surface border border-border"
          >
            <p className="text-text-muted leading-relaxed italic text-sm">
              {endorsement.quote}
            </p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="font-semibold text-text text-sm">{endorsement.name}</p>
              <p className="text-xs text-text-subtle mt-0.5">{endorsement.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
