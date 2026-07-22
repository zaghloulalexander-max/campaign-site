interface EndorsementWallProps {
  dict: {
    heading: string;
    people: readonly { name: string; title: string }[];
  };
}

export default function EndorsementWall({ dict }: EndorsementWallProps) {
  return (
    <section className="bg-surface-warm" aria-label="All endorsements">
      <div className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-text leading-none tracking-tight mb-12">
          {dict.heading}
        </h2>
        <ul className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2">
          {dict.people.map((person) => (
            <li key={person.name}>
              <p className="text-base font-semibold text-text">{person.name}</p>
              <p className="text-sm text-text-muted mt-0.5">{person.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}