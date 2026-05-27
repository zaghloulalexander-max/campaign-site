import type { Metadata } from 'next';
import ArticlePage from '@/app/components/layout/ArticlePage';
import { getDictionary, defaultLocale } from '@/app/lib/i18n';

export const metadata: Metadata = {
  title: 'Homelessness',
  description: 'The county spends $310 million a year on homelessness. People are becoming homeless faster than they are being housed.',
};

const CURRENT_HREF = '/issues/homelessness';

export default function HomelessnessPage() {
  const dict = getDictionary(defaultLocale);
  const readMore = dict.issues.items.filter((item) => item.href !== CURRENT_HREF);

  return (
    <ArticlePage
      title="Homelessness"
      imageSrc="/issues/homelessness.avif"
      imageAlt="Illustration of a residential street in the Hollywood neighborhood of Northeast Portland"
      imageCaption="Hollywood, Northeast Portland"
      readMore={readMore}
    >
      <p>
        The county spends $310 million a year on homelessness, and people are
        becoming homeless faster than they&apos;re being housed. I&apos;ve spent
        over 32 years inside county government, and for more than two decades
        I&apos;ve run housing stabilization, eviction prevention, and rehousing
        programs. I know what works, what doesn&apos;t, and what the staff on
        the ground need to deliver results.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What the county is responsible for
      </h2>

      <p>
        That $310 million flows through the county&apos;s Homeless Services
        Department, which coordinates shelters, housing placement, outreach,
        and case management. The county also funds dozens of nonprofit
        organizations to deliver these services on contract.
      </p>

      <p>
        With the Department of County Human Services, where I work, I oversee
        five of these programs directly: eviction prevention, housing support
        services, emergency housing, the Oregon Rehousing Initiative, and the
        Economic Justice and Recovery Program, which I created during the
        pandemic. They&apos;re funded separately and intervene at different
        points; they all address housing instability, from keeping families in
        their homes before they lose them to rehousing the homeless.
      </p>

      <p>
        The money comes from multiple sources: the county general fund, Metro&apos;s
        Supportive Housing Services tax, state funding through programs like the
        Oregon Diversion and Prevention Program, and federal dollars. All of
        these sources are under pressure. State funding came in $28 million below
        what was expected this fiscal year. Federal dollars are being pulled back.
        The county&apos;s general fund is constrained by a downtown real estate
        market that continues to underperform on property tax revenue.
      </p>

      {/* Bridge data — sits between sections */}
      <p className="border-l-2 border-[#aa7355] pl-6 text-text-subtle text-[15px] italic my-16">
        Unsheltered homelessness in Multnomah County increased 75% between
        2023 and 2025. Over 10,500 people experienced homelessness in the
        county in 2025, and people are becoming homeless faster than they are
        entering stable housing. At the same time, shelter vacancy rates
        remain high. City-run shelters average 50 to 60% occupancy. The county
        is cutting 600 beds this budget cycle, but many of those beds were
        already empty.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What I&apos;ve seen
      </h2>

      <p>
        I&apos;ve volunteered many times in the county&apos;s shelters,
        especially during COVID. The shelters are modest: mattresses on the
        floor in large open rooms, first come first served, open in the evening
        and closed by morning. The people inside are overwhelmingly grateful
        for a place to sleep. The shelter population is a mix of people with
        addiction or mental health issues and people who simply lost their
        housing. That distinction isn&apos;t tracked. The unsheltered population
        in encampments skews more heavily toward addiction and mental illness.
        Many unsheltered refuse shelters because drug use is prohibited inside
        and only enter shelters during extreme weather.
      </p>

      <p>
        Through a rehousing program I manage, we transition individuals and
        families from shelters into permanent housing. Last year we housed 75
        families on a $900,000 budget, roughly $8,000 to $12,000 per family.
        All 75 remained housed. That success depends on the same landlord
        partnerships that make the rehousing and eviction prevention work
        possible.
      </p>

      <p>
        A group that can sometimes be overlooked in the homelessness
        conversation is the individuals and families who are one emergency
        away from losing their housing. Across District 2 and Multnomah
        County, there are households where both adults work full time and
        still can&apos;t cover rent, utilities, childcare, and groceries.
        I&apos;ve worked with families where the difference between losing
        their home and keeping it came down to the support the county provides.
      </p>

      <p>
        I&apos;ve seen a father trying to support his wife and three daughters
        on minimum wage; every dollar goes to rent, with next to nothing left
        for utilities, insurance, or school expenses. We brought the family
        into our program and worked with his wife to get licensed as a
        childcare provider. With a second income, they were able to stabilize
        the household and are no longer at risk of losing their home.
      </p>

      <p>
        I&apos;ve seen a single mother without a job and mounting debts. We
        brought her into our program and supported her through career training,
        financial literacy workshops, and skill-building programs. With newly
        developed skills and competencies, she was, believe it or not, hired
        by the county and has continued to serve our community for the last
        several years. Not only that, her son graduates from university this
        year.
      </p>

      <p>
        These outcomes are unlikely to happen with a one-time rent check. When
        we invest in, and work with a family for 6 to 12 months, sometimes
        longer, we can address the underlying instability and change their
        trajectory for the better.
      </p>

      <p>
        In the programs I manage, we evaluate at three, six, nine, and twelve
        months to measure whether the assistance worked. Both families came
        through the Economic Justice and Recovery Program, which I created
        during the pandemic. In its first year, it had a budget of $7.5
        million drawn from general, state, and federal funds and served 2,800
        households. The Program&apos;s retention rate, the percentage of
        families still in their homes after we help them, is above 90%. The
        majority of the funding was one-time COVID funds, and now the
        Program&apos;s formal funding is effectively $0. I&apos;ve kept it
        running at a greatly reduced $350,000 budget by redirecting money
        from my existing programs.
      </p>

      <p>
        This year, my programs ran out of money almost three months before the
        end of the fiscal year. We have over a thousand people on the waitlist,
        and we stopped accepting new applications three months ago because
        there was no point. Eviction filings in the court system are surging.
        The demand has quadrupled compared to the pandemic years.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        Opportunities
      </h2>

      <p>
        First, programs receiving county funding should be able to demonstrate
        measurable outcomes. Programs that show strong retention rates and real
        progress toward housing stability should be prioritized, and when the
        budget permits, expanded. When funding is tied to outcomes, it protects
        the case managers, housing specialists, and staff who are in the
        trenches fighting to keep families housed.
      </p>

      <p>
        Most contracts with nonprofits measure how many households were served,
        not whether those households stayed housed. The county should be
        tracking, and publicly reporting, housing retention rates at three,
        six, nine, and twelve months after assistance. Every nonprofit contract
        should require quarterly reporting on those metrics.
      </p>

      <p>
        Second, the county needs to expand the Supportive Housing Alliance,
        formerly the master lease initiative. In this context, the county signs
        a master lease with a property owner for a block of units, e.g., 300
        units of a 1,000-unit building. The county becomes the sub-leaseholder
        and decides who moves in, managing tenant responsibilities and any
        issues that arise. The landlord gets paid rent monthly without
        absorbing the risk that comes with tenants who may not have income or
        credit history. For the county, it&apos;s more efficient than placing
        families one unit at a time and it removes the biggest barrier that
        keeps landlords from participating in solving homelessness.
      </p>

      <p>
        Third, prevention needs to be treated as a frontline strategy, not as
        an afterthought. When a family gets evicted and enters the shelter
        system, the cost to rehouse them is roughly double what it would have
        cost to keep them housed: first month, last month, deposit, plus legal
        fees that pile up once the case hits court.
      </p>

      <p>
        Commissioners vote on the budget every year. That&apos;s where these
        changes start.
      </p>
    </ArticlePage>
  );
}