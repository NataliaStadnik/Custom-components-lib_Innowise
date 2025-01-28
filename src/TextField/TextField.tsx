import { FC, JSX, useEffect, useId, useRef, useState } from 'react';
import './style.css';
import { TextFieldTypes, TextFieldVariants, TwoSizes } from '../interfaces';
import React from 'react';

interface TextFieldProps {
  variant?: TextFieldVariants;
  size?: TwoSizes;
  type?: TextFieldTypes;
  label: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  helperText?: string;
  defaultValue?: string;
  error?: boolean;
  children?: JSX.Element;
  handleAction?: () => void;
  classes?: object;
  autoFocus?: boolean;
  placeHolder?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

const TextField: FC<TextFieldProps> = ({
  variant = 'outlined',
  size = 'medium',
  label,
  disabled,
  readonly,
  type,
  required,
  helperText,
  defaultValue = '',
  error,
  children,
  handleAction,
  classes,
  autoFocus,
  placeHolder,
  inputRef,
}) => {
  const inputID = useId();
  const [values, setValues] = useState(defaultValue);
  const ref = useRef<HTMLLabelElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(e.target.value);
  };

  useEffect(() => {
    checkClasses();
  });

  const checkClasses = () => {
    const label = ref.current;

    if (values.trim().length > 0 && !label?.classList.contains(`set-label-${variant}`)) {
      label?.classList.add(`set-label-${variant}`);
    } else if (values.trim().length === 0 && label?.classList.contains(`set-label-${variant}`)) {
      label?.classList.remove(`set-label-${variant}`);
    }
    if (error) {
      label?.classList.add('error');
    }
  };

  return (
    <>
      <fieldset className={`reset textfield-${size}`}>
        <input
          value={values}
          className={`reset textfield-input textfield-input-${variant} textfield-input-${size} ${
            error ? `error-input-${variant}` : ''
          }`}
          type={type}
          name={label}
          id={inputID}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readonly}
          required={required}
          onClick={handleAction}
          style={classes}
          autoFocus={autoFocus}
          placeholder={placeHolder}
          ref={inputRef}
        />

        <label
          ref={ref}
          className={`reset textfield-label textfield-label-${variant} textfield-label-${size} ${variant}-${size}`}
          htmlFor={inputID}>
          {label}
        </label>
        {children}

        {helperText && <span className={`helper-text ${error ? 'error' : ''}`}>{helperText}</span>}
      </fieldset>
    </>
  );
};

export default TextField;
