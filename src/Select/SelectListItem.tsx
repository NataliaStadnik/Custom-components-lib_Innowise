import React from 'react';
import { FC } from 'react';

interface SelectListItemProps {
  labelClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  currentValue: string;
  label: string;
  value: string;
}

const SelectListItem: FC<SelectListItemProps> = ({ label, labelClick, currentValue, value }) => {
  return (
    <li
      tabIndex={-1}
      onClick={(e) => labelClick(e)}
      aria-selected={value === currentValue}
      role="option"
      className={`select-list__item state-${value === currentValue}`}
      data-value={value}
      data-testid={value}>
      {label}
    </li>
  );
};

export default SelectListItem;
