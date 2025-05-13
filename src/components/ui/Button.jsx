import React from "react";
import clsx from "clsx";

export function Button({
  size = "medium",
  variant = "filled",
  color = "gray",
  children,
  className = "",
}) {
  const baseClasses = "flex items-center justify-center gap-2 rounded overflow-hidden";

  const sizeClasses = size === "small" ? "h-10 px-4 py-2" : "h-[52px] px-6 py-2";

  const variantColorClasses = {
    filled: {
      "blue-light": "bg-[#6d81d8] text-base-0",
      "blue-dark": "bg-[#415aa9] text-base-0",
      "green-light": "bg-[#369672] text-base-0",
      "green-dark": "bg-[#006c4c] text-base-0",
      gray: "bg-base-20 text-base-0",
    },
    outline: {
      "blue-light": "border border-solid border-[#6d81d8] text-[#6d81d8]",
      "blue-dark": "border border-solid border-[#415aa9] text-[#415aa9]",
      "green-light": "border border-solid border-[#369672] text-[#369672]",
      "green-dark": "border border-solid border-[#006c4c] text-[#006c4c]",
      gray: "border border-solid border-base-20 text-base-20",
    },
    ghost: {
      "blue-light": "text-[#6d81d8]",
      "blue-light-bg": "bg-[#f2f3ff] text-[#415aa9]",
      "green-light": "text-[#369672]",
      "green-light-bg": "bg-[#ebf6f1] text-[#006c4c]",
      gray: "text-base-20",
    },
  };

  const buttonClass = clsx(
    baseClasses,
    sizeClasses,
    variantColorClasses[variant]?.[color] || "",
    className
  );

  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
}
