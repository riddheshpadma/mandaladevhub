// utils/formValidation.ts
export function validateLeadForm(formData: any): Record<string, string> {
    const errors: Record<string, string> = {};
  
    // Required fields validation
    if (!formData.name?.trim()) {
      errors.name = 'Full name is required';
    }
  
    if (!formData.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
  
    if (!formData.phone?.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
  
    if (!formData.package?.trim()) {
      errors.package = 'Please select a package';
    }
  
    if (!formData.agreeTerms) {
      errors.agreeTerms = 'You must agree to the terms and conditions';
    }
  
    return errors;
  }