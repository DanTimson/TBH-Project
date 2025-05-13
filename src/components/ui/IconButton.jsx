import { Button } from "./Button";
import React from "react";

const buttonData = {
  sizes: {
    small: {
      width: "w-10 h-10",
      innerSize: "w-6 h-6",
      dotSize: "w-3 h-3",
      dotPosition: "top-1.5 left-1.5",
      margin: "ml-[-4.00px] mr-[-4.00px]",
      rounded: "rounded-md",
    },
    medium: {
      width: "w-[52px] h-[52px]",
      innerSize: "w-8 h-8",
      dotSize: "w-4 h-4",
      dotPosition: "top-2 left-2",
      margin: "ml-[-2.00px] mr-[-2.00px]",
      rounded: "rounded-lg",
    },
    large: {
      width: "w-16 h-16",
      innerSize: "w-8 h-8",
      dotSize: "w-4 h-4",
      dotPosition: "top-2 left-2",
      margin: "",
      rounded: "rounded-lg",
    },
  },
  colorSets: [
    {
      filled: ["bg-[#6d81d8]", "bg-[#415aa9]", "bg-base-20"],
      outlined: ["border-[#6d81d8]", "border-[#415aa9]", "border-base-20"],
      ghost: ["", "bg-[#f2f3ff]", ""],
      dotColors: {
        filled: ["bg-base-0", "bg-base-0", "bg-base-0"],
        outlined: ["bg-[#6d81d8]", "bg-[#415aa9]", "bg-base-20"],
        ghost: ["bg-[#6d81d8]", "bg-[#415aa9]", "bg-base-20"],
      },
    },
    {
      filled: ["bg-[#369672]", "bg-[#006c4c]", "bg-base-20"],
      outlined: ["border-[#369672]", "border-[#006c4c]", "border-base-20"],
      ghost: ["", "bg-[#ebf6f1]", ""],
      dotColors: {
        filled: ["bg-base-0", "bg-base-0", "bg-base-0"],
        outlined: ["bg-[#369672]", "bg-[#006c4c]", "bg-base-20"],
        ghost: ["bg-[#369672]", "bg-[#006c4c]", "bg-base-20"],
      },
    },
    {
      filled: ["bg-[#00000080]", "bg-[#000000bf]", "bg-[#00000040]"],
      outlined: [],
      ghost: [],
      dotColors: {
        filled: ["bg-base-0", "bg-base-0", "bg-base-0"],
        outlined: [],
        ghost: [],
      },
    },
  ],
};

export default function IconButton({
  size = "medium",
  variant = "filled", // 'filled' | 'outlined' | 'ghost'
  colorSet = 0, // 0 - blue, 1 - green, 2 - black
  styleIndex = 0, // 0 | 1 | 2 (light, dark, etc.)
}) {
  const sizeStyles = buttonData.sizes[size];
  const colors = buttonData.colorSets[colorSet];

  const outerStyle =
    variant === "outlined"
      ? `${colors.outlined[styleIndex]} border border-solid bg-transparent`
      : colors[variant][styleIndex];

  const dotColor = colors.dotColors[variant][styleIndex];

  return (
    <Button
      variant={variant === "outlined" ? "outline" : "ghost"}
      className={`${sizeStyles.width} ${outerStyle} flex items-center justify-center gap-2 px-3 py-2 overflow-hidden h-auto`}
    >
      <div className={`relative ${sizeStyles.innerSize} ${sizeStyles.margin}`}>
        <div
          className={`relative ${sizeStyles.dotSize} ${sizeStyles.dotPosition} ${dotColor} ${sizeStyles.rounded}`}
        />
      </div>
    </Button>
  );
}
