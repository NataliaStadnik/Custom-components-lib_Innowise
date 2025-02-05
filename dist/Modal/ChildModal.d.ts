import { FC } from 'react';
interface ChildModalProps {
    title?: string;
    descr?: string;
    updateState: () => void;
}
declare const ChildModal: FC<ChildModalProps>;
export default ChildModal;
