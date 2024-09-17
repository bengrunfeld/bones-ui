import React, { ReactNode } from "react";
// import RadioButton, { RadioButtonProps } from "./RadioButton";
const RadioButton = require("./RadioButton");

export type RadioButtonGroupProps = {
  groupName: string;
  radioButtons: any; // RadioButtonProps[];
  groupLabel?: string | ReactNode;
  error?: string;
};

const RadioButtonGroup = ({
  radioButtons,
  groupLabel,
  groupName,
  error,
}: RadioButtonGroupProps) => (
  <div
    role="radiogroup"
    aria-labelledby={`${groupName}-label`}
    className="radio-button-group"
  >
    <label id={`${groupName}-label`} className="radio-group-label">
      {groupLabel}
    </label>
    {radioButtons.map((item) => (
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
