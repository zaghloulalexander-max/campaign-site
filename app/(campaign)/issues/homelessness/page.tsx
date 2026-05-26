import type { Metadata } from 'next';
import ArticlePage from '@/app/components/layout/ArticlePage';
import { getDictionary, defaultLocale } from '@/app/lib/i18n';

export const metadata: Metadata = {
  title: 'Homelessness',
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
        The county&apos;s Homeless Services Department has a $310 million budget.
        I&apos;ve spent more than 32 years inside county government, managing
        housing programs, reviewing contracts, building budgets, and working
        directly with individuals, families, and their children in crisis.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What the county is responsible for
      </h2>

      <p>
        Multnomah County is the lead agency on homelessness in the area.
        The Homeless Services Department coordinates shelters, housing
        placement, outreach, and funds case management. The county also funds dozens of
        nonprofit organizations to deliver these services on contract.
      </p>

      <p>
        The Department of County Human Services, where I work, runs several
        programs that address housing instability before and after it becomes
        homelessness. Eviction prevention, housing support services, emergency
        housing, and the Economic Justice and Recovery Program, which I created
        during the pandemic, all operate separately with separate funding. The
        Oregon Rehousing Initiative is another. Each serves a different
        population and a different stage of crisis, but they all deal with the
        same problem: keeping people housed or getting them housed again.
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

      <h2 className="text-2xl font-semibold text-text mt-8">
        What I&apos;ve seen
      </h2>

      <p>
        The $310 million isn&apos;t being lost. It&apos;s being spent, but
        without the strategic framework to know whether it&apos;s working.
        The county directs significant funding to nonprofit organizations and
        tells them: here&apos;s the money, here&apos;s how many households we
        want you to serve. Until recently, that was about all the direction they
        got. Most contracts measured one thing: how many households were served.
        Not whether those households stayed housed. Not whether the money
        actually prevented an eviction six months later. Just throughput.
      </p>

      <p>
        In the programs I manage, we evaluate at three, six, nine, and twelve
        months to measure whether the assistance actually worked. The Economic
        Justice and Recovery Program, which I created during the pandemic, in
        combination with general, state, and federal funds served
        2,800 households in its first year with a $7.5 million budget. Our
        retention rate, the percentage of families still in their homes after we
        help them, is above 90%. The federal dollars that built it were
        one-time. When they expired, the program&apos;s funding went to zero. I
        kept it running at $350,000 by redirecting money from my existing
        budget.
      </p>

      <p>
        Through that program, a father supporting a wife and three daughters on
        minimum wage, with every dollar going to rent, nothing left for
        utilities, insurance, school costs. We enrolled the family, helped his wife get
        licensed as a childcare provider, and that second income stabilized the
        household. A single mother with no work and mounting debt. We got her
        into job training, financial literacy workshops, and skill-building
        programs. She was eventually hired into county government. Her son is
        graduating from university this year. These outcomes
        don&apos;t happen with a one-time rent check. They happen when you work
        with a family for 6 to 12 months, sometimes longer, and address the
        underlying instability.
      </p>

      <p>
        I&apos;ve pushed for years to extend those same performance expectations
        to every organization receiving county funding. In the last couple of
        years, some progress has been made. But it&apos;s not happening across
        the board.
      </p>

      <p>
        I&apos;ve volunteered several times in the county&apos;s shelters. They are modest
        spaces: mattresses on the floor in large open rooms, first come first
        served, open in the evening and closed by morning. The people inside
        are overwhelmingly grateful for a place to sleep. The shelter
        population is a mix of people with addiction or mental health issues
        and people who simply lost their housing. The county does not track the
        distinction. The unsheltered population in encampments skews more
        heavily toward addiction and mental illness. Many refuse shelters
        because drug use is prohibited inside and only come in during extreme
        weather.
      </p>

      <p>
        Unsheltered homelessness in Multnomah County increased 75% between
        2023 and 2025. Over 10,500 people experienced homelessness in the
        county in 2025, and people are becoming homeless faster than they are
        entering stable housing. At the same time, shelter vacancy rates
        remain high. City-run shelters average 50 to 60% occupancy. The county
        is cutting 600 beds this budget cycle, but many of those beds were
        already empty.
      </p>

      <p>
        Through a separate rehousing program I manage, we transition
        individuals and families from shelters into permanent housing. Last
        year we housed 75 families on a $900,000 budget, roughly $8,000 to
        $12,000 per family. All 75 remained housed. That success depends on the same
        landlord partnerships that make the rehousing and eviction prevention work
        possible. Other programs attempt similar work but have not come
        close to the same results.
      </p>

      <p>
        A group that often gets overlooked in the homelessness conversation is
        working families who are one emergency away from losing their housing.
        Across District 2 and Multnomah County, there are households where both
        adults work full time and still can&apos;t cover rent, utilities,
        childcare, and groceries. These families don&apos;t show up in the
        homeless count.
      </p>

      <p>
        Meanwhile, the demand has overwhelmed the supply. This year, my programs
        ran out of money almost three months before the end of the fiscal year. We have
        over a thousand people on the waitlist, and we stopped accepting new
        applications three months ago because there was no point. Eviction filings in
        the court system are surging. The demand has quadrupled compared to the
        pandemic years.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What can be improved
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
        Second, the county needs to expand the Supportive Housing Alliance,
        formerly the master lease initiative. Here&apos;s
        how they work: the county signs a master lease with a property owner for a
        block of units, say 300 out of a 1,000-unit building. The county becomes
        the sub-leaseholder. We decide who moves in, we manage tenant
        responsibilities, we handle any issues. The landlord simply gets paid
        monthly rent without taking on the risk that comes with tenants who may
        not have income or credit history. It&apos;s faster than placing families
        one unit at a time, it removes the barrier that keeps landlords from
        participating, and it creates predictability for property owners.
        Historically, the county has stayed away from this model but should not
        be afraid of trying new things, especially if they work.
      </p>

      <p>
        Third, prevention needs to be treated as a frontline strategy, not an
        afterthought. When a family gets evicted and enters the shelter system,
        the cost to rehouse them is roughly double what it would have cost to keep
        them housed: first month, last month, deposit, plus legal fees that pile
        up once the case hits court.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        How progress gets measured
      </h2>

      <p>
        The county should be tracking, and publicly reporting, housing retention
        rates at three, six, nine, and twelve months after assistance. Not just
        how many people were served, but how many are still housed. Every
        nonprofit contract should require quarterly reporting on those metrics.
        Programs that consistently meet retention benchmarks get continued
        funding. Programs that don&apos;t get a clear timeline to improve, and if
        they can&apos;t, the money moves to programs that deliver.
      </p>

      <p>
        Commissioners vote on the budget every year. That&apos;s where these
        changes start. I&apos;d push for performance reviews of every funded
        program before the next budget cycle and use the data to redirect funding
        toward what works. I&apos;d build partnerships
        with landlords and property managers, addressing their business concerns,
        to expand housing options beyond what the county can provide directly.
        Homelessness requires coordination across the county, the cities, Metro,
        nonprofits, and the private sector. That coordination starts with the
        county spending smarter and measuring honestly.
      </p>
    </ArticlePage>
  );
}