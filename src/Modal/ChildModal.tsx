import { FC, useState } from 'react';
import Button from '../Button/Button';
import React from 'react';

interface ChildModalProps {
  title?: string;
  descr?: string;
  updateState: () => void;
}

const ChildModal: FC<ChildModalProps> = ({ title, descr, updateState }) => {
  const [isOpen, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(false);
    updateState();
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'child-modal') {
      handleClick();
    }
  };

  if (isOpen) {
    return (
      <div id="child-modal" className="backdrop" onClick={(e) => handleClose(e)}>
        <div className="modal modal-child">
          {title && <h2 className="modal-title">{title}</h2>}
          {descr && <p className="modal-text">{descr}</p>}
          <Button onClick={handleClick} variant="text" classes={{ width: '100%' }}>
            Close child modal
          </Button>
        </div>
      </div>
    );
  }
};

export default ChildModal;
