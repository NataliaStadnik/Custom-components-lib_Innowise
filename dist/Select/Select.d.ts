import { JSX } from 'react';
import './style.css';
import { Options } from '../interfaces';
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
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLInputElement>>;
export default Select;
