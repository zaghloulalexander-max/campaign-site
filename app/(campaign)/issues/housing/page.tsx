import type { Metadata } from 'next';
import ArticlePage from '@/app/components/layout/ArticlePage';
import { getDictionary, defaultLocale } from '@/app/lib/i18n';

export const metadata: Metadata = {
  title: 'Housing & Cost of Living',
};

const CURRENT_HREF = '/issues/housing';

export default function HousingPage() {
  const dict = getDictionary(defaultLocale);
  const readMore = dict.issues.items.filter((item) => item.href !== CURRENT_HREF);

  return (
    <ArticlePage
      title="Housing & cost of living"
      imageAlt="Residential neighborhood in North Portland"
      imageCaption="North Portland"
      showImagePlaceholder
      readMore={readMore}
    >
      <p>
        Portland&apos;s housing crisis isn&apos;t just about building more units.
        It&apos;s about why the units we fund take four years and cost twice what
        they should.
      </p>

      {/* TODO: Replace with real content — insider knowledge on housing
          development timelines, funding mechanisms, what's broken in the
          pipeline, and what a commissioner can actually do about it. */}

      <p>
        Content for this page is in development. It will cover the county&apos;s
        role in housing development, why affordable units take so long and cost
        so much, and specific changes to the process that would make a
        measurable difference.
      </p>
    </ArticlePage>
  );
}