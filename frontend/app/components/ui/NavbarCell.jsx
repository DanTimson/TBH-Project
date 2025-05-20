import React from "react";
import PropTypes from "prop-types";

const colorMap = {
  "enabled": {
    outline: "outline-blue-50",
    text: "text-blue-50",
  },
  "disabled": {
    outline: "outline-base-30",
    text: "text-base-30",
  },
};

const DEFAULT_COLOR = "enabled";

const NavbarCell = ({ 
  Icon, 
  isActive, 
  label, 
  colorVariant = DEFAULT_COLOR,
  onClick,
}) => {
  const colors = colorMap[colorVariant] || colorMap[DEFAULT_COLOR];
  
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center p-6 rounded-[20px] transition-all duration-200 ease-in-out ${
        isActive
          ? "bg-blue-50 shadow-md"
          : `bg-white outline outline-4 outline-offset-[-4px] ${colors.outline} hover:outline-offset-[-2px]`
      } hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-300`}
      aria-label={label}
    >
      <Icon 
        className={`w-8 h-8 ${isActive ? "text-white" : colors.text}`} 
        aria-hidden="true"
        strokeWidth={1.5}
      />
    </button>
  );
};

NavbarCell.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  isActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  colorVariant: PropTypes.oneOf(Object.keys(colorMap)),
  onClick: PropTypes.func,
};

export default NavbarCell;