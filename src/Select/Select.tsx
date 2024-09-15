import { FieldValues, useFormContext, UseFormRegister } from "react-hook-form";

export type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: Option[];
  register: UseFormRegister<FieldValues>;
  label: string;
  name: string;
  hasError?: boolean;
  errorMessage?: string;
  ariaLabel?: string;
  required?: boolean;
  disabled?: boolean;
  placeholderText?: string;
};

const Select = ({
  options,
  label,
  name,
  ariaLabel,
  hasError,
  register,
  errorMessage,
  placeholderText,
  required = false,
  disabled = false,
}: SelectProps) => {
  return (
    <div className="native-select-component">
      <label htmlFor={name} className="select-label">
        {label}
      </label>
      <select
        id={name}
        aria-label={ariaLabel}
        aria-required={required}
        disabled={disabled}
        {...register(name, {
          required: required ? "This field is required" : false,
        })}
      >
        <option value="">{placeholderText || "Select an option"}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hasError && (
        <span className="error-message">{errorMessage as string}</span>
      )}
    </div>
  );
};

export default Select;
