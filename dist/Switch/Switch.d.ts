import { FC } from 'react';
import './style.css';
import { CheckBoxCommon } from '../interfaces';
interface SwitchProps extends CheckBoxCommon {
    size?: 'small' | 'medium';
}
declare const Switch: FC<SwitchProps>;
export default Switch;
