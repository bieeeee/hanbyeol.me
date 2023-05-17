import React from 'react'
import './Modal.css'
import PlanforyouSlider from './Slider/PlanforyouSlider'

function PlanForYou() {
  return (
    <>
      <div className='project-content'>
        <PlanforyouSlider />
        <div>
          <p>
          <strong>Plan For You</strong> automatically creates a seating chart by enabling guests to select their preferred seating partners through personalized invitation emails. This ensures a seamless and enjoyable experience for all guests.
          </p>
          <p>
            Technologies: Rails, JS, HTML, SCSS, PostgreSQL, Bootstrap
          </p>
        </div>
        <div className='modal-content-grid' style={{ border: 'none' }}>
          <a href='https://planforyou.herokuapp.com' target='_blank' rel="noreferrer noopener" className='skill-logo'>
            <img src="internet.png" alt="link" />
            <p>Link</p>
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
