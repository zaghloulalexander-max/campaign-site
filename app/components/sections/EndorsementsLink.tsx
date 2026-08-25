import Link from 'next/link';
import Image from 'next/image';
import Section from '@/app/components/ui/Section';
import { ArrowIcon } from '@/app/components/ui/icons';

interface EndorsementsLinkProps {
  dict: {
    homeHeading: string;
    homeLink: string;
    people: readonly { name: string; title: string; imageSrc: string; quote?: string }[];
  };
}

const SHOWN = 10;

export default function EndorsementsLink({ dict }: EndorsementsLinkProps) {
  const featured = dict.people.slice(0, SHOWN);
  const remaining = dict.people.length - SHOWN;

  return (
    <Section id="endorsements" background="default" ariaLabel="Endorsements">
      <div className="flex items-center">
        {featured.map((person, i) => (
          <Image
            key={person.name}
            src={person.imageSrc}
            alt={person.name}
            title={person.name}
            width={80}
            height={80}
            className={`h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full object-cover ring-2 ring-surface ${i > 0 ? '-ml-2 md:-ml-3 lg:-ml-4' : ''}`}
          />
        ))}
        {remaining > 0 && (
          <span className="-ml-2 md:-ml-3 lg:-ml-4 flex h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-surface-warm ring-2 ring-surface text-sm md:text-base font-semibold text-text">
            +{remaining}
          </span>
        )}
      </div>
      <h2 className="mt-8 text-4xl md:text-5xl font-semibold text-text leading-none tracking-tight">
        {dict.homeHeading}
      </h2>
      <Link
        href="/endorsements"
        className="group mt-6 -ml-2 px-2 py-1.5 inline-flex items-center gap-2 text-lg font-semibold text-text-subtle hover:text-text transition-colors duration-150 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
      >
        <span>{dict.homeLink}</span>
        <ArrowIcon size="sm" className="transition-transform duration-150 ease-out group-hover:translate-x-1 motion-reduce:transition-none" />
      </Link>
    </Section>
  );
}