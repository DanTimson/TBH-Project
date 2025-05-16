import React from "react";

const NavbarCell = ({ Icon, isActive, label, inactiveColor = "#6D81D8" }) => {
  // Convert color props to proper Tailwind classes
  const getOutlineColor = () => {
    switch(inactiveColor) {
      case "#6D81D8": return "outline-blue-500";
      case "#C6C6C6": return "outline-gray-300";
      default: return "outline-blue-500";
    }
  };

  const getTextColor = () => {
    switch(inactiveColor) {
      case "#6D81D8": return "text-blue-500";
      case "#C6C6C6": return "text-gray-300";
      default: return "text-blue-500";
    }
  };

  return (
    <button
      className={`flex items-center justify-center p-6 rounded-[20px] transition-colors ${
        isActive
          ? "bg-indigo-500 outline-none"
          : `bg-white outline outline-4 outline-offset-[-4px] ${getOutlineColor()}`
      }`}
      aria-label={label}
    >
      <Icon 
        className={`w-8 h-8 ${isActive ? "text-white" : getTextColor()}`} 
        aria-hidden="true"
        strokeWidth={1.5} // Ensures consistent icon weight
      />
    </button>
  );
};

export default NavbarCell;