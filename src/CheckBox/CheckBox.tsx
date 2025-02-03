import { forwardRef, useEffect, useState } from 'react';
import './style.css';
import { CheckBoxCommon, Sizes } from '../interfaces';
import React from 'react';

interface CheckboxProps extends CheckBoxCommon {
  checked?: boolean;
  size?: Sizes;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(props, inputRef) {
  const {
    label,
    disabled,
    defaultChecked,
    checked,
    size = 'medium',
    onChange,
    id,
    classes,
    required,
  } = props;
  const [isChecked, setIsChecked] = useState(defaultChecked || checked);

  const handleChange = () => {
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
    <>
      <label className="checkbox-wrap">
        <div data-testid="checkbox-size" className={`checkbox-root checkbox-${size}`}>
          <input
            className={`checkbox-input ${checked ? 'checked' : ''}`}
            type="checkbox"
            name={label}
            defaultChecked={isChecked}
            disabled={disabled}
            readOnly={disabled}
            onChange={handleChange}
            id={id}
            ref={inputRef}
            required={required}
          />
          <span data-testid="checkbox-style" style={classes} className="checkmark"></span>
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
