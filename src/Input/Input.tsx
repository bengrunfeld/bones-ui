import { FieldValues, UseFormRegister } from "react-hook-form";

type InputProps = {
  name: string;
  register: UseFormRegister<FieldValues>;
  validation?: FieldValues;
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  labelText?: string;
  className?: string;
  shrinkLabelOnFocus?: boolean;
  legendText?: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  inputProps?: any;
  hasError?: boolean;
  errorMessage?: string;
  mobileKeyboard?:
    | "text"
    | "numeric"
    | "email"
    | "decimal"
    | "tel"
    | "search"
    | "url"
    | "none";
};

const Input = ({
  type = "text",
  labelText,
  className,
  shrinkLabelOnFocus,
  legendText,
  autoComplete,
  name,
  required = false,
  placeholder,
  autoFocus,
  inputProps,
  hasError = false,
  errorMessage = "",
  mobileKeyboard = "text",
  register,
  validation,
}: InputProps) => {
  return (
    <div className={className}>
      <fieldset
        aria-describedby={hasError ? `${name}-error` : undefined}
        className={`fieldset fieldset-${name}`}
      >
        {legendText && (
          <legend className={`legend legend-${name}`}>
            <span>{legendText}</span>
          </legend>
        )}
        <label
          data-shrink={shrinkLabelOnFocus}
          htmlFor={name}
          className={`label label-${name}`}
        >
          {labelText}
        </label>
        <input
          aria-invalid={hasError}
          id={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          placeholder={placeholder}
          autoFocus={autoFocus}
          {...inputProps}
          className={`input input-${name}`}
          inputMode={mobileKeyboard}
          {...register(name, { ...validation })}
        />

        {hasError && (
          <span
            id={`${name}-error`}
            role="alert"
            aria-live="polite"
            className={`text-input-error text-input-error-${name} error-message`}
          >
            {errorMessage}
          </span>
        )}
      </fieldset>
    </div>
  );
};

export default Input;
