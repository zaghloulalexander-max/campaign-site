'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Section from '@/app/components/ui/Section';
import Button from '@/app/components/ui/Button';
import type { Dictionary } from '@/app/lib/i18n';

const SignupModal = dynamic(() => import('@/app/components/sections/SignupModal'), { ssr: false });
const VolunteerModal = dynamic(() => import('@/app/components/sections/VolunteerModal'), { ssr: false });

// ============================================================================
// TYPES
// ============================================================================

interface SignupProps {
  dict: Dictionary['signup'];
  volunteerModalDict: Dictionary['volunteerModal'];
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function Signup({ dict, volunteerModalDict }: SignupProps) {
  const [signupOpen, setSignupOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  return (
    <>
      <Section id="signup" background="default">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            {dict.heading}
          </p>
        </div>
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-text leading-snug">
              {dict.headingBody}
            </h2>
            <button
              type="button"
              onClick={() => setVolunteerOpen(true)}
              className="mt-4 text-sm text-text-subtle hover:text-text hover:underline cursor-pointer transition-colors duration-150 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
            >
              {dict.volunteerLink}
            </button>
          </div>
          <div className="flex-shrink-0">
            <Button size="md" variant="primary" onClick={() => setSignupOpen(true)}>
              {dict.button}
            </Button>
          </div>
        </div>
      </Section>

      <SignupModal
        isOpen={signupOpen}
        onClose={() => setSignupOpen(false)}
        dict={dict}
      />

      <VolunteerModal
        isOpen={volunteerOpen}
        onClose={() => setVolunteerOpen(false)}
        dict={volunteerModalDict}
      />
    </>
  );
}