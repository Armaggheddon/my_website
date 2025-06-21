
import React, { forwardRef } from 'react';

// Common custom properties for the Button component's appearance.
// `children` and `className` will be part of the standard HTML attributes.
interface CustomButtonVisualProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// Props for when the component is rendered as an anchor tag (<a>)
interface AnchorElementProps extends CustomButtonVisualProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'type'> {
  href: string; // `href` is required for the anchor variant
  type?: undefined; // Explicitly ensure button-specific 'type' is not assignable
}

// Props for when the component is rendered as a button element (<button>)
interface ButtonElementProps extends CustomButtonVisualProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined; // `href` is not applicable to the button variant
  // `type` (e.g., 'button', 'submit') is a valid prop via ButtonHTMLAttributes
}

// Discriminated union for all possible Button component props
export type ButtonProps = AnchorElementProps | ButtonElementProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((
  props, // props is AnchorElementProps | ButtonElementProps
  ref
) => {
  // Destructure common visual/styling props and standard HTML attributes like children/className.
  // `rest` will capture element-specific attributes (like href, target for <a>, or type, disabled for <button>).
  const {
    variant = 'primary',
    size = 'md',
    leftIcon,
    rightIcon,
    children,          // from AnchorHTMLAttributes or ButtonHTMLAttributes
    className: propClassName, // from AnchorHTMLAttributes or ButtonHTMLAttributes
    ...rest // Contains all other props specific to either <a> or <button>
  } = props;

  const baseStyles = "inline-flex items-center justify-center font-medium rounded-sm focus:outline-none focus-visible:ring-1 dark:focus-visible:ring-offset-dark-code-bg-secondary transition-all duration-100 ease-in-out";
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-2.5 text-base',
  };

  const variantStyles = {
    primary: 'bg-code-accent-keyword text-code-text-on-accent hover:bg-opacity-80 focus-visible:ring-code-accent-keyword dark:bg-dark-code-accent-keyword dark:hover:bg-opacity-80 dark:focus-visible:ring-dark-code-accent-keyword dark:text-dark-code-text-on-accent',
    secondary: 'bg-code-bg-secondary text-code-text-primary border border-code-border hover:bg-opacity-80 focus-visible:ring-code-accent-keyword/50 dark:bg-dark-code-bg-secondary dark:text-dark-code-text-primary dark:border-dark-code-border dark:hover:bg-dark-code-bg dark:focus-visible:ring-dark-code-accent-keyword/50',
    outline: 'border border-code-accent-keyword text-code-accent-keyword hover:bg-code-accent-keyword/10 focus-visible:ring-code-accent-keyword dark:border-dark-code-accent-keyword dark:text-dark-code-accent-keyword dark:hover:bg-dark-code-accent-keyword/10 dark:focus-visible:ring-dark-code-accent-keyword',
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${propClassName || ''}`;

  const content = (
    <>
      {leftIcon && <span className="mr-1.5">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-1.5">{rightIcon}</span>}
    </>
  );

  // Type guard: if props.href is defined, this is an anchor button
  if (props.href !== undefined) {
    // `props` is narrowed to AnchorElementProps.
    // `rest` (derived from AnchorElementProps) will contain `href`, `target`, `rel`, etc.
    return (
      <a
        {...(rest as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'type'>)} // Spread valid anchor attributes
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={combinedClassName}
      >
        {content}
      </a>
    );
  }

  // Otherwise, this is a native button element
  // `props` is narrowed to ButtonElementProps.
  // `rest` (derived from ButtonElementProps) will contain `type`, `disabled`, `onClick`, etc.
  return (
    <button
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)} // Spread valid button attributes
      type={props.type || "button"} // Explicitly set type, props.type is from ButtonElementProps
      ref={ref as React.Ref<HTMLButtonElement>}
      className={combinedClassName}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
