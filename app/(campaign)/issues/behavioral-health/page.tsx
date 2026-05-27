import type { Metadata } from 'next';
import ArticlePage from '@/app/components/layout/ArticlePage';
import { getDictionary, defaultLocale } from '@/app/lib/i18n';

export const metadata: Metadata = {
  title: 'Behavioral Health',
  description: 'The county\'s behavioral health system handles short-term care well. For people dealing with addiction, mental illness, and housing instability at the same time, there\'s almost nothing.',
};

const CURRENT_HREF = '/issues/behavioral-health';

export default function BehavioralHealthPage() {
  const dict = getDictionary(defaultLocale);
  const readMore = dict.issues.items.filter((item) => item.href !== CURRENT_HREF);

  return (
    <ArticlePage
      title="Behavioral health"
      imageSrc="/issues/behavioral-health.png"
      imageAlt="Illustration of a park bench at Wilshire Park in the Beaumont-Wilshire neighborhood"
      imageCaption="Beaumont-Wilshire, Northeast Portland"
      readMore={readMore}
    >
      <p>
        In Multnomah County, behavioral health is the umbrella for mental
        health services, addiction treatment, and crisis response. The county
        spends roughly $150 million a year on these services, and the demand
        is growing while funding is under pressure from multiple directions.
        I&apos;ve spent more than 20 years working in the county&apos;s
        behavioral health and human services programs and currently manage
        long-term rehabilitation through Bienestar.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What the county is responsible for
      </h2>

      <p>
        The Behavioral Health Division sits within the Health Department and
        serves as the county&apos;s local mental health authority. It
        delivers services both directly and through more than 100 contracts
        with community-based providers. The county pays for treatment and recovery
        services from its own general fund, not just state and federal
        dollars. Mental health and addiction services carry separate licensing
        and separate funding, even though the people who need one often need
        the other.
      </p>

      {/* Bridge data — sits between sections */}
      <p className="border-l-2 border-[#c37b62] pl-6 text-text-subtle text-[15px] italic my-16">
        In September 2025, CareOregon, the state&apos;s largest Medicaid
        provider, ended its intensive care coordination funding, opening a
        $4.6 million gap in the county&apos;s behavioral health budget. The
        Board covered $2.4 million. The rest came out of the youth, adult,
        and jail care coordination teams. The FY 2027 budget proposes
        further cuts to behavioral health.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What I&apos;ve seen
      </h2>

      <p>
        With a program I manage at Bienestar, we work with people for
        12 to 24 months, combining housing with treatment and employment
        support. We can assist five to
        eight people at a time. The funding isn&apos;t there for more.
      </p>

      <p>
        I&apos;ve worked with a woman who struggled with addiction and had
        been in and out of the justice system. When she got out, the county
        placed her in an apartment but didn&apos;t connect her with
        behavioral health services. She was selling the furniture to fund
        her habits. We brought her into our program, found her permanent
        housing, and spent the next 14 months getting her into regular
        treatment and helping her find work. I&apos;m happy to say
        she&apos;s now working, paying her own rent, and self-sufficient for
        the first time.
      </p>

      <p>
        We spent 14 months with her. Many people who come through the
        county&apos;s behavioral health system only need short-term
        counseling, and the system handles that. But for people dealing with
        addiction, mental illness, and housing instability at the same time,
        which is a common thread, there&apos;s not much in the way of
        comprehensive rehabilitation services to create a long-term change
        in behavior.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        Opportunities
      </h2>

      <p>
        The county declared a fentanyl state of emergency in March 2026.
        Its own addiction services staff have made it clear
        that traditional treatment approaches aren&apos;t working for
        fentanyl. Narcan, which can reverse an opioid overdose, saves lives
        in the moment but doesn&apos;t treat the addiction. You can
        declare all the emergencies you want. Without the treatment programs
        and practitioners to back it up, nothing changes.
      </p>

      <p>
        The county doesn&apos;t have enough licensed behavioral health
        practitioners for counseling or addiction treatment. And the programs
        they work for should be measuring what they produce. Treatment
        completion, patient progress, whether diagnoses are improving over
        time. Most of that isn&apos;t being tracked. When it is, it shows the public what their
        money is buying, and it shows the practitioners and staff what their
        work is producing. That&apos;s how they get the funding and support
        they need.
      </p>

      <p>
        At Bienestar, we&apos;ve shown what long-term rehabilitation can
        produce. That should be the standard for people with severe and
        overlapping needs, not an exception that reaches a handful at a
        time. It takes multi-year funding and committed staff, not one-time
        grants that end before the work is done.
      </p>

      <p>
        Commissioners vote on the budget every year. That&apos;s where these
        changes start.
      </p>
    </ArticlePage>
  );
}