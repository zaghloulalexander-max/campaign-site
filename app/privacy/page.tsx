import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import Section from '@/app/components/ui/Section';

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Section>
          <div className="max-w-2xl mx-auto">
            <h1 className="font-heading text-3xl font-semibold text-text">Privacy Policy</h1>
            <div className="mt-6 space-y-4 text-text-muted leading-relaxed text-sm">
              <p>
                This website collects basic analytics (page views, referral source) and
                information you voluntarily submit through forms (name, email, phone, zip code).
              </p>
              <p>
                We use this information solely for campaign purposes — to communicate with
                supporters, coordinate volunteer activities, and process donations.
              </p>
              <p>
                We do not sell, trade, or share your personal information with third parties
                except as required by law or for donation processing through our payment provider.
              </p>
              <p>
                Cookies are used for basic site analytics and donation processing functionality.
                You may disable cookies in your browser settings.
              </p>
              <p>
                Questions? Contact us at{' '}
                <a href="mailto:info@firstnameforportland.com" className="text-primary-600 hover:underline">
                  info@firstnameforportland.com
                </a>
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
