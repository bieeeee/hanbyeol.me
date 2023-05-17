import React, { useState } from 'react'
import "./Modal.css"
import Skill from './Skill';
import Project from './Project';

function Modal() {
  const [skillModal, setSkillModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);

  const toggleSkillModal = () => {
    setSkillModal(!skillModal);
  }
  const toggleProjectModal = () => {
    setProjectModal(!projectModal);
  }

  // For hiding scroll purpose
  if(skillModal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <div className='folders'>
        <div onClick={toggleSkillModal} className='btn-modal'>
          <img src='folder.png' alt='folder' />
          <h3>Skills</h3>
        </div>

        {skillModal && (
          <div className='modal'>
              <div onClick={toggleSkillModal} className='overlay'>
                <div className='modal-container'>
                  <div className="modal-bar">
                    <img src="folder-open.png" alt="folder" />
                    <p>Skills</p>
                    <button onClick={toggleSkillModal} className='close-modal'>
                      <img src="close.png" alt="close" />
                    </button>
                  </div>
                  <div className="modal-content modal-skill">
                    <Skill />
                  </div>
                </div>
              </div>
          </div>)
        }

        <div onClick={toggleProjectModal} className='btn-modal'>
          <img src='folder.png' alt='folder' />
          <h3>Projects</h3>
        </div>

        {projectModal && (
          <div className='modal'>
              <div onClick={toggleProjectModal} className='overlay'>
                <div className='modal-container'>
                  <div className="modal-bar">
                    <img src="folder-open.png" alt="folder" />
                    <p>Projects</p>
                    <button onClick={toggleProjectModal} className='close-modal'>
                      <img src="close.png" alt="close" />
                    </button>
                  </div>
                  <div className="modal-content">
                    <Project />
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
