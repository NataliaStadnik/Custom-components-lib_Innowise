import { FC, HTMLAttributes } from 'react';
import './style.css';
import { Sizes, Variants } from '../interfaces';
import React from 'react';
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    size?: Sizes;
    variant?: Variants;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
    href?: string;
    classes?: string;
    id?: string;
    children?: string | React.ReactElement;
}
declare const Button: FC<ButtonProps>;
export default Button;
