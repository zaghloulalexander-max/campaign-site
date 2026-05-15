import Section from '@/app/components/ui/Section';
import type { Dictionary } from '@/app/lib/i18n';

interface IssuesProps {
  dict: Dictionary['issues'];
}

export default function Issues({ dict }: IssuesProps) {
  return (
    <Section id="issues" background="default">
      <div className="max-w-3xl">
        <div>
          {dict.map((issue, i) => (
            <div
              key={issue.title}
              className={`py-10 ${i !== dict.length - 1 ? 'border-b border-border' : ''}`}
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