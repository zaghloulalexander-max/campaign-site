'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import Modal from '@/app/components/ui/Modal';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import IconButton from '@/app/components/ui/IconButton';

// ============================================================================
// TYPES
// ============================================================================

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  zip: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  zip?: string;
}

// ============================================================================
// HELPERS
// ============================================================================

/** Strip HTML tags and trim whitespace */
function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, '').trim();
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.firstName.trim()) {
    errors.firstName = 'Required';
  }

  if (!data.lastName.trim()) {
    errors.lastName = 'Required';
  }

  if (!data.email.trim()) {
    errors.email = 'Required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email';
  }

  if (!data.zip.trim()) {
    errors.zip = 'Required';
  } else if (!/^\d{5}(-\d{4})?$/.test(data.zip)) {
    errors.zip = 'Invalid zip code';
  }

  return errors;
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function VolunteerModal({ isOpen, onClose }: VolunteerModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    zip: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof FormData) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    // Clear error on that field as user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Sanitize all inputs
    const sanitized: FormData = {
      firstName: sanitize(formData.firstName),
      lastName: sanitize(formData.lastName),
      email: sanitize(formData.email),
      zip: sanitize(formData.zip),
    };

    // Validate
    const validationErrors = validateForm(sanitized);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      // TODO: wire to Resend / API route
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
    } catch {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({ firstName: '', lastName: '', email: '', zip: '' });
    setErrors({});
    setSubmitted(false);
    setLoading(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Volunteer"
      size="xs"
    >
      {/* Close button */}
      <IconButton
        icon="close"
        size="sm"
        onClick={handleClose}
        aria-label="Close modal"
        className="absolute top-4 right-4"
      />

      <Modal.Body>
        {submitted ? (
          <div className="text-center py-8" role="status">
            <p className="text-text mb-2" style={{ fontSize: '20px' }}>Thank you</p>
            <p className="text-text-muted" style={{ fontSize: '16px' }}>We&apos;ll be in touch shortly.</p>
          </div>
        ) : (
          <>
            <h2
              id="modal-title"
              className="text-xl font-semibold text-text text-center mb-6"
            >
              Volunteer
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              noValidate
              aria-label="Volunteer signup"
            >
              <div className="grid grid-cols-2 gap-3">
                <Input
                  autoFocus
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange('firstName')}
                  error={errors.firstName}
                  label="First name"
                  srOnlyLabel
                  autoComplete="given-name"
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange('lastName')}
                  error={errors.lastName}
                  label="Last name"
                  srOnlyLabel
                  autoComplete="family-name"
                />
              </div>

              <Input
                type="email"
                inputMode="email"
                autoCapitalize="none"
                autoCorrect="off"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange('email')}
                error={errors.email}
                label="Email"
                srOnlyLabel
                autoComplete="email"
              />

              <Input
                type="text"
                inputMode="numeric"
                placeholder="Zip code"
                value={formData.zip}
                onChange={handleChange('zip')}
                error={errors.zip}
                label="Zip code"
                srOnlyLabel
                autoComplete="postal-code"
              />

              <Button
                type="submit"
                variant="primary"
                fullWidth
                loading={loading}
              >
                Submit
              </Button>
            </form>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}