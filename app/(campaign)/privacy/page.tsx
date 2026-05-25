import type { Metadata } from 'next';
import { siteConfig } from '@/app/lib/config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

const LAST_UPDATED = 'May 15, 2026';

export default function Privacy() {
  return (
    <div className="pt-48 pb-28 md:pt-64 md:pb-36">
      <div className="mx-auto max-w-2xl px-6 md:px-8">
        <h1 className="text-4xl md:text-5xl font-medium text-text">
          Privacy Policy
        </h1>
        <p className="mt-6 text-base text-text-subtle">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-12 space-y-10 text-text-muted leading-[1.8] text-base">

          <section>
            <p>
              This Privacy Policy is effective as of May 15, 2026. It explains how {siteConfig.disclaimer.split('.')[0].replace('Paid for by ', '')} (<strong>&ldquo;the Campaign,&rdquo;</strong>{' '}
              <strong>&ldquo;we,&rdquo;</strong> <strong>&ldquo;us,&rdquo;</strong> or <strong>&ldquo;our&rdquo;</strong>) collects, uses,
              and protects your information when you visit this website. By using this site,
              you agree to the practices described here.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text mb-4">1. Information We Collect</h2>

            <h3 className="text-base font-medium text-text mt-6 mb-2">Information You Provide</h3>
            <p>
              When you submit information through our volunteer form, you provide your
              first name, last name, email address, and zip code. This information is
              used solely for campaign communication and volunteer coordination.
            </p>

            <h3 className="text-base font-medium text-text mt-6 mb-2">Donation Information</h3>
            <p>
              Donations are processed through a third-party payment processor. We do not
              store credit card numbers or bank account information on our servers. Our
              payment processor handles financial data in accordance with their own privacy
              policy and applicable payment card industry standards.
            </p>
            <p className="mt-3">
              Donor names, amounts, and addresses are reported to the Oregon Secretary of
              State as required by Oregon campaign finance law. These records are public.
            </p>

            <h3 className="text-base font-medium text-text mt-6 mb-2">Information Collected Automatically</h3>
            <p>
              We use analytics to collect aggregate, anonymous usage data including page views,
              referrer information, and general geographic region. This data does not identify
              you personally.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text mb-4">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="mt-3 ml-5 space-y-1.5 list-disc">
              <li>Communicate with volunteers and supporters</li>
              <li>Coordinate campaign activities</li>
              <li>Process and report donations as required by law</li>
              <li>Understand how visitors use our site</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information. We do not use your information
              for advertising or behavioral tracking.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text mb-4">3. Information Sharing</h2>
            <p>
              We may share basic contact information (name, email, address) with the
              Multnomah County Democratic Party or other aligned political committees
              for voter outreach purposes. We do not share your information with
              commercial entities.
            </p>
            <p className="mt-3">
              Donation information is disclosed to the Oregon Secretary of State as
              required by Oregon Revised Statutes Chapter 260. Campaign finance
              reports are public records.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text mb-4">4. Third-Party Services</h2>
            <p>We use the following service providers:</p>
            <ul className="mt-3 ml-5 space-y-1.5 list-disc">
              <li>
                <strong className="text-text font-medium">Vercel</strong> — hosts the website and provides anonymous analytics
              </li>
              <li>
                <strong className="text-text font-medium">Resend</strong> — delivers form submissions to our email
              </li>
              <li>
                <strong className="text-text font-medium">Payment processor</strong> — handles donation transactions
              </li>
            </ul>
            <p className="mt-4">
              These providers access your information only as needed to perform their services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text mb-4">5. Cookies</h2>
            <p>
              This site uses minimal cookies necessary for basic site functionality and
              donation processing. We do not use advertising cookies, marketing pixels,
              or third-party tracking.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text mb-4">6. Data Security</h2>
            <p>
              We implement reasonable security measures, including encryption of data
              in transit (HTTPS). No system is perfectly secure. We cannot guarantee
              absolute security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text mb-4">7. Your Rights</h2>
            <p>
              You may request to view, correct, or delete the personal information we
              hold about you by contacting us at the email below. We will respond to
              your request within a reasonable timeframe.
            </p>
            <p className="mt-3">
              To unsubscribe from campaign emails, use the unsubscribe link in any
              email or contact us directly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text mb-4">8. Children&apos;s Privacy</h2>
            <p>
              This site is not directed at individuals under the age of 18. We do not
              knowingly collect personal information from anyone under 18.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will
              update the effective date above.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text mb-4">10. Media Credits</h2>
            <p>
              Hero video: B-Roll provided by{' '}
              <a
                href="http://videezy.com/"
                className="text-text hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Videezy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text mb-4">11. Contact</h2>
            <p>Questions about this Privacy Policy? Contact us at:</p>
            <p className="mt-3">
              <a
                href={`mailto:${siteConfig.meta.email}`}
                className="text-text hover:underline"
              >
                {siteConfig.meta.email}
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}