import { useState } from 'react'
import "./Modal.css"

function Modal({ t }) {
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
    <div className='modals' id='projects'>
      <div className='folders'>
        <div onClick={toggleSkillModal} className='btn-modal'>
          <img rel="preload" src='assets/icons/folder.png' alt='folder' style={{ width: '48px', height: '48px' }} />
          <p>{t('modal.skills')}</p>
        </div>
        {skillModal && (
          <div className='modal'>
            <div onClick={toggleSkillModal} className='overlay'>
              <div className='modal-container'>
                <div className="modal-bar">
                  <div className="modal-bar-left">
                    <img src="assets/icons/folder-open.png" alt="folder" />
                    <p>{t('modal.skills')}</p>
                  </div>
                  <div onClick={toggleSkillModal} className='close-modal'>
                    <img src="assets/icons/close.png" alt="close" style={{ width: '12px', height: '12px' }} />
                  </div>
                </div>
                <div className="modal-content modal-skill">
                  {skillComponent}
                </div>
              </div>
            </div>
          </div>)
        }
        <div onClick={toggleProjectModal} className='btn-modal'>
          <img rel="preload" src='assets/icons/folder.png' alt='folder' style={{ width: '48px', height: '48px' }} />
          <p>{t('modal.projects')}</p>
        </div>
        {projectModal && (
          <div className='modal'>
            <div onClick={toggleProjectModal} className='overlay'>
              <div className='modal-container'>
                <div className="modal-bar">
                  <div className="modal-bar-left">
                    <img src="assets/icons/folder-open.png" alt="folder" />
                    <p>{t('modal.projects')}</p>
                  </div>
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
        <a href="https://www.linkedin.com/in/hanbyeol-kwon/" target='_blank' rel="noreferrer noopener" className='btn-modal' style={{ textDecoration: 'none', color: 'black' }}>
          <img rel="preload" src="assets/icons/linkedin.png" alt="linkedin-icon" style={{ width: '48px', height: '48px' }} />
          <p>{t('modal.linkedin')}</p>
        </a>
        <a href="https://github.com/bieeeee" target='_blank' rel="noreferrer noopener" className='btn-modal btn-gh' style={{ textDecoration: 'none', color: 'black' }}>
          <img rel="preload" src="assets/icons/github.png" alt="github-icon" style={{ width: '48px', height: '48px' }} />
          <p>{t('modal.github')}</p>
        </a>
      </div>
    </div>
  );
}

export default Modal
