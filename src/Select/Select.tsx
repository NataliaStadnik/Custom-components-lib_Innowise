import { ChangeEvent, forwardRef, JSX, useEffect, useRef, useState } from 'react';
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
  selectedItem?: string;
  error?: boolean;
  children?: JSX.Element;
  onChange?: (a: string) => void;
  classes?: string;
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
    selectedItem = '',
    error,
    children,
    onChange,
    classes = '',
    autoFocus,
    id,
  } = props;

  const ref = useRef<HTMLLabelElement>(null);
  const [isOpen, setOpen] = useState(false);
  const [values, setValues] = useState(selectedItem);
  const [text, setText] = useState('');
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);

  const labelClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent> | ChangeEvent<HTMLInputElement>,
  ) => {
    const target = e.target as HTMLButtonElement;
    setValues(target.dataset.value || '');
    setText(target.textContent || '');
    setOpen(!isOpen);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    labelClick(e);
  };

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
    if (selectedItem) {
      options.map(({ value, label }) => {
        if (value === values) {
          setText(label);
        }
      });
    }
  }, [selectedItem, options, values]);

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

    if (e.key === 'Enter' && focusedOptionIndex >= 0) {
      e.preventDefault();
      setFocusedOptionIndex(-1);
      setValues(options[focusedOptionIndex].value);
      setText(options[focusedOptionIndex].label);
      setOpen(!isOpen);
    }

    if (e.key === 'ArrowDown') {
      setFocusedOptionIndex((prevIndex) => (prevIndex + 1) % options.length);
    }

    if (e.key === 'ArrowUp') {
      setFocusedOptionIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
    }
  };

  return (
    <form data-testid="form" id={id} className={`select-wrap`}>
      <div data-testid="select-wrap" className={`select-medium ${classes}`}>
        <input
          data-testid="select"
          value={values}
          onChange={handleChange}
          onClick={openModal}
          onKeyDown={(e) => handleKeyDown(e)}
          className={`select-input ${error ? `error-input-select` : ''}`}
          role="combobox"
          aria-controls="listbox"
          aria-haspopup="listbox"
          autoFocus={autoFocus}
          disabled={disabled}
          readOnly={readonly}
          required={required}
          ref={inputRef}
          tabIndex={0}
        />

        <label data-testid="select-label" ref={ref} className={`select-label`}>
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
        <ul role="listbox" className="select-list">
          {options.map(({ value, label }, index) => (
            <SelectListItem
              key={value}
              currentValue={values}
              value={value}
              label={label}
              labelClick={labelClick}
              classNew={index === focusedOptionIndex ? 'focus' : ''}
            />
          ))}
        </ul>
      )}
    </form>
  );
});

export default Select;
