import './style.css';
import { FC, useState } from 'react';
import Button from '../Button/Button';
import { createPortal } from 'react-dom';
import ChildModal from './ChildModal';
import React from 'react';

export interface ModalProps {
  title?: string;
  descr?: string;
  childTitle?: string;
  childDescr?: string;
  children?: React.ReactNode;
  onClose?: () => void;
  open?: boolean;
}

const Modal: FC<ModalProps> = ({
  title,
  descr,
  childTitle,
  childDescr,
  open,
  children,
  onClose,
}) => {
  const [isOpen, setOpen] = useState(open);
  const [isChildOpen, setChild] = useState(false);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'parent-modal') {
      if (onClose) {
        onClose();
      }
      setOpen(!isOpen);
    }
  };

  const handleChildUpdate = () => {
    setChild(!isChildOpen);
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <div id="parent-modal" className="backdrop" onClick={(e) => handleClose(e)}>
            <div className="modal">
              {title && <h2 className="modal-title">{title}</h2>}
              {descr && <p className="modal-text">{descr}</p>}
              {children}

              {(childTitle || childDescr) && (
                <Button onClick={handleChildUpdate} variant="text" size="large">
                  Open child modal
                </Button>
              )}

              {isChildOpen &&
                createPortal(
                  <ChildModal
                    title={childTitle}
                    descr={childDescr}
                    updateState={handleChildUpdate}
                  />,
                  document.body,
                )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Modal;
