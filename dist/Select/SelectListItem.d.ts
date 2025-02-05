import { FC } from 'react';
interface SelectListItemProps {
    labelClick: (val: string, label: string) => void;
    currentValue: string;
    label: string;
    value: string;
    classNew: string;
}
declare const SelectListItem: FC<SelectListItemProps>;
export default SelectListItem;
