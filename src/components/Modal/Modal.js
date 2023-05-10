import React, { useState } from 'react'
import "./Modal.css"

function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <div className='folders'>
        <div
          onClick={toggleModal}
          className='btn-modal'>
          <img src='folder.png' alt='folder' />
          <h3>Skills</h3>
        </div>

        {modal && (
          <div className='modal'>
              <div onClick={toggleModal} className='overlay'>
                <div className='modal-container'>
                  <div className="modal-bar">
                    <p>Skills</p>
                    <button onClick={toggleModal} className='close-modal'>X</button>
                  </div>
                  <div className="modal-content">

                  </div>
                </div>
              </div>
          </div>)
        }

        <div
          onClick={toggleModal}
          className='btn-modal'>
          <img src='folder.png' alt='folder' />
          <h3>Projects</h3>
        </div>

        {modal && (
          <div className='modal'>
              <div onClick={toggleModal} className='overlay'>
                <div className='modal-container'>
                  <div className="modal-bar">
                    <p>Projects</p>
                    <button onClick={toggleModal} className='close-modal'>X</button>
                  </div>
                  <div className="modal-content">

                  </div>
                </div>
              </div>
          </div>)
        }
      </div>
    </>
  );
}

export default Modal
