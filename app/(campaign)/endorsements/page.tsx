import type { Metadata } from 'next';
import Image from 'next/image';
import { getDictionary, defaultLocale } from '@/app/lib/i18n';

export const metadata: Metadata = {
  title: 'Endorsements',
  description:
    'Community leaders, elected officials, and neighbors across District 2 endorsing Nabil Zaghloul for Multnomah County Commissioner.',
};

export default function EndorsementsPage() {
  const dict = getDictionary(defaultLocale);
  const { heading, intro, people } = dict.endorsementsPage;

  return (
    <main className="bg-surface-warm">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-semibold text-text leading-none tracking-tight">
          {heading}
        </h1>
        <p className="mt-4 text-lg text-text-muted">{intro}</p>

        <ul className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {people.map((person) => (
            <li key={person.name} className="flex gap-4">
              <Image
                src={person.imageSrc}
                alt={person.name}
                width={80}
                height={80}
                className="h-20 w-20 shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="text-base font-semibold text-text">{person.name}</p>
                <p className="text-sm text-text-muted mt-0.5">{person.title}</p>
                {person.quote && (
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    &ldquo;{person.quote}&rdquo;
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}