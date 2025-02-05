import React from 'react';
import { FC } from 'react';

interface IconProps {
  state: boolean;
}

const Icon: FC<IconProps> = ({ state }) => {
  return (
    <svg
      className={`select-svg ${state ? 'select-svg-rotate' : ''}`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24">
      <path d="M7 10l5 5 5-5z"></path>
    </svg>
  );
};

export default Icon;
