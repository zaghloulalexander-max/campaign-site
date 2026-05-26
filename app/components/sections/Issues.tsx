import Link from 'next/link';
import Section from '@/app/components/ui/Section';
import { ArrowIcon } from '@/app/components/ui/icons';
import type { Dictionary } from '@/app/lib/i18n';

// ============================================================================
// TYPES
// ============================================================================

interface IssuesProps {
  dict: Dictionary['issues'];
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function Issues({ dict }: IssuesProps) {
  return (
    <Section id="issues" background="default">
      {/* Educational intro — full width */}
      <div className="max-w-3xl">
        <p className="text-2xl md:text-3xl lg:text-[1.75rem] font-normal text-text leading-snug">
          <Link
            href={dict.questionHref}
            className="underline decoration-border hover:decoration-text underline-offset-4 transition-colors duration-150 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
          >
            {dict.question}
          </Link>
          {' '}
          <span className="text-text-muted">{dict.answer}</span>
        </p>
      </div>

      {/* Divider */}
      <div className="border-b border-border my-16 md:my-20" />

      {/* Two-column layout — heading + pillars left, teasers right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-16 lg:gap-20">

        {/* Left column — Heading + lead-in */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-text leading-none tracking-tight">
            {dict.heading}
          </h2>
          <p className="mt-20 text-[17px] text-text-muted leading-relaxed">
            {dict.leadIn}
          </p>
          <p className="mt-6 text-base text-text-muted leading-relaxed">
            {dict.leadInBody}
          </p>
        </div>

        {/* Right column — Issue teasers */}
        <div>
          {dict.items.map((issue, i) => (
            <Link
              key={issue.title}
              href={issue.href}
              className={[
                'group block py-8',
                i === 0 ? 'pt-0' : '',
                i !== dict.items.length - 1 ? 'border-b border-border' : '',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded',
              ].filter(Boolean).join(' ')}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-text leading-snug group-hover:underline underline-offset-4">
                {issue.title}
              </h3>
              <p className="mt-3 text-base text-text-muted leading-relaxed">
                {issue.body}
              </p>
              <span className="mt-4 -ml-2 px-2 py-1.5 inline-flex items-center gap-1.5 text-sm text-text-subtle group-hover:text-text transition-colors duration-150 motion-reduce:transition-none">
                <span>{dict.keepReading}</span>
                <ArrowIcon size="sm" className="transition-transform duration-150 ease-out group-hover:translate-x-1 motion-reduce:transition-none" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}