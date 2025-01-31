import { FC, JSX } from 'react';
import './style.css';
import { Options } from '../interfaces';
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
declare const Select: FC<SelectProps>;
export default Select;
