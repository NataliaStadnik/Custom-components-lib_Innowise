import { FC } from 'react';

interface ModalViewProps {
  checkbox: boolean;
  switchs: boolean;
  textfield: string;
  select: string;
  modal: boolean;
}

const ModalView: FC<ModalViewProps> = ({ checkbox, switchs, textfield, select, modal }) => {
  return (
    <div>
      <div>
        <span>Checkbox state: </span>
        <span>{String(checkbox)}</span>
      </div>
      <div>
        <span>Switch state: </span>
        <span>{String(switchs)}</span>
      </div>
      <div>
        <span>TextField state:</span>
        <span>{textfield}</span>
      </div>
      <div>
        <span>Select State: </span>
        <span>{select}</span>
      </div>
      <div>
        <span>Modal state: </span>
        <span>{String(modal)}</span>
      </div>
    </div>
  );
};

export default ModalView;
