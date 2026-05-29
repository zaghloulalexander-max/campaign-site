'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import Modal from '@/app/components/ui/Modal';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import IconButton from '@/app/components/ui/IconButton';
import type { Dictionary } from '@/app/lib/i18n';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
  dict: Dictionary['volunteerModal'];
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

function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, '').trim();
}

function validateForm(data: FormData, errors: Dictionary['volunteerModal']['errors']): FormErrors {
  const result: FormErrors = {};
  if (!data.firstName.trim()) result.firstName = errors.required;
  if (!data.lastName.trim()) result.lastName = errors.required;
  if (!data.email.trim()) {
    result.email = errors.required;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    result.email = errors.invalidEmail;
  }
  if (!data.zip.trim()) {
    result.zip = errors.required;
  } else if (!/^\d{5}(-\d{4})?$/.test(data.zip)) {
    result.zip = errors.invalidZip;
  }
  return result;
}

export default function VolunteerModal({ isOpen, onClose, dict }: VolunteerModalProps) {
  const [formData, setFormData] = useState<FormData>({ firstName: '', lastName: '', email: '', zip: '' });
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
      firstName: sanitize(formData.firstName),
      lastName: sanitize(formData.lastName),
      email: sanitize(formData.email),
      zip: sanitize(formData.zip),
    };
    const validationErrors = validateForm(sanitized, dict.errors);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitized),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch { setLoading(false); }
  };

  const handleClose = () => {
    setFormData({ firstName: '', lastName: '', email: '', zip: '' });
    setErrors({});
    setSubmitted(false);
    setLoading(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={dict.title} size="xs">
      <IconButton icon="close" size="sm" onClick={handleClose} aria-label={dict.closeLabel} className="absolute top-4 right-4" />

      <Modal.Body>
        {submitted ? (
          <div className="text-center py-8" role="status">
            <p className="text-text mb-2" style={{ fontSize: '20px' }}>{dict.thankYou}</p>
            <p className="text-text-muted" style={{ fontSize: '16px' }}>{dict.thankYouMessage}</p>
          </div>
        ) : (
          <>
            <h2 id="modal-title" className="text-xl font-semibold text-text text-center mb-6">{dict.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label={dict.formLabel}>
              <div className="grid grid-cols-2 gap-3">
                <Input autoFocus type="text" placeholder={dict.firstName} value={formData.firstName} onChange={handleChange('firstName')} error={errors.firstName} label={dict.firstName} srOnlyLabel autoComplete="given-name" />
                <Input type="text" placeholder={dict.lastName} value={formData.lastName} onChange={handleChange('lastName')} error={errors.lastName} label={dict.lastName} srOnlyLabel autoComplete="family-name" />
              </div>
              <Input type="email" inputMode="email" autoCapitalize="none" autoCorrect="off" placeholder={dict.email} value={formData.email} onChange={handleChange('email')} error={errors.email} label={dict.email} srOnlyLabel autoComplete="email" />
              <Input type="text" inputMode="numeric" placeholder={dict.zip} value={formData.zip} onChange={handleChange('zip')} error={errors.zip} label={dict.zip} srOnlyLabel autoComplete="postal-code" />
              <Button type="submit" variant="primary" fullWidth loading={loading}>{dict.submit}</Button>
            </form>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}