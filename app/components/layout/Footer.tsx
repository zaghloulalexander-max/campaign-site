import Link from 'next/link';
import { siteConfig } from '@/app/lib/config';
import VideoCredit from '@/app/components/ui/VideoCredit';
import type { Dictionary } from '@/app/lib/i18n';

// ============================================================================
// SOCIAL LINKS
// ============================================================================

const SOCIAL_LINKS = [
  { id: 'instagram', label: 'Instagram', url: siteConfig.social.instagram, icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { id: 'twitter', label: 'X', url: siteConfig.social.twitter, icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { id: 'facebook', label: 'Facebook', url: siteConfig.social.facebook, icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
].filter((s) => s.url);

// ============================================================================
// TYPES
// ============================================================================

interface FooterIssue {
  title: string;
  href: string;
}

interface FooterProps {
  dict: Dictionary['footer'];
  issues: readonly FooterIssue[];
}

// ============================================================================
// HELPERS
// ============================================================================

const linkClasses = 'hover:text-text hover:underline underline-offset-4 transition-colors duration-150 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded';

// ============================================================================
// COMPONENT
// ============================================================================

export default function Footer({ dict, issues }: FooterProps) {
  return (
    <footer className="bg-surface border-t border-border" role="contentinfo">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-8 lg:px-12 py-12 md:py-16">

        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0">
          {/* Favicon home link */}
          <div className="flex-shrink-0 md:w-1/3">
            <Link
              href="/"
              aria-label={`${siteConfig.candidate.fullName} — home`}
              className="-m-2 p-2 inline-block rounded-[var(--radius-md)] opacity-80 hover:opacity-100 transition-opacity duration-150 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              <img src="/favicon.svg" alt="" width="40" height="40" className="block" />
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-16 flex-1">
            {/* Issues column */}
            <nav aria-label={dict.issuesLabel}>
              <p className="text-xs font-semibold text-text tracking-wide">
                {dict.issuesLabel}
              </p>
              <div className="mt-4 flex flex-col gap-2.5 text-sm text-text-subtle">
                {issues.map((issue) => (
                  <Link key={issue.href} href={issue.href} className={linkClasses}>
                    {issue.title}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Get Involved column */}
            <nav aria-label={dict.involvedLabel}>
              <p className="text-xs font-semibold text-text tracking-wide">
                {dict.involvedLabel}
              </p>
              <div className="mt-4 flex flex-col gap-2.5 text-sm text-text-subtle">
                <a href={siteConfig.donateUrl} className={linkClasses} target="_blank" rel="noopener noreferrer">
                  {dict.donateLink}
                </a>
                <Link href="/#signup" className={linkClasses}>
                  {dict.volunteerLink}
                </Link>
              </div>
            </nav>

            {/* Info column */}
            <nav aria-label="Site information">
              <p className="text-xs font-semibold text-text tracking-wide">
                &nbsp;
              </p>
              <div className="mt-4 flex flex-col gap-2.5 text-sm text-text-subtle">
                <Link href="/privacy" className={linkClasses}>
                  {dict.privacyLink}
                </Link>
                <a href={`mailto:${siteConfig.meta.email}`} className={linkClasses}>
                  {dict.contactLink}
                </a>
                <a href={`tel:${siteConfig.meta.phoneTel}`} className={linkClasses}>
                  {siteConfig.meta.phone}
                </a>
              </div>
            </nav>
          </div>
        </div>

        {SOCIAL_LINKS.length > 0 && (
          <div className="mt-10 flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit us on ${social.label} (opens in new tab)`} className="text-text-subtle hover:text-text transition-colors duration-150 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={social.icon} /></svg>
              </a>
            ))}
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-text-subtle">{siteConfig.disclaimer}</p>
          <VideoCredit />
        </div>
      </div>
    </footer>
  );
}