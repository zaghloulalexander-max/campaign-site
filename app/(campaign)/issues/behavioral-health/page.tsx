import type { Metadata } from 'next';
import ArticlePage from '@/app/components/layout/ArticlePage';
import { getDictionary, defaultLocale } from '@/app/lib/i18n';

export const metadata: Metadata = {
  title: 'Behavioral Health',
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
        Behavioral health covers the connection between habits, behaviors, and
        overall mental and physical well-being. It is not the same as mental
        health, though the two are closely related. Behavioral health focuses
        on patterns of behavior with the goal of correcting them. Mental health
        involves deeper cognitive and clinical work. At the county level, both
        fall under the same division, but they carry separate licensing and
        separate funding. At the county level, that includes counseling for
        depression, anxiety, and trauma, addiction services for substance use
        disorders, and crisis response for people in immediate danger. For the
        people who need them, these systems overlap almost entirely.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What the county is responsible for
      </h2>

      <p>
        The county delivers behavioral health services through two main
        channels. The first is clinic-based. Each county health clinic has a
        behavioral health consultant, a licensed practitioner who works
        alongside primary care providers. Patients either refer themselves or
        get referred by their doctor or primary care provider. They are assigned
        to a provider and begin sessions. For most people, this means 4, 8, or 12
        weeks of counseling for depression, anxiety, or trauma. They complete
        treatment and move on.
      </p>

      <p>
        The second channel is the crisis line. People call when they are in
        immediate distress. If the situation is not an emergency, they get
        scheduled to see a licensed provider. If it is an emergency, the
        county coordinates with mobile crisis teams, behavioral health
        professionals, and sometimes law enforcement to respond in the field.
      </p>

      <p>
        The county also funds addiction services, including treatment for
        substance use disorders like fentanyl and methamphetamine addiction.
        These services are connected to behavioral health but separately
        licensed and separately staffed. The Behavioral Health Division has
        over 90 contracts with community-based providers, and the county is
        unique in that it pays for treatment and recovery services from its
        own general fund rather than relying primarily on state funding.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What I&apos;ve seen
      </h2>

      <p>
        The system handles short-term needs reasonably well. A person dealing
        with depression, anxiety, or other symptoms can get into counseling
        through a county clinic, a social service program like the one I manage,
        and complete a course of sessions. That works. The gap is in
        long-term care. People with severe addiction, chronic mental illness,
        or overlapping behavioral health and housing instability need 12 to 24
        months of sustained support: housing, treatment and therapy sessions,
        job training, and case management, all coordinated together. The county
        does not invest enough in that level of care.
      </p>

      <p>
        Through the programs I manage at Bienestar, we combine housing
        stability with behavioral health services, addiction treatment,
        recovery support, and employment assistance. One man we worked with
        had been through the justice system and was struggling with addiction.
        After he was housed, there was no follow-up. He was selling
        furniture, destabilizing. We enrolled him and worked with him and his
        family for 14 months: permanent housing, weekly treatment sessions, job
        training. He is now working, paying his own rent, and self-sufficient
        for the first time. That outcome required sustained, coordinated
        investment in one person over more than a year.
      </p>

      <p>
        The mobile crisis teams and walk-in clinics are designed for immediate
        response. They handle the moment. But there is no follow-up built into
        the system. The same person can cycle through crisis response
        repeatedly without ever being connected to the kind of long-term
        treatment that would actually change their trajectory. The system is
        reactive. It lacks a prevention model.
      </p>

      <p>
        The county declared a fentanyl state of emergency in March 2026, in
        partnership with the city and the state. The county&apos;s own
        addiction services staff have acknowledged that traditional treatment
        approaches are not effective for fentanyl. The declaration is a
        signal, but the operational reality has not changed enough. There are
        not enough treatment centers for the kind of long-term care that
        fentanyl addiction requires. Narcan saves lives in the moment, but
        without 12 to 24 months of sustained treatment, the cycle continues.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What can be improved
      </h2>

      <p>
        The county needs more licensed behavioral health practitioners. The
        demand for services exceeds the supply, for both short-term counseling
        and long-term treatment. Hiring more practitioners is the most direct
        way to close that gap.
      </p>

      <p>
        Programs that receive county funding for behavioral health services
        should be tracking completion rates, patient progress over time, and
        whether the severity of diagnoses like depression, anxiety, and trauma
        decreases between intake and follow-up. Most of this is not being
        measured consistently across county-funded programs.
      </p>

      <p>
        The model that works, combining housing with behavioral health
        services, addiction treatment, and employment support over 12 to 24
        months, should be the standard for people with severe and overlapping
        needs. That requires sustained funding for programs that can
        demonstrate results, not one-time grants or short-term contracts.
      </p>

      <p>
        The sobering center that has been in planning for years is now open
        but understaffed and underused. The citation mandate that is supposed
        to direct people there after repeated violations is not being enforced.
        The facility exists, but the system around it does not function.
      </p>

      <h2 className="text-2xl font-semibold text-text mt-8">
        What a commissioner can do
      </h2>

      <p>
        Commissioners do not oversee departments directly. But they vote on
        the budget and they can submit measures to the board. A commissioner
        can push for regular evaluation of county-funded behavioral health
        programs, with clear expectations tied to patient outcomes: completion
        rates, stabilization, recovery, and long-term self-sufficiency. Programs
        that deliver should receive continued funding. Programs that do not
        should be restructured or replaced.
      </p>

      <p>
        The county already spends significant money on behavioral health. The
        question is whether that spending is producing results that justify
        continued investment. Proving that it does is the path to earning
        public trust and, eventually, the additional resources that the system
        needs.
      </p>
    </ArticlePage>
  );
}