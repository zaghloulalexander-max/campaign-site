import Section from '@/app/components/ui/Section';

export default function EventsPage() {
  return (
    <div className="pt-20">
      <Section>
        <h1 className=" text-3xl md:text-4xl font-semibold text-text">
          Events
        </h1>
        <p className="mt-4 text-text-muted">
          Upcoming events and appearances.
        </p>
      </Section>
    </div>
  );
}