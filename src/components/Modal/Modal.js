import React, { useState } from 'react'
import "./Modal.css"

function Modal() {
  const [skillModal, setSkillModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const [skillComponent, setSkillComponent] = useState(null);
  const [projectComponent, setProjectComponent] = useState(null);


  const toggleSkillModal = async () => {
    setSkillModal(!skillModal);
    const { default: SkillComponent } = await import('./Skill');
    setSkillComponent(<SkillComponent />);
  }

  const toggleProjectModal = async () => {
    setProjectModal(!projectModal);
    const { default: ProjectComponent } = await import('./Project');
    setProjectComponent(<ProjectComponent />);
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
          <img rel="preload" src='assets/icons/folder.png?as=webp' alt='folder' style={{width: '48px', height: '48px'}} />
          <h3>Skills</h3>
        </div>

        {skillModal && (
          <div className='modal'>
              <div onClick={toggleSkillModal} className='overlay'>
                <div className='modal-container'>
                  <div className="modal-bar">
                    <img rel="preload" src="assets/icons/folder-open.png?as=webp" alt="folder" />
                    <p>Skills</p>
                    <button onClick={toggleSkillModal} className='close-modal'>
                      <img src="assets/icons/close.png?as=webp" alt="close" />
                    </button>
                  </div>
                  <div className="modal-content modal-skill">
                    {skillComponent}
                  </div>
                </div>
              </div>
          </div>)
        }

        <div onClick={toggleProjectModal} className='btn-modal'>
          <img rel="preload" src='assets/icons/folder.png?as=webp' alt='folder' style={{width: '48px', height: '48px'}} />
          <h3>Projects</h3>
        </div>

        {projectModal && (
          <div className='modal'>
              <div onClick={toggleProjectModal} className='overlay'>
                <div className='modal-container'>
                  <div className="modal-bar">
                    <img src="assets/icons/folder-open.png?as=webp" alt="folder" />
                    <p>Projects</p>
                    <button onClick={toggleProjectModal} className='close-modal'>
                      <img src="assets/icons/close.png?as=webp" alt="close" />
                    </button>
                  </div>
                  <div className="modal-content">
                    {projectComponent}
                  </div>
                </div>
              </div>
          </div>)
        }

        {/* <a href="assets/resume.pdf" target='_blank' rel="preload noreferrer noopener" className='btn-modal' style={{textDecoration: 'none', color: 'black'}}>
          <img rel="preload" src="assets/icons/notepad.png?as=webp" alt="resume" style={{width: '48px'}} />
          <p>Resume</p>
        </a> */}

        <a href="https://www.linkedin.com/in/hanbyeol-kwon/" target='_blank' rel="noreferrer noopener" className='btn-modal' style={{textDecoration: 'none', color: 'black'}}>
          <img rel="preload" src="assets/icons/linkedin.png?as=webp" alt="linkedin" style={{width: '48px', height: '48px'}} />
          <p>LinkedIn</p>
        </a>

        <a href="https://github.com/bieeeee" target='_blank' rel="noreferrer noopener" className='btn-modal btn-gh' style={{textDecoration: 'none', color: 'black'}}>
          <img rel="preload" src="assets/icons/github.png?as=webp" alt="github" style={{width: '48px', height: '48px'}} />
          <p>Github</p>
        </a>
        <a href="/contact" className='btn-modal btn-gh' style={{textDecoration: 'none', color: 'black'}}>
          <img rel="preload" src="assets/icons/email.png?as=webp" alt="contact" style={{width: '48px', height: '48px'}} />
          <p>Contact</p>
        </a>
      </div>
    </>
  );
}

export default Modal
