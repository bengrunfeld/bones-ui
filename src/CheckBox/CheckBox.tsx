import { ReactNode } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValue,
  FieldValues,
  Merge,
  UseFormRegister,
  ValidationRule,
} from "react-hook-form";

export type CheckBoxProps = {
  name: string;
  register: UseFormRegister<FieldValues>;
  labelText?: string | ReactNode;
  ariaLabelText?: string;
  initialValue?: string;
  inputProps?: any;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  required?: boolean;
  errorMessage?: string | undefined;
};

const CheckBox = ({
  name,
  labelText,
  initialValue,
  ariaLabelText,
  inputProps,
  register,
  error,
  errorMessage,
  required = false,
}: CheckBoxProps) => {
  return (
    <>
      <label htmlFor={name}>
        <span className="checkbox-wrapper">
          <input
            id={name}
            type="checkbox"
            data-indeterminate="false"
            aria-describedby={error ? `${name}-error` : undefined}
            aria-label={(!labelText && ariaLabelText) || undefined}
            value={initialValue || ""}
            {...register(name, required ? { required: errorMessage } : {})}
            {...inputProps}
            aria-invalid={error ? "true" : "false"}
            aria-required={required ? "true" : "false"}
          />
        </span>
        <span>{labelText}</span>
      </label>

      {error && (
        <span
          id={`${name}-error`}
          aria-live="polite"
          className={`checkbox-error checkbox-error-${name} error-message `}
          role="alert"
        >
          {errorMessage}
        </span>
      )}
    </>
  );
};

export default CheckBox;
