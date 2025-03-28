// utils/formValidation.ts
// utils/formValidation.ts
interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  package: string;
  message?: string;
  businessType?: string;
  project?: string;
  budget?: string;
  timeline?: string;
  referral?: string;
  agreeTerms: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  package?: string;
  message?: string;
  businessType?: string;
  project?: string;
  budget?: string;
  timeline?: string;
  referral?: string;
  agreeTerms?: string;
}

export function validateLeadForm(formData: LeadFormData): FormErrors {
  const errors: FormErrors = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = 'Full name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  if (!formData.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Package validation
  if (!formData.package.trim()) {
    errors.package = 'Please select a package';
  }

  // Terms validation
  if (!formData.agreeTerms) {
    errors.agreeTerms = 'You must agree to the terms and conditions';
  }

  return errors;
}