import type { Metadata } from 'next';
import ArticlePage from '@/app/components/layout/ArticlePage';
import { getDictionary, defaultLocale } from '@/app/lib/i18n';

export const metadata: Metadata = {
  title: 'What Does a County Commissioner Do?',
  description: 'What does a Multnomah County commissioner do? How the board works, what the county is responsible for, and how the $4 billion budget gets set.',
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
      {/* S1: The Board of County Commissioners */}
      <h2 className="text-2xl font-semibold text-text mt-8">The Board of County Commissioners</h2>

      <p>
        Multnomah County is governed by a Board of County Commissioners made up
        of a Chair, who is elected countywide, and four district commissioners.
        Each commissioner represents one of four geographic districts. District 2
        covers North and Northeast Portland. Commissioners serve four-year terms
        and are elected on non-partisan ballots.
      </p>

      <p>
        The board conducts its business in public every Tuesday and Thursday. On
        Tuesdays, commissioners and department leaders work through specific
        topics, including how programs are performing, where the county
        budget stands relative to projections, and what changes are being
        considered in response to state and federal funding shifts. On Thursdays,
        the board holds formal meetings where votes are taken and residents can
        testify. All sessions are livestreamed and archived.
      </p>

      {/* S2: The role of a commissioner */}
      <h2 className="text-2xl font-semibold text-text mt-8">The role of a commissioner</h2>

      <p>
        The County Chair serves as the chief executive of Multnomah County. The
        Chair oversees day-to-day operations, directs department heads, and
        proposes the annual budget. Commissioners do not manage departments.
        The Chair appoints and directs department heads.
      </p>

      <p>
        Commissioners serve as the county&apos;s legislative body. They review
        and amend the budget, adopt county policies and ordinances, approve labor
        agreements with county employee unions, and act as liaisons to specific
        departments, advisory boards, and commissions. Each commissioner
        represents their district&apos;s residents and has their own office and
        staff.
      </p>

      {/* S3: What the county is responsible for */}
      <h2 className="text-2xl font-semibold text-text mt-8">What the county is responsible for</h2>

      <p>
        Multnomah County and the city of Portland operate separate governments
        with separate budgets, but many of the services residents rely on are
        funded and delivered by both. A third layer of regional government, Metro,
        adds additional funding and coordination.
      </p>

      <p>
        <strong>Homelessness</strong> is split across all three levels. The
        county&apos;s Homeless Services Department coordinates most shelters,
        housing placement, outreach, and case management. The city runs its own
        shelter system, including outdoor Safe Rest Villages with wraparound
        services. Metro&apos;s voter-approved Supportive Housing Services tax
        funds programs at both levels. Dozens of nonprofit organizations deliver
        services on contract with one or both governments.
      </p>

      <p>
        <strong>Housing</strong> is similarly divided. The county funds supportive
        housing and rental assistance through the Supportive Housing Services tax.
        The city&apos;s Portland Housing Bureau funds affordable housing
        development, rental assistance, and eviction prevention. Home Forward, the
        regional housing authority, operates independently of both. All three
        fund housing through separate programs and funding streams.
      </p>

      <p>
        <strong>Behavioral health</strong> is primarily a county responsibility in
        Oregon. The county&apos;s Health Department provides mental health
        services, substance use treatment, crisis response, and runs the
        county&apos;s 24/7 behavioral health crisis line. The city also funds
        complementary programs, including sobering beds and behavioral health
        outreach, but the county is the lead.
      </p>

      <p>
        <strong>Public safety</strong> spans both levels. The city funds the
        Portland Police Bureau and Portland Fire and Rescue. The county funds the
        Sheriff&apos;s Office, which operates two jails with over 1,100 beds,
        provides security on TriMet, patrols county waterways, and serves as law
        enforcement in unincorporated areas and contract cities like Fairview and
        Troutdale. The county also funds the District Attorney&apos;s Office,
        which prosecutes criminal cases, and the Department of Community Justice,
        which manages adult parole and probation and the juvenile justice system.
        The city and county share the Justice Center building downtown.
      </p>

      <p>
        <strong>Transportation</strong> is divided geographically. The county
        maintains six Willamette River bridges (Sellwood, Hawthorne, Morrison,
        Burnside, Broadway, and Sauvie Island) and 269 miles of roads, mostly in
        east county and unincorporated areas. The county does not maintain any
        roads inside Portland or Gresham. The city&apos;s Bureau of
        Transportation manages city streets, sidewalks, bike lanes, signals, and
        streetlights. The Earthquake Ready Burnside Bridge, a major seismic
        resilience project, is a county capital project.
      </p>

      <p>
        <strong>Elections</strong> are entirely a county function. The county
        Elections Division runs all local, city, county, state, and federal
        elections for every voter in Multnomah County.
      </p>

      <p>
        <strong>Education</strong> is not directly a county function. K-12 schools
        are managed by independent school districts, including Portland Public
        Schools, David Douglas, Reynolds, Parkrose, and others, each with its own
        elected board. The county does, however, manage the SUN (Schools Uniting
        Neighborhoods) Community Schools program, which operates in 94 schools
        across six districts, turning them into community hubs that connect
        families to after-school programs, food assistance, health services, and
        other resources. The county also operates the Preschool for All program
        for children under five through the Department of County Human Services,
        and the Health Department runs school-based health clinics.
      </p>

      <p>
        <strong>Public transit</strong> is also separate. TriMet is a regional
        agency governed by its own board. Metro handles regional land use
        planning, growth management, and transportation policy. State agencies
        control highway infrastructure and statewide housing and land use policy.
      </p>

      {/* S4: Setting the county budget */}
      <h2 className="text-2xl font-semibold text-text mt-8">Setting the county budget</h2>

      <p>
        Each spring, the board receives the Chair&apos;s proposed budget, then
        deliberates, amends, and votes on the final version. Individual
        commissioners shape the budget through amendments that redirect funding,
        add programs, or cut spending. For fiscal year 2026, that budget totals
        $4 billion and supports nearly 6,000 employees across 11 departments:
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
        Three of those offices are led by independently elected officials: the
        Sheriff, the District Attorney, and the County Auditor. The board sets
        their funding levels but does not manage their operations. The Auditor,
        whose office is separate from the 11 departments, independently reviews
        county spending, evaluates program performance, and investigates
        complaints.
      </p>

      <p>
        Budgets can also change mid-year. If revenue falls short or federal and
        state funding is cut, the board votes on rebalancing measures that can
        reduce services, close programs, or shift resources. In fiscal year 2026,
        the board approved mid-year cuts affecting rent assistance, transitional
        housing, food assistance, and other services after significant state and
        federal funding reductions.
      </p>

      <p>
        These decisions, from the annual budget to mid-year adjustments, shape
        how the county delivers services to over 800,000 residents.
      </p>

    </ArticlePage>
  );
}