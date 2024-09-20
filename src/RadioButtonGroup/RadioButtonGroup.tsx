import React, { ReactNode } from "react";

import { FieldValues, UseFormRegister } from "react-hook-form";

export type RadioButtonProps = {
  value: string;
  register: UseFormRegister<FieldValues>;
  groupName: string;
  required?: boolean;
  labelText?: string | ReactNode;
  errorMessage?: string | undefined;
};

export const RadioButton = ({
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

export type RadioButtonGroupProps = {
  groupName: string;
  radioButtons: RadioButtonProps[];
  groupLabel?: string | ReactNode;
  error?: string;
};

export const RadioButtonGroup = ({
  radioButtons,
  groupLabel,
  groupName,
}: RadioButtonGroupProps) => (
  <div
    role="radiogroup"
    aria-labelledby={`${groupName}-label`}
    className="radio-button-group"
  >
    <label id={`${groupName}-label`} className="radio-group-label">
      {groupLabel}
    </label>
    {radioButtons.map((item: any) => (
      <RadioButton
        key={item.value}
        value={item.value}
        labelText={item?.labelText}
        groupName={groupName}
        register={item.register}
      />
    ))}
  </div>
);

export default RadioButtonGroup;
