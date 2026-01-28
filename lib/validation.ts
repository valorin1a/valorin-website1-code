/**
 * Form validation utilities - professional-grade validation
 * Covers email, phone, required fields, UAE-specific formats
 */

export type ValidationRule = {
  validate: (value: string) => boolean;
  message: string;
};

export const ValidationRules = {
  required: {
    validate: (value: string) => value.trim().length > 0,
    message: "This field is required",
  },
  email: {
    validate: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message: "Please enter a valid email address",
  },
  phone: {
    validate: (value: string) => /^[\d\s+()-]{7,}$/.test(value),
    message: "Please enter a valid phone number",
  },
  uaePhone: {
    validate: (value: string) => /^(?:\+971|0)?[1-9]\d{8}$/.test(value.replace(/\D/g, "")),
    message: "Please enter a valid UAE phone number (+971 or 0)",
  },
  minLength: (min: number) => ({
    validate: (value: string) => value.length >= min,
    message: `Must be at least ${min} characters`,
  }),
  maxLength: (max: number) => ({
    validate: (value: string) => value.length <= max,
    message: `Must be no more than ${max} characters`,
  }),
  url: {
    validate: (value: string) => {
      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }
    },
    message: "Please enter a valid URL",
  },
  aed: {
    validate: (value: string) => /^\d+(\.\d{2})?$/.test(value.trim()),
    message: "Please enter a valid AED amount",
  },
};

export type FieldErrors = Record<string, string>;

export const validateForm = (
  data: Record<string, string | boolean>,
  rules: Record<string, ValidationRule | ValidationRule[]>
): FieldErrors => {
  const errors: FieldErrors = {};

  for (const [field, value] of Object.entries(data)) {
    if (!(field in rules)) continue;

    const fieldRules = Array.isArray(rules[field]) ? rules[field] : [rules[field]];

    for (const rule of fieldRules as ValidationRule[]) {
      const stringValue = String(value || "");
      if (!rule.validate(stringValue)) {
        errors[field] = rule.message;
        break; // Stop at first error for this field
      }
    }
  }

  return errors;
};
