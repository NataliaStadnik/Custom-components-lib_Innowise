import { ChangeEvent, forwardRef } from 'react';
import './style.css';
import { CheckBoxCommon } from '../interfaces';
import React from 'react';

interface SwitchProps extends CheckBoxCommon {
  size?: 'small' | 'medium';
  checked?: boolean;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(props, inputRef) {
  const { label, disabled, size = 'medium', onChange, id, classes = '', required, checked } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <label className="switch-root">
      <div data-testid="switch-style" className={`switch ${classes}`}>
        <input
          name={label}
          className={`switch-input ${checked ? 'checked' : ''}`}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          id={id}
          ref={inputRef}
          required={required}
        />
        <span data-testid="track" className={`switch-track track-${size}`}></span>
        <span data-testid="thumb" className={`switch-thumb thumb-${size}`}></span>
      </div>
      {label && (
        <span data-testid="label" className="switch-label">
          {label}
          {required && '*'}
        </span>
      )}
    </label>
  );
});

export default Switch;
