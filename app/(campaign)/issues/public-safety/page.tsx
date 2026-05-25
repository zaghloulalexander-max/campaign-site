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
        Public safety means different things to different people. For a
        restaurant owner in Cully, it means people camping outside her door and
        breaking into cars. For a parent in Northeast Portland, it means whether
        her kids are safe walking to school. For a senior in East County, it
        might mean whether anyone responds when something goes wrong. When
        voters say they care about public safety, they are usually talking about
        all of these things at once.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What the county is responsible for
      </h2>

      <p>
        The county&apos;s role in public safety is different from the
        city&apos;s. The city runs the police department. The county runs the
        justice system: the Department of Community Justice, which handles parole,
        probation, and juvenile justice; the two county jails with over 1,100
        beds; the District Attorney&apos;s office; and the Sheriff&apos;s Office.
        The county also manages emergency preparedness, which covers response to
        floods, extreme weather, and public health emergencies. And behavioral
        health services, which are funded separately but connected directly to
        public safety because untreated mental illness and addiction drive a
        significant share of what people experience as unsafe.
      </p>

      <p>
        Most people don&apos;t know where the city&apos;s responsibility ends
        and the county&apos;s begins. The county spends hundreds of millions of
        dollars on these systems.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What I saw inside the justice system
      </h2>

      <p>
        I spent over a decade as a manager in the Department of Community
        Justice, overseeing both adult and juvenile caseloads. My unit managed
        domestic violence cases, DUI, parole, probation, and sex offender
        supervision. Every day, we worked with judges, district attorneys, public
        defenders, and victims. The job was managing people coming out of jail
        and prison, trying to help them reintegrate into the community and reduce
        the likelihood that they would end up back in the system.
      </p>

      <p>
        The caseloads were serious. Murder, manslaughter, assault, rape, domestic
        violence, theft. Probation officers carried heavy loads and dealt with
        people in crisis constantly. A lot of the work was showing up in court,
        coordinating with the DA on cases, tracking behavior, making sure
        conditions of parole and probation were met. When someone violated, the
        system responded. When someone stabilized, found work, stayed clean, that
        was the outcome we were working toward.
      </p>

      <p>
        The system leaned punitive. There were people inside it who believed in
        restorative approaches and rehabilitation, but the structure was built
        around compliance and consequences. Whether people actually reintegrated
        successfully after leaving the system was harder to measure, and we
        didn&apos;t track it as well as we should have.
      </p>

      <p>
        After about a decade, I moved to the Health Department. The work inside
        the justice system takes a toll. You are dealing with people who have
        committed serious harm, and you are also dealing with a system that
        doesn&apos;t always have the tools to break the cycle. That experience
        is why I think about public safety differently now. The most effective
        investments happen before someone enters the system, not after.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What prevention looks like
      </h2>

      <p>
        A few years ago, I conducted a safety survey in the Cully neighborhood.
        We asked residents directly: what makes you feel safe? The answers were
        specific. People talked about landlords who let drug activity happen in
        the stairwells and did nothing about it. They talked about needing
        cameras. About youth violence. About car break-ins and assaults where
        nobody responded. Each person had a different version of what public
        safety meant to them, but the common thread was that they wanted someone
        to be paying attention to their neighborhood.
      </p>

      <p>
        That survey informed a program I created and run now called Bienestar
        Youth Services. There was no directive to build it and no budget for it.
        I saw the need, designed the program, and fund it by redirecting
        resources within my existing budget and recruiting volunteers. We work
        with about 50 kids, ages 7 to 18, in the Cully neighborhood and
        surrounding areas. Most are first-generation Americans or children of
        immigrants, from Somali, Latino, and other communities. For the first
        time, we are seeing gang recruitment reach into the Somali community
        here, something that did not exist a generation ago. The program offers
        music classes through a partnership with the Metropolitan Youth
        Symphony, robotics, aviation, art, and other activities. We run
        sessions multiple times a week, including weekends. We work closely
        with parents.
      </p>

      <p>
        The program costs a fraction of what it costs to process one juvenile
        through the justice system. Every kid who
        stays in school, stays out of trouble, and builds skills is one fewer
        person entering the cycle I spent a decade managing on the other end.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What a commissioner can do
      </h2>

      <p>
        Commissioners vote on the public safety budget every year. The first
        step is understanding what each program is producing. The Department of
        Community Justice, the DA&apos;s office, the Sheriff&apos;s Office, and
        emergency preparedness all receive significant funding. Before
        continuing to fund any program at its current level, the county should
        be able to show what outcomes it is delivering.
      </p>

      <p>
        The county is currently cutting homeless services and behavioral health
        while maintaining the Sheriff&apos;s Office budget. Whether that is the
        right tradeoff depends on what each dollar is producing. Behavioral health is directly
        connected to public safety. When someone in crisis encounters the
        police instead of a behavioral health professional, the results are
        often worse for everyone involved.
      </p>

      <p>
        I would also push for more investment in neighborhood-level prevention:
        Community safety networks, youth programs, partnerships between
        residents and local organizations. The Cully safety survey showed that
        residents have specific, practical ideas about what their neighborhoods
        need. Those are the programs that keep people, especially young people,
        from entering the justice system in the first place.
      </p>
    </ArticlePage>
  );
}