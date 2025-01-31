import { FC, JSX, useEffect, useRef, useState } from 'react';
import './style.css';
import Icon from './Icon';
import { CheckBoxCommon, Options } from '../interfaces';
import SelectListItem from './SelectListItem';
import React from 'react';

interface SelectProps extends CheckBoxCommon {
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

const Select: FC<SelectProps> = ({
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
  inputRef,
  id,
}) => {
  const ref = useRef<HTMLLabelElement>(null);
  const [isOpen, setOpen] = useState(false);
  const [values, setValues] = useState(defaultValue || '');
  const [text, setText] = useState('');

  const labelClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    setValues(target.dataset.value || '');
    setText(target.textContent || '');
    setOpen(!isOpen);
    if (onChange) {
      onChange();
    }
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
  });

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

  // useEffect(() => {
  //   let index = 0;
  //   if (isOpen) {
  //     document.addEventListener("keydown", (e) => {
  //       const ul = document.querySelectorAll(".select-list__item");

  //       console.log(ul[0]);
  //       if (e.key === "ArrowDown") {
  //         ul[index].classList.add("focus");
  //         index++;
  //       }

  //       if (e.key === "ArrowUp") {
  //         --index;
  //         ul[index].classList.add("focus");
  //       }
  //     });
  //   }
  // });

  return (
    <form id={id} className={`reset select-wrap`}>
      <div className={`select-medium`}>
        <input
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

        <label ref={ref} className={`reset select-label`}>
          {label}
          {required && '*'}
        </label>
        {text && <span className="curr-value">{text}</span>}

        {children}

        {helperText && (
          <span className={`helper-text ${error ? 'helper-error' : ''}`}>{helperText}</span>
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
};

export default Select;
