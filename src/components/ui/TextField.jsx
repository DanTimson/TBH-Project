import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const TextField = ({ text, variant = "filled" }) => {
  const baseClasses = "h-9 px-3 py-2 rounded-sm flex justify-center items-center gap-2.5 overflow-hidden";

  const variantClasses = {
    filled: "bg-var(--green-50) text-var(--base-0)",
    outlined: "outline outline-1 outline -offset-[-1px] outline-var(--green-50) text-var(--base-80)",
    transparent: "text-var(--base-80)",
  };

  return (
    <div
      className={clsx(
        baseClasses,
        variantClasses[variant]
      )}
    >
      <div className="text-center justify-center text-base font-normal font-['Lato']">
        {text}
      </div>
    </div>
  );
};

TextField.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["filled", "outlined", "transparent"]),
};

export default TextField;

