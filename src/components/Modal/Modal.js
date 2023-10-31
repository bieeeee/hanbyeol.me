import { useState } from 'react'
import "./Modal.css"

function Modal() {
  const [skillModal, setSkillModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const [skillComponent, setSkillComponent] = useState(null);
  const [projectComponent, setProjectComponent] = useState(null);

  const toggleSkillModal = async () => {
    setSkillModal(!skillModal);
    const { default: SkillComponent } = await import('../Skill/Skill');
    setSkillComponent(<SkillComponent />);
  }

  const toggleProjectModal = async () => {
    setProjectModal(!projectModal);
    const { default: ProjectComponent } = await import('../Project/Project');
    setProjectComponent(<ProjectComponent />);
  }

  return (
    <div className='modals' id='files'>
      <div className='folders'>
        <div onClick={toggleSkillModal} className='btn-modal'>
          <img rel="preload" src='assets/icons/folder.png' alt='folder' style={{width: '48px', height: '48px'}} />
          <h3>Skills</h3>
        </div>
        {skillModal && (
          <div className='modal'>
              <div onClick={toggleSkillModal} className='overlay'>
                <div className='modal-container'>
                  <div className="modal-bar">
                    <img src="assets/icons/folder-open.png" alt="folder" />
                    <p>Skills</p>
                    <button onClick={toggleSkillModal} className='close-modal'>
                      <img src="assets/icons/close.png" alt="close" style={{ width: '12px', height: '12px' }} />
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
          <img rel="preload" src='assets/icons/folder.png' alt='folder' style={{width: '48px', height: '48px'}} />
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
                      <img src="assets/icons/close.png" alt="" style={{ width: '12px', height: '12px' }} />
                    </button>
                  </div>
                  <div className="modal-content">
                    {projectComponent}
                  </div>
                </div>
              </div>
          </div>)
        }
        <a href="https://www.linkedin.com/in/hanbyeol-kwon/" target='_blank' rel="noreferrer noopener" className='btn-modal' style={{textDecoration: 'none', color: 'black'}}>
          <img rel="preload" src="assets/icons/linkedin.png" alt="linkedin-icon" style={{width: '48px', height: '48px'}} />
          <p>LinkedIn</p>
        </a>
        <a href="https://github.com/bieeeee" target='_blank' rel="noreferrer noopener" className='btn-modal btn-gh' style={{textDecoration: 'none', color: 'black'}}>
          <img rel="preload" src="assets/icons/github.png" alt="github-icon" style={{width: '48px', height: '48px'}} />
          <p>Github</p>
        </a>
      </div>
    </div>
  );
}

export default Modal
