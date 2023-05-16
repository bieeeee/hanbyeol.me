import React, { useState } from 'react'
import "./Modal.css"
import Planforyou from './Planforyou';

export default function Project() {
  const [projectModalOne, setProjectModalOne] = useState(false);
  const [projectModalTwo, setProjectModalTwo] = useState(false);
  const [projectModalThree, setProjectModalThree] = useState(false);
  const [projectModalFour, setProjectModalFour] = useState(false);


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

  return (
    <>
      <div
        onClick={toggleProjectModalOne}
        className='btn-modal project-modal-icon'>
        <img src='folder.png' alt='folder' />
        <h3>Plan For You</h3>
      </div>

      {projectModalOne && (
        <div className='modal'>
            <div onClick={toggleProjectModalOne}>
              <div className='modal-container'>
                <div className="modal-bar">
                  <p>Plan For You</p>
                  <button onClick={toggleProjectModalOne} className='close-modal'>X</button>
                </div>
                <div className="modal-content">
                  <Planforyou />
                </div>
              </div>
            </div>
        </div>)
      }

      <div
        onClick={toggleProjectModalTwo}
        className='btn-modal project-modal-icon'>
        <img src='folder.png' alt='folder' />
        <h3>Varchar For you</h3>
      </div>

      {projectModalTwo && (
        <div className='modal'>
            <div onClick={toggleProjectModalTwo}>
              <div className='modal-container'>
                <div className="modal-bar">
                  <p>Varchar For You</p>
                  <button onClick={toggleProjectModalTwo} className='close-modal'>X</button>
                </div>
                <div className="modal-content">
                  <Planforyou />
                </div>
              </div>
            </div>
        </div>)
      }

      <div
        onClick={toggleProjectModalThree}
        className='btn-modal project-modal-icon'>
        <img src='folder.png' alt='folder' />
        <h3>hanbyeol.me</h3>
      </div>

      {projectModalThree && (
        <div className='modal'>
            <div onClick={toggleProjectModalThree}>
              <div className='modal-container'>
                <div className="modal-bar">
                  <p>hanbyeol.me</p>
                  <button onClick={toggleProjectModalThree} className='close-modal'>X</button>
                </div>
                <div className="modal-content">
                  <Planforyou />
                </div>
              </div>
            </div>
        </div>)
      }

      <div
        onClick={toggleProjectModalFour}
        className='btn-modal project-modal-icon'>
        <img src='folder.png' alt='folder' />
        <h3>zapfit.ca</h3>
      </div>

      {projectModalFour && (
        <div className='modal'>
            <div onClick={toggleProjectModalFour}>
              <div className='modal-container'>
                <div className="modal-bar">
                  <p>zapfit.ca</p>
                  <button onClick={toggleProjectModalFour} className='close-modal'>X</button>
                </div>
                <div className="modal-content">
                  <Planforyou />
                </div>
              </div>
            </div>
        </div>)
      }
    </>
  )
}
