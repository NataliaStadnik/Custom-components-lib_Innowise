import React from 'react';
import { FC } from 'react';

interface SelectListItemProps {
  labelClick: (val: string, label: string) => void;
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
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const elem = e.target as HTMLLIElement;
    const val = elem.dataset.value || '';
    const label = elem.textContent || '';
    labelClick(val, label);
  };

  return (
    <li
      tabIndex={-1}
      onClick={handleClick}
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
