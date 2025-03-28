// utils/validateLeadForm.ts
interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  package: string;
  message?: string;
  businessType: string;
  project: string;
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
  submit?: string;
}

export function validateLeadForm(formData: LeadFormData): FormErrors {
  const errors: FormErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  // Name validation (required, min 2 chars)
  if (!formData.name.trim()) {
      errors.name = 'Full name is required';
  } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
  }

  // Email validation (required, valid format)
  if (!formData.email.trim()) {
      errors.email = 'Email is required';
  } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
  }

  // Phone validation (required, valid format)
  if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
  }

  // Package validation (required)
  if (!formData.package.trim()) {
      errors.package = 'Please select a package';
  }

  // Business Type validation (required)
  if (!formData.businessType.trim()) {
      errors.businessType = 'Please specify your business type';
  }

  // Project validation (required)
  if (!formData.project.trim()) {
      errors.project = 'Please describe your project';
  }

  // Message validation (optional but validate length if provided)
  if (formData.message && formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
  }

  // Terms agreement validation (required)
  if (!formData.agreeTerms) {
      errors.agreeTerms = 'You must agree to the terms and conditions';
  }

  return errors;
}

export function hasFormErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0;
}