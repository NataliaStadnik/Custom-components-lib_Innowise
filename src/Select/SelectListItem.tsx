import React from 'react';
import { FC } from 'react';

interface SelectListItemProps {
  labelClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  currentValue: string;
  label: string;
  value: string;
}

const SelectListItem: FC<SelectListItemProps> = ({ label, labelClick, currentValue, value }) => {
  return (
    <li
      // key={value}
      className="li-reset"
      tabIndex={-1}
      // key={value}
      // onClick={(e) => labelClick(e)}
      // aria-selected={value === currentValue}
      // role="option"
      // className={`select-list__item state-${value === currentValue}`}
      // data-value={value}
      // ref={liRef}
    >
      {/* {label} */}
      <button
        onClick={(e) => labelClick(e)}
        aria-selected={value === currentValue}
        role="option"
        className={`reset select-list__item state-${value === currentValue}`}
        data-value={value}
        // tabIndex={value === values ? 0 : -1}
        // tabIndex={-1}
      >
        {label}
      </button>
    </li>
  );
};

export default SelectListItem;
