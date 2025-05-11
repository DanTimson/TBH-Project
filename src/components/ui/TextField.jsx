import React from "react";
import { cn } from "@/lib/utils"; // optional: utility to merge Tailwind classes

export default function TextFieldDisplay({
  variant = "default",
  size = "small",
  leftIcon = null,
  rightIcon = null,
  value = "",
  className = "",
}) {
  const baseStyles = "flex items-center gap-2 px-3 rounded-md w-full";

  const variantStyles = {
    default: "bg-[#369672] text-white",
    outline: "border border-[#369672] text-base-80 bg-transparent",
    ghost: "bg-transparent text-base-80",
  };

  const sizeStyles = {
    small: "h-10 text-sm",
    large: "h-12 text-base",
  };

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {leftIcon && <span className="text-inherit">{leftIcon}</span>}
      <span className="flex-1 truncate font-body-m-regular">{value}</span>
      {rightIcon && <span className="text-inherit">{rightIcon}</span>}
    </div>
  );
}

