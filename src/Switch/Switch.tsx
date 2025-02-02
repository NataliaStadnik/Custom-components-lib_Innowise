import { forwardRef, useEffect, useState } from 'react';
import './style.css';
import { CheckBoxCommon } from '../interfaces';
import React from 'react';

interface SwitchProps extends CheckBoxCommon {
  size?: 'small' | 'medium';
  checked?: boolean;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(props, inputRef) {
  const {
    label,
    defaultChecked,
    disabled,
    size = 'medium',
    onChange,
    id,
    classes,
    required,
    checked,
  } = props;

  const [isChecked, setIsChecked] = useState(defaultChecked || checked);

  const innerHandleChange = () => {
    if (checked) {
      return;
    }
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (onChange) {
      onChange();
    }
  }, [onChange]);

  return (
    <label className="reset switch-root">
      <div data-testid="switch-style" style={classes} className="reset switch">
        <input
          name={label}
          className={`reset switch-input ${checked ? 'checked' : ''}`}
          type="checkbox"
          defaultChecked={isChecked}
          disabled={disabled}
          onChange={innerHandleChange}
          id={id}
          ref={inputRef}
          required={required}
        />
        <span data-testid="track" className={`reset switch-track track-${size}`}></span>
        <span data-testid="thumb" className={`reset switch-thumb thumb-${size}`}></span>
      </div>
      {label && (
        <span data-testid="label" className="reset switch-label">
          {label}
          {required && '*'}
        </span>
      )}
    </label>
  );
});

export default Switch;
