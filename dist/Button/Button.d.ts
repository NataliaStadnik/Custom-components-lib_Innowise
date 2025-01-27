import React, { FC } from 'react';
import './style.css';
interface ButtonProps {
    color: string;
    children?: React.ReactNode;
}
declare const Button: FC<ButtonProps>;
export default Button;
