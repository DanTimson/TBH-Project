import React from "react";
import clsx from "clsx";

export function Button({ 
  variant = "primary", 
  state = "enabled", 
  size = "s", 
  children, 
  icon 
}) {
  const baseStyles = "flex items-center justify-center gap-2 font-lato font-normal rounded-md";
  
  const sizeStyles = {
    s: "h-10 px-4 text-sm",
    m: "h-13 px-6 text-base"
  };

  const variantStyles = {
    primary: {
      enabled: "bg-[#6D81D8] text-white",
      pressed: "bg-[#415AA9] text-white",
      disabled: "bg-[#C6C6C6] text-white cursor-not-allowed"
    },
    secondary: {
      enabled: "border border-[#6D81D8] text-[#6D81D8]",
      pressed: "border border-[#415AA9] text-[#415AA9]",
      disabled: "border border-[#C6C6C6] text-[#C6C6C6] cursor-not-allowed"
    }
  };

  const iconSize = size === "s" ? "w-4 h-4" : "w-6 h-6";

  return (
    <button 
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant][state],
        state === "disabled" && "pointer-events-none"
      )}
      disabled={state === "disabled"}
    >
      {icon && <span className={clsx(iconSize, "flex items-center justify-center")}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
