import Button from '@/app/components/ui/Button';
import { siteConfig } from '@/app/lib/config';

// ============================================================================
// TYPES
// ============================================================================

interface DonateProps {
  /** Path to background community photo */
  imageSrc?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function Donate({ imageSrc }: DonateProps) {
  return (
    <section
      id="donate"
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden"
      aria-labelledby="donate-heading"
    >
      {/* Background */}
      {imageSrc ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
          <div className="absolute inset-0 bg-primary-900/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[var(--content-max)] px-6 md:px-8 lg:px-12 w-full py-20 md:py-28">
        <div className="max-w-xl">
          <h2
            id="donate-heading"
            className="text-2xl md:text-3xl lg:text-4xl text-white leading-snug"
          >
            Your contribution goes directly to reaching voters across the county.
          </h2>
          <div className="mt-10">
            <Button href={siteConfig.donateUrl} size="md" variant="secondary">
              Donate
            </Button>
          </div>
          <p className="mt-8 text-xs text-white/40">
            Contributions are not tax-deductible. Oregon campaign finance laws apply.
          </p>
        </div>
      </div>
    </section>
  );
}