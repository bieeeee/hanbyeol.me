import React, { Suspense, lazy, useState } from 'react'
import "../Modal/Modal.css"

const projects = [
  { name: 'modalOne', title: 'Plan For You', component: lazy(() => import('./PlanForYou')) },
  { name: 'modalTwo', title: 'Varchar For You', component: lazy(() => import('./VarcharForYou')) },
  { name: 'modalThree', title: 'Hanbyeol.me', component: lazy(() => import('./Hanbyeol')) },
  { name: 'modalFour', title: 'Zapfit.ca', component: lazy(() => import('./Zapfit')) },
  { name: 'modalFive', title: 'OnlyDevs', component: lazy(() => import('./Onlydevs')) },
  { name: 'modalSix', title: 'Booking.com', component: lazy(() => import('./Booking')) },
];

function Project() {
  const [projectStates, setProjectStates] = useState(
    projects.reduce((acc, project) => {
      acc[project.name] = false;
      return acc;
    }, {})
  );

  const toggleProjectModal = (e, name) => {
    e.stopPropagation();
    setProjectStates((prevStates) => ({
      ...prevStates,
      [name]: !prevStates[name],
    }));
  };

  return (
    <>
      {projects.map((project) => (
        <div
          key={project.name}
          onClick={(e) => toggleProjectModal(e, project.name)}
          className='btn-modal project-modal-icon'
        >
          <img src='assets/icons/folder.png' alt='folder' />
          <p>{project.title}</p>
        </div>
      ))}

      {projects.map((project) => (
        <div key={project.name}>
          {projectStates[project.name] && (
            <div className='modal'>
              <div onClick={() => toggleProjectModal(project.name)}>
                <div className='modal-container'>
                  <div className="modal-bar">
                    <div className="modal-bar-left">
                      <img src="assets/icons/folder-open.png" alt="folder" />
                      <p>{project.title}</p>
                    </div>
                    <button onClick={(e) => toggleProjectModal(e, project.name)} className='close-modal'>
                      <img src="assets/icons/close.png" alt="" style={{ width: '12px', height: '12px' }} />
                    </button>
                  </div>
                  <div className="project-modal-content">
                    <Suspense fallback={"loading..."}>
                      {React.createElement(React.memo(project.component))}
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default Project;
