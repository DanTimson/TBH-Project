import React, { useState } from 'react';

const IconButton = ({
  type = 'primary',
  initialState = 'enabled',
  color = 'blue',
  size = 'm',
  icon = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="6" fill="currentColor"/>
    </svg>
  ),
  className = '',
  onClick,
  ...props
}) => {
  const [internalState, setInternalState] = useState(initialState);

  const handleClick = (e) => {
    if (internalState !== 'disabled') {
      setInternalState(prevState => 
        prevState === 'pressed' ? 'enabled' : 'pressed'
      );
    }
    if (onClick) onClick(e);
  };

  const getButtonClasses = () => {
    return [
      'icon-button',
      `icon-button--size-${size}`,
      `icon-button--${type}`,
      `icon-button--${color}-${type}-${internalState}`,
      className
    ].filter(Boolean).join(' ');
  };

  const getIconColor = () => {
    if (type === 'primary') return 'white';
    if (internalState === 'disabled') return 'var(--base-20)';
    
    if (color === 'blue') {
      return internalState === 'enabled' ? 'var(--blue-50)' : 'var(--blue-70)';
    } else if (color === 'green') {
      return internalState === 'enabled' ? 'var(--green-50)' : 'var(--green-70)';
    }
    
    return 'currentColor';
  };

  const getIconSize = () => {
    switch (size) {
      case 's': return 16;  // Small icon size
      case 'm': return 24;  // Medium icon size (default)
      case 'l': return 32;  // Large icon size
      default: return 24;   // Fallback to medium
    }
  };

  return (
    <button
      className={getButtonClasses()}
      disabled={internalState === 'disabled'}
      onClick={handleClick}
      {...props}
    >
      <div className="icon-button__icon">
        {React.cloneElement(icon, {
          width: getIconSize(),
          height: getIconSize(),
          fill: getIconColor(),
          color: getIconColor()
        })}
      </div>
    </button>
  );
};

export default IconButton;