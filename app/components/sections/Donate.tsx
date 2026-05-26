'use client';

import { useState } from 'react';
import Button from '@/app/components/ui/Button';
import Tooltip from '@/app/components/ui/Tooltip';
import { CopyIcon, CheckIcon } from '@/app/components/ui/icons';
import { siteConfig } from '@/app/lib/config';
import type { Dictionary } from '@/app/lib/i18n';

interface DonateProps {
  imageSrc?: string;
  dict: Dictionary['donate'];
}

export default function Donate({ imageSrc, dict }: DonateProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.meta.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
    }
  };

  return (
    <section
      id="donate"
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden"
      aria-labelledby="donate-heading"
    >
      {imageSrc ? (
        <>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageSrc})` }} />
          <div className="absolute inset-0 bg-primary-900/80" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
      )}

      <div className="relative z-10 mx-auto max-w-[var(--content-max)] px-6 md:px-8 lg:px-12 w-full py-20 md:py-28">
        <div className="max-w-2xl">
          <h2
            id="donate-heading"
            className="text-2xl md:text-3xl lg:text-4xl text-white leading-snug"
          >
            {dict.heading}
          </h2>
          <p className="mt-4 text-2xl md:text-3xl lg:text-4xl text-white/70 leading-snug">
            {dict.subheading}{' '}
            <Tooltip text={copied ? 'Copied' : 'Copy link'} position="top">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center text-white/50 hover:text-white cursor-pointer transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded align-middle p-2 -m-2"
                aria-label={copied ? 'Link copied' : 'Copy site link'}
              >
                {copied ? <CheckIcon size="lg" /> : <CopyIcon size="lg" />}
              </button>
            </Tooltip>
          </p>
          <div className="mt-10">
            <Button as="a" href={siteConfig.donateUrl} target="_blank" rel="noopener noreferrer" size="md" variant="secondary">
              {dict.button}
            </Button>
          </div>
          <p className="mt-8 text-xs text-white/40">
            {dict.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}