import type { Metadata } from 'next';
import ArticlePage from '@/app/components/layout/ArticlePage';
import { getDictionary, defaultLocale } from '@/app/lib/i18n';

export const metadata: Metadata = {
  title: 'Public Safety',
};

const CURRENT_HREF = '/issues/public-safety';

export default function PublicSafetyPage() {
  const dict = getDictionary(defaultLocale);
  const readMore = dict.issues.items.filter((item) => item.href !== CURRENT_HREF);

  return (
    <ArticlePage
      title="Public safety"
      imageAlt="St. Johns Bridge, North Portland"
      imageCaption="St. Johns, North Portland"
      showImagePlaceholder
      readMore={readMore}
    >
      <p>
        The county&apos;s role in public safety isn&apos;t policing — it&apos;s the
        justice system, crisis response, and reentry programs that determine whether
        people cycle through or find a way out.
      </p>

      {/* TODO: Replace with real content — how the county's public safety
          budget works, jail staffing, the DA's office, crisis response,
          reentry programs, and what accountability looks like here. */}

      <p>
        Content for this page is in development. It will cover how the county
        funds public safety, what the justice system looks like from the inside,
        and where targeted investment would have the most impact on community
        safety.
      </p>
    </ArticlePage>
  );
}