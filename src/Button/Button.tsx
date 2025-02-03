import { FC, HTMLAttributes } from 'react';
import './style.css';
import { Sizes, Variants } from '../interfaces';
import React from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: Sizes;
  variant?: Variants;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  classes?: object;
  id?: string;
  children?: string | React.ReactElement;
}

const Button: FC<ButtonProps> = ({
  size = 'medium',
  variant = 'contained',
  disabled,
  href,
  onClick,
  children,
  classes,
  id,
}) => {
  if (href) {
    return (
      <a
        className={`button-root button-${variant} button-${size}`}
        href={href}
        onClick={onClick}
        style={classes}
        id={id}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={`button-root button-${variant} button-${size}`}
      disabled={disabled}
      onClick={onClick}
      style={classes}
      id={id}>
      {children}
    </button>
  );
};

export default Button;
