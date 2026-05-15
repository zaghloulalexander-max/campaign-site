'use client';

import { useState } from 'react';
import Section from '@/app/components/ui/Section';
import Button from '@/app/components/ui/Button';
import VolunteerModal from '@/app/components/sections/VolunteerModal';
import type { Dictionary } from '@/app/lib/i18n';

interface VolunteerProps {
  dict: Dictionary['volunteer'];
  modalDict: Dictionary['volunteerModal'];
}

export default function Volunteer({ dict, modalDict }: VolunteerProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Section id="volunteer" background="default">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-text leading-snug max-w-xl">
            {dict.heading}
          </h2>
          <div className="flex-shrink-0">
            <Button size="md" variant="primary" onClick={() => setModalOpen(true)}>
              {dict.button}
            </Button>
          </div>
        </div>
      </Section>

      <VolunteerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} dict={modalDict} />
    </>
  );
}