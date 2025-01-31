import { FC, useState } from 'react';
import './style.css';
import { CheckBoxCommon, Sizes } from '../interfaces';
import React from 'react';

interface CheckboxProps extends CheckBoxCommon {
  checked?: boolean;
  size?: Sizes;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  disabled,
  defaultChecked,
  checked,
  size = 'medium',
  onChange,
  id,
  classes,
  inputRef,
  required,
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const innerHandleChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange();
    }
  };
  return (
    <>
      <label className="reset checkbox-wrap">
        <div className={`reset checkbox-root checkbox-${size}`}>
          <input
            className="reset checkbox-input"
            type="checkbox"
            name={label}
            defaultChecked={isChecked}
            checked={checked}
            disabled={disabled}
            readOnly={checked || disabled}
            onChange={innerHandleChange}
            style={classes}
            id={id}
            ref={inputRef}
            required={required}
          />
          <span className="reset checkmark"></span>
        </div>
        {label && (
          <span className="reset checkbox-label">
            {label}
            {required && '*'}
          </span>
        )}
      </label>
    </>
  );
};

export default Checkbox;
