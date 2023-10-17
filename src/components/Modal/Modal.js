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
          <img src='assets/icons/folder.png' alt='folder' />
          <h3>Skills</h3>
        </div>

        {skillModal && (
          <div className='modal'>
              <div onClick={toggleSkillModal} className='overlay'>
                <div className='modal-container'>
                  <div className="modal-bar">
                    <img rel="preload" src="assets/icons/folder-open.png" alt="folder" />
                    <p>Skills</p>
                    <button onClick={toggleSkillModal} className='close-modal'>
                      <img src="assets/icons/close.png" alt="close" />
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
          <img rel="preload" src='assets/icons/folder.png' alt='folder' />
          <h3>Projects</h3>
        </div>

        {projectModal && (
          <div className='modal'>
              <div onClick={toggleProjectModal} className='overlay'>
                <div className='modal-container'>
                  <div className="modal-bar">
                    <img src="assets/icons/folder-open.png" alt="folder" />
                    <p>Projects</p>
                    <button onClick={toggleProjectModal} className='close-modal'>
                      <img src="assets/icons/close.png" alt="close" />
                    </button>
                  </div>
                  <div className="modal-content">
                    <Project />
                  </div>
                </div>
              </div>
          </div>)
        }

        <a href="assets/resume.pdf" target='_blank' rel="noreferrer noopener" className='btn-modal' style={{textDecoration: 'none', color: 'black'}}>
          <img rel="preload" src="assets/icons/notepad.png" alt="resume" style={{width: '48px'}} />
          <p>Resume</p>
        </a>

        <a href="https://www.linkedin.com/in/hanbyeol-kwon/" target='_blank' rel="noreferrer noopener" className='btn-modal' style={{textDecoration: 'none', color: 'black'}}>
          <img rel="preload" src="assets/icons/linkedin.png" alt="linkedin" style={{width: '48px'}} />
          <p>LinkedIn</p>
        </a>

        <a href="https://github.com/bieeeee" target='_blank' rel="noreferrer noopener" className='btn-modal btn-gh' style={{textDecoration: 'none', color: 'black'}}>
          <img rel="preload" src="assets/icons/github.png" alt="github" style={{width: '48px'}} />
          <p>Github</p>
        </a>
        <a href="/contact" className='btn-modal btn-gh' style={{textDecoration: 'none', color: 'black'}}>
          <img rel="preload" src="assets/icons/email.png" alt="contact" style={{width: '48px'}} />
          <p>Contact</p>
        </a>
      </div>
    </>
  );
}

export default Modal
