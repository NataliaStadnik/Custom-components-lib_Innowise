import React, { FC } from 'react';
import './style.css';
interface MyButtonProps {
    color: string;
    children?: React.ReactNode;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
