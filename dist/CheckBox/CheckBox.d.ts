import { FC } from 'react';
import './style.css';
import { CheckBoxCommon, Sizes } from '../interfaces';
interface CheckboxProps extends CheckBoxCommon {
    checked?: boolean;
    size?: Sizes;
}
declare const Checkbox: FC<CheckboxProps>;
export default Checkbox;
