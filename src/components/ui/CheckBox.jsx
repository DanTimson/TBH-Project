import React from "react";
import PropTypes from "prop-types";

const CheckBox = ({ checked = false, disabled = false, label = "Option" }) => {
  const getIcon = () => {
    if (checked) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM19 5V19H5V5H19ZM10 17L6 13L7.41 11.58L10 14.17L16.59 7.58L18 9"
            fill={disabled ? "var(--base-30)" : "var(--green-50)"}
          />
        </svg>
      );
    } else {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 3.89 20.1 3 19 3ZM19 5V19H5V5H19Z"
            fill={disabled ? "var(--base-30)" : "var(--base-50)"}
          />
        </svg>
      );
    }
  };

  return (
    <div className="flex justify-start items-center gap-1 flex-wrap content-center cursor-default">
      <div className="relative">{getIcon()}</div>
      <div
        className="text-sm font-normal font-['Lato'] justify-center"
        style={{ color: disabled ? 'var(--base-50)' : 'var(--base-80)' }}
      >
        {label}
      </div>
    </div>
  );
};

CheckBox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

export default CheckBox;

