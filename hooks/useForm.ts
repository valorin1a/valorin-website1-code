import { useState, useCallback } from "react";
import { FieldErrors, validateForm, ValidationRule } from "@/lib/validation";

type FormState<T> = T & { [key: string]: string | boolean };

export const useForm = <T extends Record<string, string | boolean>>(
  initialState: T,
  validationRules?: Record<string, ValidationRule | ValidationRule[]>,
  onSubmit?: (data: T) => Promise<void> | void
) => {
  const [formData, setFormData] = useState<FormState<T>>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      const inputValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

      setFormData((prev) => ({
        ...prev,
        [name]: inputValue,
      }));

      // Clear error for this field when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitError(null);
      setSubmitSuccess(false);

      // Validate
      if (validationRules) {
        const newErrors = validateForm(formData, validationRules);
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
      }

      setIsSubmitting(true);

      try {
        if (onSubmit) {
          await onSubmit(formData as T);
        }
        setSubmitSuccess(true);
        setFormData(initialState);
        setErrors({});
      } catch (error: unknown) {
        console.error("Form submission error:", error);
        const message =
          error instanceof Error
            ? error.message
            : typeof error === "object" && error !== null && "text" in (error as Record<string, unknown>)
              ? String((error as Record<string, unknown>).text ?? "")
              : "An error occurred. Please try again.";
        setSubmitError(message);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validationRules, onSubmit, initialState]
  );

  const resetForm = useCallback(() => {
    setFormData(initialState);
    setErrors({});
    setSubmitSuccess(false);
    setSubmitError(null);
  }, [initialState]);

  return {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    submitError,
    handleChange,
    handleSubmit,
    resetForm,
    setFormData,
    setErrors,
  };
};
