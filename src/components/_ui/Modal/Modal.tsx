import React, { useState } from 'react'
import "./Modal.css"
import FolderBtn from '../FolderBtn/FolderBtn';

interface ModalProps {
  title: string;
  children: React.ReactNode
} 

const Modal:React.FC<ModalProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='modals' id='projects'>
      <div className='folders'>
        <FolderBtn onClick={() => setOpen(true)} title={title} />
        {open && (
          <div className='modal'>
            <div onClick={() => setOpen(false)} className='overlay'>
              <div className='modal-container'>
                <div className="modal-bar">
                  <div className="modal-bar-left">
                    <img src="assets/icons/folder-open.png" alt="folder" />
                    <p>{title}</p>
                  </div>
                  <button onClick={() => setOpen(false)} className='close-modal'>
                    <img src="assets/icons/close.png" alt="" style={{ width: '12px', height: '12px' }} />
                  </button>
                </div>
                <div className="modal-content">
                  {children}
                </div>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Modal
