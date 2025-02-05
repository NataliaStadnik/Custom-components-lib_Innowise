import './style.css';
import { FC } from 'react';
import React from 'react';
export interface ModalProps {
    title?: string;
    descr?: string;
    childTitle?: string;
    childDescr?: string;
    children?: React.ReactNode;
    onClose?: (a: boolean) => void;
    open?: boolean;
}
declare const Modal: FC<ModalProps>;
export default Modal;
