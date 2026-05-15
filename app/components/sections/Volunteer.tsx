'use client';

import { useState } from 'react';
import Section from '@/app/components/ui/Section';
import Button from '@/app/components/ui/Button';
import VolunteerModal from '@/app/components/sections/VolunteerModal';

// ============================================================================
// COMPONENT
// ============================================================================

export default function Volunteer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Section id="volunteer" background="default" labelledBy="volunteer-heading">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2
            id="volunteer-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-text leading-snug max-w-xl"
          >
            If you believe the county can work better, we&apos;d like your help.
          </h2>
          <div className="flex-shrink-0">
            <Button size="md" variant="primary" onClick={() => setModalOpen(true)}>
              Volunteer
            </Button>
          </div>
        </div>
      </Section>

      <VolunteerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}