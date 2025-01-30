import { FC, useState } from 'react';
import './style.css';
import { CheckBoxCommon, TwoSizes } from '../interfaces';
import React from 'react';

interface SwitchProps extends CheckBoxCommon {
  size?: TwoSizes;
}

const Switch: FC<SwitchProps> = ({
  label,
  defaultChecked,
  disabled,
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
    <label className="reset switch-root">
      <div className="reset switch">
        <input
          name={label}
          className="reset switch-input"
          type="checkbox"
          defaultChecked={isChecked}
          disabled={disabled}
          onChange={innerHandleChange}
          style={classes}
          id={id}
          ref={inputRef}
          required={required}
        />
        <span className={`reset switch-track track-${size}`}></span>
        <span className={`reset switch-thumb thumb-${size}`}></span>
      </div>
      {label && <span className="reset switch-label">{label}</span>}
    </label>
  );
};

export default Switch;
