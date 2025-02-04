import { forwardRef, JSX, useEffect, useId, useRef } from 'react';
import './style.css';
import { TextFieldTypes, TextFieldVariants } from '../interfaces';
import React from 'react';

interface TextFieldProps {
  variant?: TextFieldVariants;
  size?: 'small' | 'medium';
  type?: TextFieldTypes;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  helperText?: string;
  values?: string;
  error?: boolean;
  children?: JSX.Element;
  onChange?: (a: string) => void;
  classes?: string;
  autoFocus?: boolean;
  placeHolder?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(props, inputRef) {
  const {
    variant = 'outlined',
    size = 'medium',
    label,
    disabled,
    readonly,
    type = 'text',
    required,
    helperText,
    values = '',
    error,
    children,
    onChange,
    classes = '',
    autoFocus,
    placeHolder,
  } = props;

  const inputID = useId();
  const ref = useRef<HTMLLabelElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    const label = ref.current;

    if (values.trim().length > 0 && !label?.classList.contains(`set-label-${variant}`)) {
      label?.classList.add(`set-label-${variant}`);
    } else if (values.trim().length === 0 && label?.classList.contains(`set-label-${variant}`)) {
      label?.classList.remove(`set-label-${variant}`);
    }
    if (error) {
      label?.classList.add('error');
    }
  }, [error, values, variant]);

  return (
    <>
      <fieldset className={`textfield textfield-${size}`}>
        <div data-testid="textfield-wrap" className={`sizes textfield-${size}-size`}>
          <input
            data-testid="TextField"
            value={values}
            className={`textfield-input textfield-input-${variant} textfield-input-${size} ${
              error ? `error-input-${variant}` : ''
            } ${classes}`}
            type={type}
            name={label}
            id={inputID}
            onChange={handleChange}
            disabled={disabled}
            readOnly={readonly}
            required={required}
            autoFocus={autoFocus}
            placeholder={placeHolder}
            ref={inputRef}
          />

          <label
            data-testid="TextField-label"
            ref={ref}
            className={`textfield-label textfield-label-${variant} textfield-label-${size} ${variant}-${size}`}
            htmlFor={inputID}>
            {label}
            {required && '*'}
          </label>
          {children}

          {helperText && (
            <span data-testid="help-text" className={`helper-text ${error ? 'error' : ''}`}>
              {helperText}
            </span>
          )}
        </div>
      </fieldset>
    </>
  );
});

export default TextField;
