export type ButtonProps = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  label?: string;
  className?: string;
  ariaExpanded?: boolean; // For expandable buttons like dropdowns
  ariaControls?: string; // If controlling content visibility
  autofocus?: boolean;
  buttonProps?: any;
};

const Button = ({
  onClick,
  children,
  type = "button",
  disabled = false,
  label,
  className,
  ariaExpanded,
  ariaControls,
  autofocus,
  buttonProps,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-expanded={ariaExpanded} // Indicates the expandable state for dropdowns or similar elements
      aria-controls={ariaControls} // Associates the button with the element it controls
      className={className}
      autoFocus={autofocus}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
