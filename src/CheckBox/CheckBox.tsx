import { ChangeEvent, forwardRef } from 'react';
import './style.css';
import { CheckBoxCommon, Sizes } from '../interfaces';
import React from 'react';

interface CheckboxProps extends CheckBoxCommon {
  checked?: boolean;
  size?: Sizes;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(props, inputRef) {
  const { label, disabled, checked, size = 'medium', onChange, id, classes = '', required } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <>
      <label className="checkbox-wrap">
        <div data-testid="checkbox-size" className={`checkbox-root checkbox-${size}`}>
          <input
            className={`checkbox-input ${checked ? 'checked' : ''}`}
            type="checkbox"
            name={label}
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            readOnly={disabled}
            id={id}
            ref={inputRef}
            required={required}
          />
          <span data-testid="checkbox-style" className={`checkmark ${classes}`}></span>
        </div>
        {label && (
          <span data-testid="label" className="checkbox-label">
            {label}
            {required && '*'}
          </span>
        )}
      </label>
    </>
  );
});

export default Checkbox;
