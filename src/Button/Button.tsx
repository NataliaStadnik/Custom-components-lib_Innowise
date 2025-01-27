import React, { FC } from 'react';
import './style.css';

interface ButtonProps {
  color: string;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, color, ...props }) => {
  return (
    <button {...props} style={{ color }}>
      {children}
    </button>
  );
};

export default Button;
