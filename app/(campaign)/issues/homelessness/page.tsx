import type { Metadata } from 'next';
import ArticlePage from '@/app/components/layout/ArticlePage';
import { getDictionary, defaultLocale } from '@/app/lib/i18n';

export const metadata: Metadata = {
  title: 'Homelessness & Behavioral Health',
};

const CURRENT_HREF = '/issues/homelessness';

export default function HomelessnessPage() {
  const dict = getDictionary(defaultLocale);
  const readMore = dict.issues.items.filter((item) => item.href !== CURRENT_HREF);

  return (
    <ArticlePage
      title="Homelessness & behavioral health"
      imageAlt="Community outreach in Northeast Portland"
      imageCaption="Northeast Portland"
      showImagePlaceholder
      readMore={readMore}
    >
      <p>
        The county spent $247 million on homeless services last year. I&apos;ve seen
        where that money goes — and where it gets lost between agencies, contracts,
        and good intentions.
      </p>

      {/* TODO: Replace with real content — personal story, insider knowledge,
          specific numbers, what he'd change. This page should read like a
          briefing, not a platform document. */}

      <p>
        Content for this page is in development. It will cover how the county&apos;s
        homeless services system works, where funding flows, what&apos;s effective,
        and what needs to change — written from 30 years of experience inside
        county operations.
      </p>
    </ArticlePage>
  );
}