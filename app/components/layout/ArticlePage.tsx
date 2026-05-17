import type { ReactNode } from 'react';
import Image from 'next/image';
import ReadMore, { type ReadMoreItem } from '@/app/components/layout/ReadMore';

// ============================================================================
// TYPES
// ============================================================================

interface ArticlePageProps {
  /** Page title — rendered as h1 */
  title: string;
  /** Optional subtitle or dateline below the title */
  subtitle?: string;
  /** Hero image source */
  imageSrc?: string;
  /** Alt text for the hero image */
  imageAlt?: string;
  /** Photo caption — location or credit */
  imageCaption?: string;
  /** Show a placeholder when no imageSrc is provided */
  showImagePlaceholder?: boolean;
  /** Related pages shown at the bottom */
  readMore?: readonly ReadMoreItem[];
  /** Article body content */
  children: ReactNode;
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function ArticlePage({
  title,
  subtitle,
  imageSrc,
  imageAlt = '',
  imageCaption,
  showImagePlaceholder = false,
  readMore,
  children,
}: ArticlePageProps) {
  const showImage = imageSrc || showImagePlaceholder;

  return (
    <article className="pt-48 pb-28 md:pt-64 md:pb-36">
      <div className="mx-auto max-w-2xl px-6 md:px-8">
        <header>
          <h1 className="text-4xl md:text-5xl font-medium text-text leading-tight tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-base text-text-subtle">
              {subtitle}
            </p>
          )}
        </header>
      </div>

      {showImage && (
        <figure className="mx-auto max-w-4xl px-6 md:px-8 mt-12 mb-16">
          <div className="overflow-hidden rounded-[var(--radius-xl)] bg-surface-muted">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={896}
                height={448}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 896px"
                className="w-full h-auto object-cover aspect-[2/1]"
                priority
              />
            ) : (
              <div className="w-full aspect-[2/1] bg-gradient-to-br from-primary-100/60 to-surface-muted flex items-center justify-center">
                <span className="text-text-subtle text-sm tracking-wide">{imageAlt || 'Photo'}</span>
              </div>
            )}
          </div>
          {imageCaption && (
            <figcaption className="mt-3 text-sm text-text-subtle">
              {imageCaption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="mx-auto max-w-2xl px-6 md:px-8">
        <div className={`space-y-6 text-text-muted leading-[1.8] text-base ${showImage ? '' : 'mt-12'}`}>
          {children}
        </div>

        {readMore && readMore.length > 0 && (
          <ReadMore items={readMore} />
        )}
      </div>
    </article>
  );
}