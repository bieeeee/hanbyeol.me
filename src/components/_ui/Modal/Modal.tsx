import React, { useState } from "react";
import { CloseBtn, IconBtn } from "@components";
import { modalStore } from "@/stores/modalStore";
import "./Modal.scss";

interface ModalProps {
  title: string;
  defaultOpen?: boolean;
  triggerImg?: string;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  defaultOpen,
  triggerImg,
  onClose,
  children
}) => {
  const [open, setOpen] = useState(defaultOpen ?? false);
  const triggerIcon =
    triggerImg ?? "src/assets/icons/folder.png";

  const handleOpen = () => {
    modalStore.open(title, triggerIcon);
    setOpen(true);
  };

  const handleClose = () => {
    modalStore.close();
    setOpen(false);
    onClose?.();
  };

  return (
    <>
      <IconBtn
        imgSrc={triggerIcon}
        onClick={handleOpen}
        title={title}
      />
      {open && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-container">
              <div className="modal-bar">
                <div className="modal-bar-left">
                  <img
                    src={
                      triggerImg ??
                      "src/assets/icons/folder-open.png"
                    }
                    alt="folder"
                  />
                  <p>{title}</p>
                </div>
                <CloseBtn onClick={handleClose} />
              </div>
              <div className="modal-content">
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
