'use client';

import { useState, type FormEvent } from 'react';
import Section from '@/app/components/ui/Section';
import Button from '@/app/components/ui/Button';

export default function Volunteer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire to form handler (Formspree, Google Forms, etc.)
    setSubmitted(true);
  };

  return (
    <Section id="volunteer" background="primary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Copy */}
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white leading-tight">
            Join the Campaign
          </h2>
          <p className="mt-4 text-primary-100 leading-relaxed">
            Every door knocked, every conversation started, every yard sign planted
            makes a difference. This campaign runs on people — not PACs.
          </p>
          <div className="mt-6 space-y-3 text-primary-200 text-sm">
            <p>✓ Canvass your neighborhood</p>
            <p>✓ Phone bank from home</p>
            <p>✓ Host a house party</p>
            <p>✓ Put up a yard sign</p>
          </div>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-[var(--radius-lg)] p-8 text-center">
              <p className="text-white text-lg font-medium">Thank you!</p>
              <p className="text-primary-200 mt-2">
                We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm rounded-[var(--radius-lg)] p-6 md:p-8 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  required
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-white/15 border border-white/20
                             text-white placeholder:text-white/50 text-sm
                             focus:outline-none focus:border-white/50 transition-colors"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  required
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-white/15 border border-white/20
                             text-white placeholder:text-white/50 text-sm
                             focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-white/15 border border-white/20
                           text-white placeholder:text-white/50 text-sm
                           focus:outline-none focus:border-white/50 transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-white/15 border border-white/20
                           text-white placeholder:text-white/50 text-sm
                           focus:outline-none focus:border-white/50 transition-colors"
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip code"
                required
                className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-white/15 border border-white/20
                           text-white placeholder:text-white/50 text-sm
                           focus:outline-none focus:border-white/50 transition-colors"
              />
              <Button type="submit" variant="secondary" size="lg" className="w-full mt-2">
                Sign Up to Volunteer
              </Button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
