import type { Metadata } from 'next';
import ArticlePage from '@/app/components/layout/ArticlePage';
import { getDictionary, defaultLocale } from '@/app/lib/i18n';

export const metadata: Metadata = {
  title: 'Public Safety',
  description: 'For a restaurant owner in Cully, public safety means people camping outside her door and breaking into cars. For a mother in Northeast Portland, it means whether her kids are safe walking to school.',
};

const CURRENT_HREF = '/issues/public-safety';

export default function PublicSafetyPage() {
  const dict = getDictionary(defaultLocale);
  const readMore = dict.issues.items.filter((item) => item.href !== CURRENT_HREF);

  return (
    <ArticlePage
      title="Public safety"
      imageSrc="/issues/public-safety.avif"
      imageAlt="Illustration of a 15 MPH neighborhood greenway sign on a residential street in Concordia"
      imageCaption="Concordia, Northeast Portland"
      readMore={readMore}
    >
      <p>
        For a restaurant owner in Cully, public safety means people camping
        outside her door and breaking into cars. For a mother in Northeast
        Portland, it means whether her kids are safe walking to school. The
        county spends more than $350 million a year on the justice system. I
        spent over a decade inside it.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What the county is responsible for
      </h2>

      <p>
        The county&apos;s role in public safety is different from the
        city&apos;s. The city runs the police department. The county runs the
        justice system: the Department of Community Justice, which handles
        parole, probation, and juvenile justice; the two county jails; the
        District Attorney&apos;s office; and the Sheriff&apos;s Office. It
        also manages emergency preparedness and funds the behavioral
        health services connected to public safety.
      </p>

      {/* Bridge data — sits between sections */}
      <p className="border-l-2 border-[#c37b62] pl-6 text-text-subtle text-[15px] italic my-16">
        The FY 2027 proposed budget cuts the District Attorney&apos;s office
        by 5%, roughly $3.5 million and 18 positions. The DA has called it
        the largest reduction in the office&apos;s history. Jail capacity is
        maintained at 1,130 beds. Crime rates have declined, but the systems
        producing those results are being asked to do more with less.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What I&apos;ve seen
      </h2>

      <p>
        I managed domestic violence, DUI, parole, probation, and sex offender
        caseloads in the Department of Community Justice. The crimes were
        serious. Murder, manslaughter, assault, rape, theft. Probation
        officers carried heavy caseloads and dealt with people in crisis
        every day. The job was managing people coming out of jail and prison
        and trying to keep them from going back. After about a decade, I
        couldn&apos;t do it anymore. I moved to the Health Department.
      </p>

      <p>
        The system leaned punitive. There were people inside it who believed
        in rehabilitation, but the structure was built around compliance and
        consequences. Whether someone actually reintegrated after leaving was
        harder to measure, and we didn&apos;t track it very well. What I
        did see was that the juvenile side showed more results than the adult
        side.
      </p>

      <p>
        A few years ago, I conducted a safety survey in the Cully
        neighborhood. I&apos;d worked on community safety in the district
        before, including with Tom Potter&apos;s daughter at the Northeast
        Precinct. We asked residents directly: what makes you feel safe?
        People talked about drug activities happening yards from where they
        lived, about needing cameras, about youth violence and car break-ins
        and assaults where nobody responded. The common thread was that they
        wanted someone paying attention to their neighborhood.
      </p>

      <p>
        That survey led to Bienestar Youth Services, a program I created
        with no directive and no budget. I fund it by redirecting resources
        from my existing programs and recruiting volunteers. We work with
        about 50 kids, ages 7 to 18, in Cully and the surrounding areas,
        most of them first-generation Americans from immigrant communities.
        For the first time, we&apos;re seeing gang recruitment reach into
        these communities, something that didn&apos;t exist a generation ago.
      </p>

      <p>
        The program costs a fraction of processing one juvenile through the
        justice system. Every kid who stays in school and stays
        out of trouble is one fewer person entering it.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        Opportunities
      </h2>

      <p>
        Tracking whether people who leave the justice system actually
        reintegrate, find work, stay housed, stay out, should be standard.
        When it is, it shows the public whether the investment is working,
        and it shows the officers and case managers what their work is
        producing.
      </p>

      <p>
        The Cully survey showed that residents know what their neighborhoods
        need: cameras, community safety networks, youth programs. Those
        investments are far less expensive than the justice system, and
        they keep people, especially young people, from entering it in the
        first place.
      </p>

      <p>
        When the county doesn&apos;t have enough behavioral health
        professionals, police end up responding to mental health crises.
        That&apos;s not what they&apos;re trained for, and the outcomes are
        worse for everyone, the person in crisis and the officer.
      </p>

      <p>
        Commissioners vote on the budget every year. That&apos;s where these
        changes start.
      </p>
    </ArticlePage>
  );
}