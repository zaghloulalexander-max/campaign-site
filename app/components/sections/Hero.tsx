import Button from '@/app/components/ui/Button';
import { siteConfig } from '@/app/lib/config';

interface HeroProps {
  /** Path to hero video (mp4). If omitted, falls back to image or solid bg. */
  videoSrc?: string;
  /** Path to hero image. Used as fallback or poster for video. */
  imageSrc?: string;
}

export default function Hero({ videoSrc, imageSrc }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Media */}
      {videoSrc ? (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={imageSrc}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary-900/50" />
        </>
      ) : imageSrc ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
          <div className="absolute inset-0 bg-primary-900/50" />
        </>
      ) : (
        /* Fallback: gradient background */
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900" />
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[var(--content-max)] px-6 md:px-8 pt-24">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-up">
            {siteConfig.candidate.firstName}
            <br />
            <span className="text-primary-200 font-normal">
              {siteConfig.candidate.title}
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-lg animate-fade-up delay-100">
            {siteConfig.meta.tagline}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up delay-200">
            <Button href={siteConfig.donateUrl} size="lg" variant="secondary">
              Donate
            </Button>
            <Button href="#volunteer" size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Get Involved
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-400">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
