import Link from 'next/link';

interface EndorsementsLinkProps {
  dict: {
    homeHeading: string;
    homeLink: string;
  };
}

export default function EndorsementsLink({ dict }: EndorsementsLinkProps) {
  return (
    <section id="endorsements" className="bg-surface-warm py-16 md:py-20" aria-label="Endorsements">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-text leading-none tracking-tight">
          {dict.homeHeading}
        </h2>
        <Link
          href="/endorsements"
          className="mt-6 inline-block text-lg text-text underline decoration-border hover:decoration-text underline-offset-4 transition-colors duration-150"
        >
          {dict.homeLink} &rarr;
        </Link>
      </div>
    </section>
  );
}