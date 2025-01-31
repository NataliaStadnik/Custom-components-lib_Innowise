import { FC, JSX } from 'react';
import './style.css';
import { TextFieldTypes, TextFieldVariants } from '../interfaces';
import React from 'react';
interface TextFieldProps {
    variant?: TextFieldVariants;
    size?: 'small' | 'medium';
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
declare const TextField: FC<TextFieldProps>;
export default TextField;
