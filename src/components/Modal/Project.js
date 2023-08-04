import React, { useState } from 'react'
import "./Modal.css"
import VarcharForYou from './VarcharForYou'
import Hanbyeol from './Hanbyeol'
import Zapfit from './Zapfit'
import PlanForYou from './PlanForYou'
import Onlydevs from './Onlydevs'

function Project() {
  const [projectModalOne, setProjectModalOne] = useState(false);
  const [projectModalTwo, setProjectModalTwo] = useState(false);
  const [projectModalThree, setProjectModalThree] = useState(false);
  const [projectModalFour, setProjectModalFour] = useState(false);
  const [projectModalFive, setProjectModalFive] = useState(false);



  const toggleProjectModalOne = (e) => {
    e.stopPropagation();
    setProjectModalOne(!projectModalOne);
  }

  const toggleProjectModalTwo = (e) => {
    e.stopPropagation();
    setProjectModalTwo(!projectModalTwo);
  }

  const toggleProjectModalThree = (e) => {
    e.stopPropagation();
    setProjectModalThree(!projectModalThree);
  }

  const toggleProjectModalFour = (e) => {
    e.stopPropagation();
    setProjectModalFour(!projectModalFour);
  }

  const toggleProjectModalFive = (e) => {
    e.stopPropagation();
    setProjectModalFive(!projectModalFive);
  }

  return (
    <>
      <div
        onClick={toggleProjectModalOne}
        className='btn-modal project-modal-icon'>
        <img src='folder.png' alt='folder' />
        <p>Plan For You</p>
      </div>

      {projectModalOne && (
        <div className='modal'>
          <div onClick={toggleProjectModalOne}>
            <div className='modal-container'>
              <div className="modal-bar">
                <img src="folder-open.png" alt="folder" />
                <p>Plan For You</p>
                <button onClick={toggleProjectModalOne} className='close-modal'>
                  <img src="close.png" alt="close" />
                </button>
              </div>
              <div className="project-modal-content">
                <PlanForYou />
              </div>
            </div>
          </div>
        </div>)
      }

      <div
        onClick={toggleProjectModalTwo}
        className='btn-modal project-modal-icon'>
        <img src='folder.png' alt='folder' />
        <p>Varchar For You</p>
      </div>

      {projectModalTwo && (
        <div className='modal'>
          <div onClick={toggleProjectModalTwo}>
            <div className='modal-container'>
              <div className="modal-bar">
                <img src="folder-open.png" alt="folder" />
                <p>Varchar For You</p>
                <button onClick={toggleProjectModalTwo} className='close-modal'>
                  <img src="close.png" alt="close" />
                </button>
              </div>
              <div className="project-modal-content">
                <VarcharForYou />
              </div>
            </div>
          </div>
        </div>)
      }

      <div
        onClick={toggleProjectModalThree}
        className='btn-modal project-modal-icon'>
        <img src='folder.png' alt='folder' />
        <p>hanbyeol.me</p>
      </div>

      {projectModalThree && (
        <div className='modal'>
          <div onClick={toggleProjectModalThree}>
            <div className='modal-container'>
              <div className="modal-bar">
                <img src="folder-open.png" alt="folder" />
                <p>hanbyeol.me</p>
                <button onClick={toggleProjectModalThree} className='close-modal'>
                  <img src="close.png" alt="close" />
                </button>
              </div>
              <div className="project-modal-content">
                <Hanbyeol />
              </div>
            </div>
          </div>
        </div>)
      }

      <div
        onClick={toggleProjectModalFour}
        className='btn-modal project-modal-icon'>
        <img src='folder.png' alt='folder' />
        <p>zapfit.ca</p>
      </div>

      {projectModalFour && (
        <div className='modal'>
          <div onClick={toggleProjectModalFour}>
            <div className='modal-container'>
              <div className="modal-bar">
                <img src="folder-open.png" alt="folder" />
                <p>zapfit.ca</p>
                <button onClick={toggleProjectModalFour} className='close-modal'>
                  <img src="close.png" alt="close" />
                </button>
              </div>
              <div className="project-modal-content">
                <Zapfit />
              </div>
            </div>
          </div>
        </div>)
      }

      <div
        onClick={toggleProjectModalFive}
        className='btn-modal project-modal-icon'>
        <img src='folder.png' alt='folder' />
        <p>OnlyDevs</p>
      </div>

      {projectModalFive && (
        <div className='modal'>
          <div onClick={toggleProjectModalFive}>
            <div className='modal-container'>
              <div className="modal-bar">
                <img src="folder-open.png" alt="folder" />
                <p>OnlyDevs</p>
                <button onClick={toggleProjectModalFive} className='close-modal'>
                  <img src="close.png" alt="close" />
                </button>
              </div>
              <div className="project-modal-content">
                <Onlydevs />
              </div>
            </div>
          </div>
        </div>)
      }
    </>
  )
}

export default Project;
