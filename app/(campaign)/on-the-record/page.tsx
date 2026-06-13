import type { Metadata } from 'next';
import ArticlePage from '@/app/components/layout/ArticlePage';
import { getDictionary, defaultLocale } from '@/app/lib/i18n';

export const metadata: Metadata = {
  title: 'On the Record',
  description: 'Every union questionnaire we\'ve received, answered in full. Published responses to IBEW Local 48 and other labor organizations.',
};

// ============================================================================
// QUESTIONNAIRE DATA
// Add new organizations as sections to this array.
// ============================================================================

const questionnaires = [
  {
    org: 'IBEW Local 48',
    submitted: 'June 2026',
    id: 'ibew-48',
    questions: [
      {
        q: 'What office are you seeking? What qualifies you for this position?',
        a: "I'm running for Multnomah County Commissioner, District 2.\n\nI've spent over 32 years inside Multnomah County government across three departments: the Department of Community Justice, the Health Department, and the Department of County Human Services, where I currently manage a team of more than 60 people. I started as a union member and moved into management over the course of my career. I've worked on both sides of the table, as a member and as a county manager, and I understand how the county's budget decisions affect the people doing the work.\n\nI've built programs from the ground up. During the pandemic, I created the Economic Justice and Recovery Program, which served 2,800 households with a 90% housing retention rate. In Cully, I started Bienestar Youth Services with one staff member and no dedicated budget. It now serves 50 kids a week. I know how to build things that work inside county government because I've been doing it for three decades.",
      },
      {
        q: 'Have you been a member or do you have any family members (past or present) who are members of a Local Union? If yes, please explain.',
        a: "Yes. I was a member of [PENDING: specific union name and local] during my time at [PENDING: department]. I spent [PENDING] years as a dues-paying member before moving into management.\n\nThat experience shaped how I approach labor issues. I know what it feels like to be on the worker's side of a contract negotiation, and I know what it looks like from the management side. Both perspectives inform how I think about workforce investment and labor relations.",
      },
      {
        q: 'What is your position on Prevailing Wage laws? Will you support Prevailing Wage projects in the future? Will you oppose expanding exemptions to Prevailing Wage Laws?',
        a: "I fully support prevailing wage laws. Multnomah County already requires BOLI prevailing wage compliance on construction projects, and the county funds a Labor Compliance Program that monitors job sites, conducts worker interviews through community volunteers, and verifies that standards are being met.\n\nI would oppose any effort to expand exemptions to prevailing wage laws. Prevailing wage protections ensure that publicly funded projects pay workers fairly and that contractors who invest in their workforce aren't undercut by those who don't.\n\nThe county is also a signatory to the Regional Workforce Equity Agreement with Metro and the City of Portland, which sets prevailing wage standards on capital projects over $5 million. I support that agreement and would work to strengthen it.",
      },
      {
        q: 'What is your position on Project Labor Agreements on Public Projects? Will you support Project Labor Agreements on future Public Projects?',
        a: "I support project labor agreements on public projects. PLAs provide cost certainty, prevent work stoppages, ensure qualified workers, and set clear standards for wages, benefits, and apprenticeship utilization.\n\nThe Earthquake Ready Burnside Bridge, the county's largest current capital project, is the kind of investment where a PLA ensures the work is done right by trained workers under fair conditions. The same applies to county building projects, facility renovations, and infrastructure upgrades. I would support PLAs on all major county capital projects.",
      },
      {
        q: 'What is your position on Right to Work Legislation? Would you support any legislation that included Right to Work Language?',
        a: "I oppose right to work legislation fully and without exception. As someone who has been a union member, I understand that the strength of organized labor depends on collective participation. Right to work laws weaken unions' ability to represent and protect their members. I would not support any legislation that included right to work language.",
      },
      {
        q: 'What are your thoughts on workforce needs and apprenticeship programs?',
        a: "Apprenticeship programs are one of the most effective workforce development models that exist. They produce trained, skilled workers while providing a pathway to stable careers with fair compensation.\n\nCounty construction projects should include apprenticeship utilization requirements. The Regional Workforce Equity Agreement already sets standards for apprenticeship on projects over $5 million, and I would support expanding those requirements.\n\nI've seen what structured development programs do. In Cully, I built Bienestar Youth Services to give first-generation American kids access to mentorship, skill-building, and opportunity. The same principle applies to apprenticeship: investing in developing people through structured training produces better outcomes than filling positions without a pipeline.",
      },
      {
        q: "Do you support workers' rights to organize and collectively bargain? Please explain your position.",
        a: "Fully. I've been on both sides of this, as a union member and as a county manager who works with organized employees every day.\n\nCollective bargaining is how workers ensure fair wages, safe conditions, and a voice in decisions that affect their jobs. In county government, the employees who deliver behavioral health services, manage parole caseloads, run housing programs, and respond to crises are the reason public services exist. They deserve strong representation at the bargaining table.\n\nI've spent 32 years working alongside county employees represented by [PENDING: confirm unions]. I've seen what good labor relations produce: stable workforce, better services, less turnover. I've also seen what happens when workers feel unsupported.",
      },
      {
        q: 'Share your views on the development of the construction industry in Oregon, including growing sectors like Data Centers and new clean energy such as hydrogen. How will you support these industries that provide substantial work for IBEW Members?',
        a: "Multnomah County is responsible for significant infrastructure investment, and a commissioner's vote directly shapes how that work gets done and who does it.\n\nThe county is already a signatory to the Regional Workforce Equity Agreement with Metro and the City of Portland, which covers capital projects over $5 million and sets standards for prevailing wage, apprenticeship utilization, diversity requirements, and benefits including health care with a family option. I support strengthening that agreement and ensuring it's applied consistently across all major county projects.\n\nThe Earthquake Ready Burnside Bridge is the county's largest current capital project, and the county maintains six Willamette River bridges, dozens of buildings, and technology infrastructure across the county. Each of these involves electrical work. I would ensure that county capital budgets include prevailing wage requirements, project labor agreements, and apprenticeship utilization in every construction contract.\n\nThe county also funds a Labor Compliance Program that monitors job sites for prevailing wage compliance and uses community volunteers to interview trade workers and verify standards are being met. That program should be fully funded and supported.\n\nOn emerging sectors like data centers and clean energy, the county's direct role is primarily in permitting and land use in unincorporated areas. What a commissioner can ensure is that when infrastructure investment moves through county processes, the labor standards are strong, apprenticeship programs are part of the workforce pipeline, and IBEW members have a seat at the table on how that work is done.",
      },
      {
        q: 'Is there any other information you feel that we should know about you or your candidacy?',
        a: "During the SNAP crisis, I worked alongside county employees who themselves qualified for food assistance because of household size and rising living costs. The people running the safety net needed the safety net. That's not an abstract policy concern for me. I saw it happen to my coworkers.\n\nCounty services exist because of the people who deliver them. I've spent my career working with those people: parole officers carrying heavy caseloads, case managers balancing dozens of families in crisis, behavioral health practitioners dealing with trauma every day. When the workforce is supported, the community gets better outcomes. That's not a slogan. It's what I've seen for 32 years.",
      },
    ],
  },
] as const;

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function OnTheRecordPage() {
  const dict = getDictionary(defaultLocale);
  const readMore = dict.issues.items;

  return (
    <ArticlePage
      title="On the Record"
      imageSrc="/issues/on-the-record.avif"
      imageAlt="Illustration of a vinyl record"
      imageCaption=""
      readMore={readMore}
    >
      <p>
        Every union questionnaire we&apos;ve received, answered in full.
      </p>

      {/* Table of contents */}
      <nav className="mt-6 mb-12">
        <ul className="space-y-2">
          {questionnaires.map((q) => (
            <li key={q.id}>
              <a
                href={`#${q.id}`}
                className="text-text underline decoration-border hover:decoration-text underline-offset-4 transition-colors duration-150"
              >
                {q.org}
              </a>
              <span className="text-text-subtle text-sm ml-2">
                {q.submitted}
              </span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Questionnaire sections */}
      {questionnaires.map((questionnaire) => (
        <section
          key={questionnaire.id}
          id={questionnaire.id}
          className="mb-20"
        >
          <div className="border-b border-border pb-4 mb-10">
            <h2 className="text-2xl font-semibold text-text">
              {questionnaire.org}
            </h2>
            <p className="text-sm text-text-subtle mt-1">
              Submitted {questionnaire.submitted}
            </p>
          </div>

          <div className="space-y-10">
            {questionnaire.questions.map((item, i) => (
              <div key={i}>
                <p className="text-base font-medium text-text leading-[1.6]">
                  {item.q}
                </p>
                <div className="mt-3 text-text-muted leading-[1.75] text-base">
                  {item.a.split('\n\n').map((para, j) => (
                    <p key={j} className={j > 0 ? 'mt-4' : ''}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </ArticlePage>
  );
}