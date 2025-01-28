import { FC, useState } from 'react';
import './style.css';
import { Sizes } from '../interfaces';
import React from 'react';

interface CheckboxProps {
  label?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  checked?: boolean;
  size?: Sizes;
  onChange?: () => void;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  disabled,
  defaultChecked,
  checked,
  size = 'medium',
  onChange,
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
          />
          <span className="reset checkmark"></span>
        </div>
        {label && <span className="reset checkbox-label">{label}</span>}
      </label>
    </>
  );
};

export default Checkbox;
