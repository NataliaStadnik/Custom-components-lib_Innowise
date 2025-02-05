import './style.css';
import { CheckBoxCommon, Sizes } from '../interfaces';
import React from 'react';
interface CheckboxProps extends CheckBoxCommon {
    checked?: boolean;
    size?: Sizes;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
