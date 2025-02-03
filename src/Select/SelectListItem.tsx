import React from 'react';
import { FC } from 'react';

interface SelectListItemProps {
  labelClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  currentValue: string;
  label: string;
  value: string;
  classNew: string;
}

const SelectListItem: FC<SelectListItemProps> = ({
  label,
  labelClick,
  currentValue,
  value,
  classNew,
}) => {
  return (
    <li
      tabIndex={-1}
      onClick={(e) => labelClick(e)}
      aria-selected={value === currentValue}
      role="option"
      className={`select-list__item state-${value === currentValue} ${classNew}`}
      data-value={value}
      data-testid={value}>
      {label}
    </li>
  );
};

export default SelectListItem;
