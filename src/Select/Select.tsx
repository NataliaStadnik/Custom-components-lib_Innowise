import { forwardRef, JSX, useEffect, useRef, useState } from 'react';
import './style.css';
import Icon from './Icon';
import { Options } from '../interfaces';
import SelectListItem from './SelectListItem';
import React from 'react';

interface SelectProps {
  label?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  helperText?: string;
  defaultValue?: string;
  error?: boolean;
  children?: JSX.Element;
  onChange?: () => void;
  classes?: object;
  autoFocus?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  options: Array<Options>;
  id?: string;
}

const Select = forwardRef<HTMLInputElement, SelectProps>(function Select(props, inputRef) {
  const {
    label,
    options,
    disabled,
    required,
    readonly,
    helperText,
    defaultValue,
    error,
    children,
    onChange,
    classes,
    autoFocus,
    id,
  } = props;

  const ref = useRef<HTMLLabelElement>(null);
  const [isOpen, setOpen] = useState(false);
  const [values, setValues] = useState(defaultValue || '');
  const [text, setText] = useState('');

  const labelClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    setValues(target.dataset.value || '');
    setText(target.textContent || '');
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (onChange) {
      onChange();
    }
  }, [onChange]);

  useEffect(() => {
    const label = ref.current;

    if (values.trim().length > 0 && !label?.classList.contains('inset-label')) {
      label?.classList.add('inset-label');
    } else if (values.trim().length === 0 && label?.classList.contains('inset-label')) {
      label?.classList.remove('inset-label');
    }
    if (error) {
      label?.classList.add('error');
    }
  }, [error, values]);

  useEffect(() => {
    if (defaultValue) {
      options.map(({ value, label }) => {
        if (value === values) {
          setText(label);
        }
      });
    }
  }, [defaultValue, options, values]);

  const openModal = () => {
    if (!readonly) {
      setOpen(!isOpen);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setOpen(!isOpen);
      e.preventDefault();
    }
  };

  return (
    <form data-testid="form" id={id} className={`reset select-wrap`}>
      <div data-testid="select-wrap" className={`select-medium`}>
        <input
          data-testid="select"
          value={values}
          onChange={(e) => setValues(e.target.value)}
          onClick={openModal}
          onKeyDown={(e) => handleKeyDown(e)}
          className={`reset select-input ${error ? `error-input-select` : ''}`}
          role="combobox"
          aria-controls="listbox"
          aria-haspopup="listbox"
          autoFocus={autoFocus}
          style={classes}
          disabled={disabled}
          readOnly={readonly}
          required={required}
          ref={inputRef}
          tabIndex={0}
        />

        <label data-testid="select-label" ref={ref} className={`reset select-label`}>
          {label}
          {required && '*'}
        </label>
        {text && (
          <span data-testid="curr-value" className="curr-value">
            {text}
          </span>
        )}

        {children}

        {helperText && (
          <span data-testid="help-text" className={`helper-text ${error ? 'helper-error' : ''}`}>
            {helperText}
          </span>
        )}

        <Icon state={isOpen} />
      </div>
      {isOpen && (
        <ul role="listbox" className="reset select-list">
          {options.map(({ value, label }) => (
            <SelectListItem
              key={value}
              currentValue={values}
              value={value}
              label={label}
              labelClick={labelClick}
            />
          ))}
        </ul>
      )}
    </form>
  );
});

export default Select;
