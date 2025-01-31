import React from 'react';
import { FC } from 'react';
interface SelectListItemProps {
    labelClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    currentValue: string;
    label: string;
    value: string;
}
declare const SelectListItem: FC<SelectListItemProps>;
export default SelectListItem;
