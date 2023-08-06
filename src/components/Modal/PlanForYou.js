import React from 'react'
import './Modal.css'
import PlanforSlider from "./Slider/PlanforSlider"

function PlanForYou() {
  return (
    <>
      <div className='project-content'>
        <PlanforSlider />
        <div style={{marginLeft: '5px', marginBottom: '13px'}}>
          <p>
            The app automatically creates a seating chart by enabling guests to select their preferred seating partners through personalized invitation emails. This ensures a seamless and enjoyable experience for all guests.
          </p>
          <div className='project-tag-container'>
            <p className='project-tag'>Ruby On Rails</p>
            <p className='project-tag'>Javascript</p>
            <p className='project-tag'>HTML</p>
            <p className='project-tag'>SCSS</p>
            <p className='project-tag'>PostgreSQL</p>
            <p className='project-tag'>Bootstrap</p>
          </div>
        </div>
        <div className='modal-content-grid' style={{ border: 'none', marginLeft: '5px' }}>
          <a href='https://planforyou.herokuapp.com' target='_blank' rel="noreferrer noopener" className='skill-logo' style={{textDecoration: 'none'}}>
            <img src="internet.png" alt="link" />
            <p>Site.html</p>
          </a>
          <a href='https://youtu.be/3jZFHTANuRQ?t=1766' target='_blank' rel="noreferrer noopener" className='skill-logo' style={{textDecoration: 'none'}}>
            <img src="video.png" alt="video" />
            <p>Demo.mp4</p>
          </a>
          <a href='https://github.com/bieeeee/PLAN4U' target='_blank' rel="noreferrer noopener" className='skill-logo' style={{textDecoration: 'none'}}>
            <img src="github.png" alt="repo" />
            <p>Source</p>
          </a>
        </div>
        {/* <div className='modal-content-grid' style={{ border: 'none' }}>
          <div className='skill-logo'>
            <img src="rails.png" alt="rails" />
            <p>Rails</p>
          </div>
          <div className='skill-logo'>
            <img src="javascript.png" alt="js" />
            <p>Javascript</p>
          </div>
          <div className='skill-logo'>
            <img src="html.png" alt="html" />
            <p>Html</p>
          </div>
          <div className='skill-logo'>
            <img src="scss.png" alt="scss" />
            <p>Scss</p>
          </div>
          <div className='skill-logo'>
            <img src="postgresql.png" alt="postgresql" />
            <p>PostgreSQL</p>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default PlanForYou
