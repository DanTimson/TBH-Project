import React from "react";
import { Trash2 } from "lucide-react";

const getBorderColor = (state) => {
  switch (state) {
    case "default": return "border-[#8796e8]";
    case "success": return "border-[#369672]";
    case "disabled": return "border-base-10";
    case "error": return "border-red-50-duplicate";
    default: return "border-[#8796e8]";
  }
};

const getHelperTextColor = (state) => {
  return state === "error" ? "text-red-50-duplicate" : "text-base-40";
};

const getBackgroundColor = (state) => {
  return state === "disabled" ? "bg-base-5" : "bg-base-0";
};

const getTextColor = (state) => {
  switch (state) {
    case "success": return "text-[#369672]";
    case "disabled": return "text-base-60";
    default: return "text-base-90";
  }
};

const getLabelStyle = (style, state) => {
  const baseStyle = style === "italic"
    ? "font-body-s-italic [font-style:var(--body-s-italic-font-style)]"
    : "font-caption-regular-none";
  const colorClass = state === "success" ? "text-[#369672]" : "text-base-40";
  return `${baseStyle} ${colorClass}`;
};

const InputField = ({
  size = "small",
  state = "default",
  hasText = true,
  hasDelete = true,
  style = "normal",
  label = "Label",
  text = "Text",
  helperText = "Helper text",
}) => {
  return (
    <div className="flex flex-col w-[260px] items-start gap-1">
      <div
        className={`${size === "small" ? "h-[50px]" : "h-16"}
          ${getBackgroundColor(state)} ${getBorderColor(state)}
          flex items-center gap-2 px-3 py-1.5 w-full rounded overflow-hidden border border-solid`}
      >
        {/* Left icon */}
        <div className={`relative ${size === "small" ? "w-4 h-4" : "w-6 h-6"}`}>
          <div className={`${size === "small" ? "w-2 h-2 top-1 left-1" : "w-3 h-3 top-1.5 left-1.5"} rounded${size === "large" ? "-md" : ""} relative bg-base-40`} />
        </div>

        {/* Label and text */}
        <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
          <div className={`${getLabelStyle(style, state)} ${size === "large" ? "text-[length:var(--body-s-regular-font-size)]" : "text-[length:var(--caption-regular-none-font-size)]"} whitespace-nowrap relative w-fit mt-[-1.00px]`}>
            {label}
          </div>
          {hasText && (
            <div className={`${getTextColor(state)} ${size === "large" ? "text-[length:var(--body-m-regular-font-size)] font-body-m-regular" : "text-[length:var(--body-s-regular-font-size)] font-body-s-regular"} relative w-fit`}>
              {text}
            </div>
          )}

          {/* Success state dividers */}
          {state === "success" && (
            <div className="items-center gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
              {hasText ? (
                <>
                  <div className="inline-flex items-center relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] text-base-90 text-[length:var(--body-s-regular-font-size)] relative w-fit font-body-s-regular">
                      {text}
                    </div>
                    <div className="relative w-px h-4 bg-base-50" />
                  </div>
                </>
              ) : (
                <div className="gap-0.5 inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-px h-4 bg-base-70" />
                </div>
              )}
            </div>
          )}
        </div>

        {hasDelete && (
          <Trash2 className={`relative ${size === "small" ? "w-4 h-4" : "w-6 h-6"}`} />
        )}

        {/* Right icon */}
        <div className={`relative ${size === "small" ? "w-4 h-4" : "w-6 h-6"}`}>
          <div className={`${size === "small" ? "w-2 h-2 top-1 left-1" : "w-3 h-3 top-1.5 left-1.5"} rounded${size === "large" ? "-md" : ""} relative bg-base-40`} />
        </div>
      </div>

      <div className={`${getHelperTextColor(state)} ${style === "italic" && size === "small" ? "[font-family:'Lato-Regular',Helvetica] font-normal text-xs tracking-[0] leading-[normal]" : "font-body-s-regular text-[length:var(--body-s-regular-font-size)]"} relative self-stretch`}>
        {helperText}
      </div>
    </div>
  );
};

export default InputField;
