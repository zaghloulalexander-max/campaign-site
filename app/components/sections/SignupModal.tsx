'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import Modal from '@/app/components/ui/Modal';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import IconButton from '@/app/components/ui/IconButton';
import type { Dictionary } from '@/app/lib/i18n';

// ============================================================================
// TYPES
// ============================================================================

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  dict: Dictionary['signup'];
}

interface FormData {
  email: string;
  zip: string;
}

interface FormErrors {
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

function validateForm(data: FormData, errorMessages: Dictionary['signup']['errors']): FormErrors {
  const errors: FormErrors = {};

  if (!data.email.trim()) {
    errors.email = errorMessages.invalidEmail;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = errorMessages.invalidEmail;
  }

  if (!data.zip.trim()) {
    errors.zip = errorMessages.invalidZip;
  } else if (!/^\d{5}(-\d{4})?$/.test(data.zip)) {
    errors.zip = errorMessages.invalidZip;
  }

  return errors;
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function SignupModal({ isOpen, onClose, dict }: SignupModalProps) {
  const [formData, setFormData] = useState<FormData>({ email: '', zip: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const sanitized: FormData = {
      email: sanitize(formData.email),
      zip: sanitize(formData.zip),
    };

    const validationErrors = validateForm(sanitized, dict.errors);
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
    setFormData({ email: '', zip: '' });
    setErrors({});
    setSubmitted(false);
    setLoading(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={dict.title} size="xs">
      <IconButton
        icon="close"
        size="sm"
        onClick={handleClose}
        aria-label={dict.closeLabel}
        className="absolute top-4 right-4"
      />

      <Modal.Body>
        {submitted ? (
          <div className="text-center py-8" role="status">
            <p className="text-text mb-2" style={{ fontSize: '20px' }}>{dict.thankYou}</p>
            <p className="text-text-muted" style={{ fontSize: '16px' }}>{dict.thankYouMessage}</p>
          </div>
        ) : (
          <>
            <h2 id="modal-title" className="text-xl font-semibold text-text text-center mb-6">
              {dict.title}
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              noValidate
              aria-label={dict.formLabel}
            >
              <Input
                autoFocus
                type="email"
                inputMode="email"
                autoCapitalize="none"
                autoCorrect="off"
                placeholder={dict.emailPlaceholder}
                value={formData.email}
                onChange={handleChange('email')}
                error={errors.email}
                label={dict.emailPlaceholder}
                srOnlyLabel
                autoComplete="email"
              />
              <Input
                type="text"
                inputMode="numeric"
                placeholder={dict.zipPlaceholder}
                value={formData.zip}
                onChange={handleChange('zip')}
                error={errors.zip}
                label={dict.zipPlaceholder}
                srOnlyLabel
                autoComplete="postal-code"
              />
              <Button type="submit" variant="primary" fullWidth loading={loading}>
                {dict.submit}
              </Button>
            </form>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}