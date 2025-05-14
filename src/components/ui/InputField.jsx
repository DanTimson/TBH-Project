import React from "react";
import { Trash2 } from "lucide-react";

// Styling logic
const getBorderColor = (state) => {
  switch (state) {
    case "active":
    case "enabled":
      return "border-[#8796e8]";
    case "error":
      return "border-red-500";
    case "disabled":
      return "border-base-10";
    default:
      return "border-base-30";
  }
};

const getTextColor = (state) => {
  if (state === "disabled") return "text-base-60";
  if (state === "error") return "text-red-500";
  return "text-base-90";
};

const getHelperTextColor = (state) => {
  return state === "error" ? "text-red-500" : "text-base-40";
};

const getBackgroundColor = (state) => {
  return state === "disabled" ? "bg-base-5" : "bg-base-0";
};

export function InputField({
  state = "enabled", // 'enabled' | 'active' | 'disabled' | 'error'
  type = "filled",   // 'placeholder' | 'filled'
  size = "S",        // 'S' | 'M'
  label = "Label",
  value = "",
  placeholder = "Placeholder...",
  helperText = "Helper text",
  showLeftIcon = false,
  showRightIcon = false,
  showClearIcon = false,
  showHelperText = true,
}) {
  const isFilled = type === "filled" && value !== "";
  const padding = size === "S" ? "px-3 py-2 h-[50px]" : "px-4 py-3 h-[64px]";
  const iconSize = size === "S" ? "w-4 h-4" : "w-6 h-6";
  const textSize = size === "S" ? "text-sm" : "text-base";

  return (
    <div className="flex flex-col w-[260px] gap-1">
      <div
        className={`flex items-center gap-2 w-full rounded border ${getBorderColor(state)} ${getBackgroundColor(state)} ${padding}`}
      >
        {showLeftIcon && (
          <div className={`relative ${iconSize}`}>
            <div className="w-full h-full bg-base-40 rounded-full" />
          </div>
        )}

        <div className="flex flex-col flex-1">
          <label className={`text-xs ${getTextColor(state)} ${size === "M" ? "text-sm" : ""}`}>
            {label}
          </label>
          {isFilled ? (
            <span className={`${getTextColor(state)} ${textSize}`}>
              {value}
            </span>
          ) : (
            <span className="text-base-40 italic">{placeholder}</span>
          )}
        </div>

        {showClearIcon && state !== "disabled" && (
          <Trash2 className={`${iconSize} text-base-40 cursor-pointer`} />
        )}

        {showRightIcon && (
          <div className={`relative ${iconSize}`}>
            <div className="w-full h-full bg-base-40 rounded-full" />
          </div>
        )}
      </div>

      {showHelperText && (
        <p className={`text-xs ${getHelperTextColor(state)}`}>{helperText}</p>
      )}
    </div>
  );
}

export default InputField;
