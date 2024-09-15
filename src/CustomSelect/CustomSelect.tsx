import React, { useState, useRef } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: Option[];
  label: string;
  name: string;
  onChange: (value: string) => void;
  className?: string;
  ariaLabel?: string; // Optional prop for screen readers
};

const Select = ({
  options,
  label,
  name,
  onChange,
  className,
  ariaLabel,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const selectRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    setSelectedValue(option.value);
    onChange(option.value);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setIsOpen(true);
        setFocusedIndex((prevIndex) =>
          Math.min(prevIndex + 1, options.length - 1)
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        break;
      case "Enter":
      case " ":
        if (isOpen && focusedIndex !== -1 && options[focusedIndex]) {
          const selectedOption = options[focusedIndex];
          if (selectedOption) {
            handleOptionClick(selectedOption);
          }
        } else {
          setIsOpen(true);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const handleOptionKeyDown = (
    e: React.KeyboardEvent<HTMLLIElement>,
    index: number
  ) => {
    const option = options[index];
    if ((e.key === "Enter" || e.key === " ") && option) {
      handleOptionClick(option);
    }
  };

  return (
    <div className={`select-component ${className}`}>
      <label
        id="select-label"
        htmlFor="select-button"
        className={`select-label select-label-${name}`}
      >
        {label}
      </label>
      <button
        ref={selectRef}
        id="select-button"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="select-label"
        aria-label={ariaLabel}
        className={`select-button select-button-${name}`}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
      >
        {selectedValue
          ? options.find((option) => option.value === selectedValue)?.label
          : "Select an option"}
      </button>
      {isOpen && (
        <ul
          ref={listboxRef}
          role="listbox"
          aria-activedescendant={
            focusedIndex !== -1 ? `option-${focusedIndex}` : undefined
          }
          aria-labelledby="select-label"
          className={`select-dropdown select-dropdown-${name}`}
          tabIndex={-1}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`option-${index}`}
              role="option"
              aria-selected={selectedValue === option.value}
              className={`select-option ${focusedIndex === index ? "focused" : ""} select-option-${name}`}
              onClick={() => handleOptionClick(option)}
              onKeyDown={(e) => handleOptionKeyDown(e, index)}
              tabIndex={-1}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
