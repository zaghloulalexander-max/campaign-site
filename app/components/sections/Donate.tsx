import Section from '@/app/components/ui/Section';
import Button from '@/app/components/ui/Button';
import { siteConfig } from '@/app/lib/config';

const amounts = [25, 50, 100, 250, 500];

export default function Donate() {
  return (
    <Section id="donate" background="muted">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text">
          Fuel This Campaign
        </h2>
        <p className="mt-4 text-text-muted leading-relaxed">
          Every dollar goes directly to reaching voters — door-to-door,
          neighbor-to-neighbor. No corporate PAC money. Just people.
        </p>

        {/* Suggested amounts */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {amounts.map((amount) => (
            <a
              key={amount}
              href={`${siteConfig.donateUrl}?amount=${amount}`}
              className="px-6 py-3 rounded-[var(--radius-md)] border-2 border-primary-600
                         text-primary-600 font-semibold text-lg
                         hover:bg-primary-600 hover:text-white
                         transition-all duration-200"
            >
              ${amount}
            </a>
          ))}
        </div>

        <div className="mt-8">
          <Button href={siteConfig.donateUrl} size="lg" variant="primary">
            Donate Any Amount
          </Button>
        </div>

        <p className="mt-6 text-xs text-text-subtle">
          Contributions are not tax-deductible. Oregon campaign finance laws apply.
        </p>
      </div>
    </Section>
  );
}
