import Section from '@/app/components/ui/Section';

interface Issue {
  title: string;
  description: string;
  icon: string;
}

// Replace with actual issues
const issues: Issue[] = [
  {
    title: 'Housing & Affordability',
    description:
      'Placeholder for the candidate\'s position on housing. Keep it to 2-3 sentences — voters scan, they don\'t read.',
    icon: '🏠',
  },
  {
    title: 'Public Safety',
    description:
      'Placeholder for the candidate\'s position on public safety. Specific, grounded, no jargon.',
    icon: '🛡️',
  },
  {
    title: 'Homelessness',
    description:
      'Placeholder for the candidate\'s position on homelessness. What will they actually do, not what they believe.',
    icon: '🤝',
  },
  {
    title: 'Climate & Environment',
    description:
      'Placeholder for the candidate\'s position on environment. County-level specifics, not national talking points.',
    icon: '🌲',
  },
  {
    title: 'Economic Opportunity',
    description:
      'Placeholder for the candidate\'s position on the economy. Small businesses, local jobs, workforce.',
    icon: '💼',
  },
  {
    title: 'Governance & Accountability',
    description:
      'Placeholder for the candidate\'s position on how county government should operate.',
    icon: '📋',
  },
];

export default function Issues() {
  return (
    <Section id="issues" background="default">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text">
          What I&apos;ll Fight For
        </h2>
        <p className="mt-4 text-text-muted leading-relaxed">
          These are the issues I hear about most — at doors, at community meetings,
          and from neighbors who want to see real change.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {issues.map((issue) => (
          <div
            key={issue.title}
            className="p-6 rounded-[var(--radius-lg)] bg-surface-warm border border-border
                       hover:border-primary-200 hover:shadow-sm transition-all duration-200"
          >
            <span className="text-2xl">{issue.icon}</span>
            <h3 className="mt-3 font-heading text-lg font-semibold text-text">
              {issue.title}
            </h3>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              {issue.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
