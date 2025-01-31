import { FC } from 'react';
import './style.css';
import { CheckBoxCommon, TwoSizes } from '../interfaces';
interface SwitchProps extends CheckBoxCommon {
    size?: TwoSizes;
}
declare const Switch: FC<SwitchProps>;
export default Switch;
