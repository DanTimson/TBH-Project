import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Button = ({
  // Content
  label,
  text = "Найти", 
  leftIcon,
  rightIcon,
  
  // Variants
  variant = "primary",
  color = "lilac",
  size = "m",
  initialState = "enabled",
  
  // Options
  showLeftIcon = false,
  showRightIcon = false,
  isIconButton = false,
  
  // Handlers
  onClick,
  className,
  ...props
}) => {
  const [internalState, setInternalState] = useState(initialState);
  const isDisabled = internalState === "disabled";

  // Style configuration
  const styles = {
    size: {
      s: { button: "h-8 px-3 text-xs", icon: 16, spacing: "gap-1" },
      m: { button: "h-10 px-4 text-sm", icon: 20, spacing: "gap-2" },
      l: { button: "h-12 px-6 text-base", icon: 24, spacing: "gap-3" }
    },
    color: {
      blue: {
        primary: {
          enabled: "bg-blue-600 hover:bg-blue-700 text-white",
          pressed: "bg-blue-800 text-white",
          disabled: "bg-gray-300 text-gray-500"
        },
        secondary: {
          enabled: "border border-blue-600 text-blue-600 hover:bg-blue-50",
          pressed: "border border-blue-800 bg-blue-100 text-blue-800",
          disabled: "border border-gray-300 text-gray-400"
        }
      },
      lilac: {
        primary: {
          enabled: "bg-[#6D81D8] hover:bg-[#5A6DC2] text-white",
          pressed: "bg-[#5A6DC2] text-white",
          disabled: "bg-gray-300 text-gray-500"
        },
        secondary: {
          enabled: "border border-[#6D81D8] text-[#6D81D8] hover:bg-[#E6ECFA]",
          pressed: "border border-[#5A6DC2] bg-[#E6ECFA] text-[#5A6DC2]",
          disabled: "border border-gray-300 text-gray-400"
        }
      },
      green: {
        primary: {
          enabled: "bg-green-600 hover:bg-green-700 text-white",
          pressed: "bg-green-800 text-white",
          disabled: "bg-gray-300 text-gray-500"
        },
        secondary: {
          enabled: "border border-green-600 text-green-600 hover:bg-green-50",
          pressed: "border border-green-800 bg-green-100 text-green-800",
          disabled: "border border-gray-300 text-gray-400"
        }
      }
    },
    iconColor: {
      primary: "text-white",
      secondary: {
        blue: {
          enabled: "text-blue-600",
          pressed: "text-blue-800",
          disabled: "text-gray-400"
        },
        green: {
          enabled: "text-green-600",
          pressed: "text-green-800",
          disabled: "text-gray-400"
        }
      }
    }
  };

  const handleClick = (e) => {
    if (!isDisabled) {
      if (variant === "primary") {
        setInternalState(prev => (prev === "pressed" ? "enabled" : "pressed"));
      }
      onClick?.(e);
    }
  };

  // Get current styles
  const sizeStyles = styles.size[size] || styles.size.m;
  const variantStyles = styles.color[color]?.[variant] || styles.color.blue.primary;
  const stateStyle = variantStyles[internalState] || variantStyles.enabled;
  
  const iconColor = variant === "primary" 
    ? styles.iconColor.primary
    : styles.iconColor.secondary[color]?.[internalState] || styles.iconColor.secondary.blue.enabled;

  // Default icons if none provided
  const defaultIcon = (
    <svg 
      width={sizeStyles.icon} 
      height={sizeStyles.icon} 
      viewBox={`0 0 ${sizeStyles.icon} ${sizeStyles.icon}`}
      className={iconColor}
    >
      <circle 
        cx={sizeStyles.icon / 2} 
        cy={sizeStyles.icon / 2} 
        r={sizeStyles.icon / 4} 
        fill="currentColor" 
      />
    </svg>
  );

  const renderedLeftIcon = leftIcon || defaultIcon;
  const renderedRightIcon = rightIcon || defaultIcon;

  // Determine displayed text
  const displayedText = text || label;

  // Button classes
  const buttonClasses = clsx(
    "rounded font-medium flex items-center justify-center transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    variant === "primary" 
      ? `focus:ring-${color}-500` 
      : `focus:ring-${color}-200`,
    sizeStyles.button,
    sizeStyles.spacing,
    stateStyle,
    className,
    {
      "opacity-75 cursor-not-allowed": isDisabled,
      "px-2": isIconButton, // Less horizontal padding for icon-only buttons
      "justify-between": showLeftIcon && showRightIcon
    }
  );

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      disabled={isDisabled}
      aria-pressed={variant === "primary" ? internalState === "pressed" : undefined}
      {...props}
    >
      {(showLeftIcon || isIconButton) && (
        <span className="flex items-center">
          {React.cloneElement(renderedLeftIcon, {
            width: sizeStyles.icon,
            height: sizeStyles.icon,
            className: clsx(
              renderedLeftIcon.props.className,
              iconColor
            )
          })}
        </span>
      )}

      {!isIconButton && displayedText && (
        <span>{displayedText}</span>
      )}

      {(showRightIcon || isIconButton) && (
        <span className="flex items-center">
          {React.cloneElement(renderedRightIcon, {
            width: sizeStyles.icon,
            height: sizeStyles.icon,
            className: clsx(
              renderedRightIcon.props.className,
              iconColor
            )
          })}
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string, // Legacy prop (still supported)
  text: PropTypes.string, // New text content prop
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  color: PropTypes.oneOf(["blue", "green", "lilac"]),
  size: PropTypes.oneOf(["s", "m", "l"]),
  initialState: PropTypes.oneOf(["enabled", "pressed", "disabled"]),
  showLeftIcon: PropTypes.bool,
  showRightIcon: PropTypes.bool,
  isIconButton: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Button.defaultProps = {
  text: "Button",
  variant: "primary",
  color: "lilac",
  size: "m",
  initialState: "enabled",
  showLeftIcon: false,
  showRightIcon: false,
  isIconButton: false
};

export default Button;