import type { Metadata } from 'next';
import ArticlePage from '@/app/components/layout/ArticlePage';
import { getDictionary, defaultLocale } from '@/app/lib/i18n';

export const metadata: Metadata = {
  title: 'What Does a County Commissioner Do?',
  description: 'A Multnomah County commissioner votes on a $4 billion annual budget covering homeless services, behavioral health, public safety, transportation, and more.',
};

export default function CountyCommissionerPage() {
  const dict = getDictionary(defaultLocale);
  const readMore = dict.issues.items;

  return (
    <ArticlePage
      title="What does a Multnomah County commissioner do?"
      imageSrc="/issues/county-commissioner.avif"
      imageAlt="Illustration of the Multnomah County Building on Southeast Hawthorne"
      imageCaption="Multnomah County Building, Southeast Hawthorne"
      readMore={readMore}
    >
      <p>
        Multnomah County is governed by a board of five: a chair elected
        countywide and four commissioners elected by district. The chair
        runs the county, overseeing departments, directing staff, and
        proposing the annual budget. Commissioners don&apos;t manage
        departments. They vote on the budget, adopt policies and ordinances,
        approve labor agreements with county employee unions, and represent
        their district&apos;s residents. Each commissioner has their own
        office and staff. District 2 covers North and Northeast Portland.
        They serve four-year terms and are elected on non-partisan
        ballots.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        The budget
      </h2>

      <p>
        The budget is where a commissioner&apos;s vote matters most. Each
        spring, the chair proposes a spending plan and the board deliberates,
        amends, and votes on the final version. Individual commissioners
        shape the budget through amendments that redirect funding, add
        programs, or cut spending. For fiscal year 2026, that budget totals
        $4 billion and supports nearly 6,000 employees across 11
        departments:
      </p>

      <ul className="space-y-6 my-6 pl-5 list-disc marker:text-text-muted">
        <li><strong>Health Department</strong> ($531M): public health, behavioral health, and substance use treatment</li>
        <li><strong>Department of County Assets</strong> ($518M): buildings, facilities, technology, and records management</li>
        <li><strong>Department of County Human Services</strong> ($443M): seniors, people with disabilities, veterans, youth, families, and Preschool for All</li>
        <li><strong>Homeless Services Department</strong> ($310M): shelters, housing placement, and outreach</li>
        <li><strong>Department of County Management</strong> ($263M): budgeting, finance, human resources, and procurement</li>
        <li><strong>Nondepartmental</strong> ($239M): Chair&apos;s office, commissioners&apos; offices, and countywide programs</li>
        <li><strong>Sheriff&apos;s Office</strong> ($226M): jails, law enforcement, and civil services</li>
        <li><strong>Department of Community Services</strong> ($183M): elections, animal services, land use, and transportation</li>
        <li><strong>Multnomah County Library</strong> ($125M): 19 neighborhood libraries</li>
        <li><strong>Department of Community Justice</strong> ($118M): parole, probation, and juvenile justice</li>
        <li><strong>District Attorney&apos;s Office</strong> ($57M): criminal prosecution</li>
      </ul>

      <p>
        The Sheriff and the District Attorney are independently elected.
        The board sets their funding but doesn&apos;t manage their
        operations. The County Auditor is also independently elected and
        sits outside the department structure, reviewing county spending
        and investigating complaints.
      </p>

      <p>
        Budgets can change mid-year. If revenue falls short or state and
        federal funding is cut, the board votes on rebalancing measures that
        can reduce services, close programs, or shift resources.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What the county covers
      </h2>

      <p>
        The county and the city of Portland run separate governments with
        separate budgets. Metro, a regional layer of government, adds
        funding and coordination on top of both. The lines between them
        aren&apos;t always obvious.
      </p>

      <p>
        The county is the lead on homeless services, behavioral health and
        addiction treatment, and the justice system. The justice system
        includes the district attorney, the sheriff, the jails, and parole
        and probation. The county also funds supportive housing and rental assistance alongside the
        city and Metro.
      </p>

      <p>
        The county maintains six Willamette River bridges (Sellwood,
        Hawthorne, Morrison, Burnside, Broadway, and Sauvie Island) and
        269 miles of roads, mostly in east county and unincorporated areas.
        It doesn&apos;t maintain roads inside Portland or Gresham. The
        Earthquake Ready Burnside Bridge is a major county capital project.
      </p>

      <p>
        The county Elections Division runs all elections for every voter in
        Multnomah County: local, city, county, state, and federal.
      </p>

      <p>
        K-12 schools are managed by independent school districts, each with
        its own elected board. But the county runs the SUN Community Schools
        program, which operates in 94 schools across six districts,
        connecting families to after-school programs, food assistance, and
        health services. The county also operates Preschool for All for
        children under five and runs school-based health clinics.
      </p>

      <p>
        Public transit is separate. TriMet is a regional agency with its own
        board. Metro handles regional land use and transportation policy.
      </p>

      <p>
        Board meetings are held Thursdays at 9:30 a.m. Work sessions are
        Tuesdays at 10 a.m. All sessions are livestreamed and archived.
      </p>
    </ArticlePage>
  );
}