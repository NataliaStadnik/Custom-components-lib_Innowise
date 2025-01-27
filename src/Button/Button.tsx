import { FC, HTMLAttributes } from 'react';
import './style.css';
import React from 'react';

type Sizes = 'small' | 'medium' | 'large';

type Variants = 'contained' | 'text' | 'outlined';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: Sizes;
  variant?: Variants;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

const Button: FC<ButtonProps> = ({
  size = 'medium',
  variant = 'contained',
  disabled,
  href,
  onClick,
  children,
}) => {
  if (href) {
    return (
      <a
        className={`reset button-root button-${variant} button-${size}`}
        href={href}
        onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={`reset button-root button-${variant} button-${size}`}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
