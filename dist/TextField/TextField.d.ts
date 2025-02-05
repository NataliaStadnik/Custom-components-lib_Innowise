import { JSX } from 'react';
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
declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
export default TextField;
