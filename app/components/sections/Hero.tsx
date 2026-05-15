import { siteConfig } from '@/app/lib/config';
import type { Dictionary } from '@/app/lib/i18n';

interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
  dict: Dictionary['hero'];
}

export default function Hero({ videoSrc, imageSrc, dict }: HeroProps) {
  const officeLines = dict.office.split('\n');

  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {videoSrc ? (
        <>
          <video autoPlay muted loop playsInline poster={imageSrc} className="absolute inset-0 w-full h-full object-cover">
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-900/65 to-primary-800/40" />
        </>
      ) : imageSrc ? (
        <>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageSrc})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-900/65 to-primary-800/40" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
          <div
            className="absolute inset-0 flex items-center justify-end pointer-events-none"
            aria-hidden="true"
          >
            <img src="/district-map.svg" alt="" className="h-[80%] w-auto mr-[5%] opacity-100" />
          </div>
        </>
      )}

      <div className="relative z-10 mx-auto max-w-[var(--content-max)] px-6 md:px-8 lg:px-12 w-full pt-24 pb-16">
        <div className="max-w-xl">
          <h1
            id="hero-heading"
            className="font-normal text-white leading-[1.1] tracking-tight animate-fade-up"
            style={{ fontSize: 'clamp(4rem, 8vw, 7rem)' }}
          >
            <span>{siteConfig.candidate.firstName}</span>
            <br />
            <span className="text-primary-300">
              {officeLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < officeLines.length - 1 && <br />}
                </span>
              ))}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}