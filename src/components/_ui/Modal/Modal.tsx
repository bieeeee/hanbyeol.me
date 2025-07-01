import React, { useState } from "react";
import { CloseBtn, IconBtn } from "@components";
import "./Modal.scss";

interface ModalProps {
  title: string;
  defaultOpen?: boolean;
  triggerImg?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  defaultOpen,
  triggerImg,
  children
}) => {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <>
      <IconBtn
        imgSrc={
          triggerImg ?? "/src/assets/icons/folder.png"
        }
        onClick={() => setOpen(true)}
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
                      "/src/assets/icons/folder-open.png"
                    }
                    alt="folder"
                  />
                  <p>{title}</p>
                </div>
                <CloseBtn onClick={() => setOpen(false)} />
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
