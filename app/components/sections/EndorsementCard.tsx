import Image from 'next/image';

export interface Endorser {
  id: string;
  name: string;
  title: string;
  quote: string;
  imageSrc?: string;
}

interface EndorsementCardProps {
  endorser: Endorser;
}

export default function EndorsementCard({ endorser }: EndorsementCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center h-full px-8 lg:px-14 py-12 lg:py-16">
      <div className="flex justify-center lg:justify-start">
        <div className="relative w-full max-w-full lg:max-w-[420px] aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden">
          {endorser.imageSrc ? (
            <Image
              src={endorser.imageSrc}
              alt={endorser.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) calc(100vw - 4rem), 420px"
            />
          ) : (
            <div className="absolute inset-0 bg-zinc-300 flex items-center justify-center">
              <span className="text-5xl font-semibold text-zinc-400" aria-hidden="true">
                {endorser.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>

      <div>
        <blockquote className="relative max-w-lg">
          <span
            className="absolute -left-4 lg:-left-5 top-0 font-[family-name:var(--font-serif)] text-xl md:text-2xl lg:text-3xl text-text select-none leading-snug"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <p className="font-[family-name:var(--font-serif)] text-xl md:text-2xl lg:text-3xl text-text leading-snug tracking-[-0.01em]">
            {endorser.quote}&rdquo;
          </p>

          <footer className="mt-10">
            <p className="text-lg font-semibold text-text">{endorser.name}</p>
            <p className="text-base text-text mt-1">{endorser.title}</p>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}