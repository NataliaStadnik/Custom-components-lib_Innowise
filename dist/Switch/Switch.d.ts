import './style.css';
import { CheckBoxCommon } from '../interfaces';
import React from 'react';
interface SwitchProps extends CheckBoxCommon {
    size?: 'small' | 'medium';
    checked?: boolean;
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export default Switch;
