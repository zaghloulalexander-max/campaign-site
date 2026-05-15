import Section from '@/app/components/ui/Section';

// ============================================================================
// DATA
// ============================================================================

interface Issue {
  title: string;
  body: string;
}

const issues: Issue[] = [
  {
    title: 'Homelessness & Services',
    body: 'Soluta nobis eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. Temporibus autem quibusdam et aut officiis debitis rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.',
  },
  {
    title: 'Public Safety',
    body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
  {
    title: 'Housing & Affordability',
    body: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.',
  },
  {
    title: 'Fiscal Accountability',
    body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
  },
  {
    title: 'Behavioral Health',
    body: 'Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.',
  },
  {
    title: 'County Operations',
    body: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
  },
];

// ============================================================================
// COMPONENT
// ============================================================================

export default function Issues() {
  return (
    <Section id="issues" background="default" labelledBy="issues-heading">
      <div className="max-w-3xl">
        <div>
          {issues.map((issue, i) => (
            <div
              key={issue.title}
              className={`py-10 ${i !== issues.length - 1 ? 'border-b border-border' : ''}`}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-text leading-snug">
                {issue.title}
              </h3>
              <p className="mt-4 text-base text-text-muted leading-relaxed">
                {issue.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}