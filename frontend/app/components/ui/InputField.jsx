import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  // Core props
  label = 'Label',
  value = '',
  placeholder = 'Placeholder...',
  onChange = () => {},
  
  // Variants
  state = 'enabled', // 'enabled' | 'active' | 'disabled' | 'error'
  type = 'filled',   // 'filled' | 'placeholder'
  size = 'm',        // 's' | 'm'
  
  // Boolean options
  showLeftIcon = false,
  showRightIcon = false,
  showClearButton = false,
  showHelperText = true,
  helperText = 'Helper text',
  
  // Custom icons
  leftIcon = (
    <div className="bg-base-40 rounded-full w-full h-full" />
  ),
  rightIcon = (
    <div className="bg-base-40 rounded-full w-full h-full" />
  ),
  
  className = '',
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const isDisabled = state === 'disabled';
  const isFilled = type === 'filled' && internalValue.length > 0;
  const isPlaceholder = type === 'placeholder' && !isFilled;

  const handleChange = (e) => {
    setInternalValue(e.target.value);
    onChange(e);
  };

  const handleClear = () => {
    setInternalValue('');
    onChange({ target: { value: '' } });
  };

  // Size classes
  const containerClasses = `input-container ${size === 's' ? 'input-s' : 'input-m'} ${className}`;
  const inputWrapperClasses = `input-wrapper ${state} ${type} ${size === 's' ? 'px-3 py-2 h-10' : 'px-4 py-3 h-12'}`;
  const labelClasses = `input-label ${size === 's' ? 'text-xs' : 'text-sm'}`;
  const textClasses = `input-text ${size === 's' ? 'text-sm' : 'text-base'}`;
  const helperClasses = `input-helper ${size === 's' ? 'text-xs' : 'text-sm'}`;
  const iconSize = size === 's' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <div className={containerClasses}>
      <div className={inputWrapperClasses}>
        {showLeftIcon && (
          <div className={`input-icon ${iconSize}`}>
            {leftIcon}
          </div>
        )}
        
        <div className="input-content">
          <label className={labelClasses}>
            {label}
          </label>
          
          {isPlaceholder ? (
            <span className="input-placeholder">
              {placeholder}
            </span>
          ) : (
            <input
              type="text"
              value={internalValue}
              onChange={handleChange}
              disabled={isDisabled}
              className={textClasses}
              style={{}} // Proper style object
              {...props}
            />
          )}
        </div>
        
        {showClearButton && isFilled && !isDisabled && (
          <button 
            className={`input-clear ${iconSize}`}
            onClick={handleClear}
            disabled={isDisabled}
            type="button"
          >
            <svg className="text-base-40" width="16" height="16" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        )}
        
        {showRightIcon && (
          <div className={`input-icon ${iconSize}`}>
            {rightIcon}
          </div>
        )}
      </div>
      
      {showHelperText && (
        <div className={`${helperClasses} ${state === 'error' ? 'text-red-500' : 'text-base-40'}`}>
          {helperText}
        </div>
      )}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  state: PropTypes.oneOf(['enabled', 'active', 'disabled', 'error']),
  type: PropTypes.oneOf(['filled', 'placeholder']),
  size: PropTypes.oneOf(['s', 'm']),
  showLeftIcon: PropTypes.bool,
  showRightIcon: PropTypes.bool,
  showClearButton: PropTypes.bool,
  showHelperText: PropTypes.bool,
  helperText: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
};

export default InputField;