import { ReactNode } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export type RadioButtonProps = {
  value: string;
  register: UseFormRegister<FieldValues>;
  groupName: string;
  required?: boolean;
  labelText?: string | ReactNode;
  errorMessage?: string | undefined;
};

const RadioButton = ({
  value,
  labelText,
  groupName,
  register,
  required,
  errorMessage,
}: RadioButtonProps) => {
  const radioId = `radio-${value}`;

  return (
    <div className="radio-button">
      <label htmlFor={radioId} className="radio-button-label">
        <input
          id={radioId}
          type="radio"
          value={value}
          className="radio-button-input"
          {...register(groupName, {
            required: required ? errorMessage : false,
          })}
        />
        <span className="radio-button-label-text">{labelText}</span>
      </label>
    </div>
  );
};

export default RadioButton;
