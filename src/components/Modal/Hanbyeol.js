import React from 'react'
import './Modal.css'
import HanbyeolSlider from './Slider/HanbyeolSider'

function Hanbyeol() {
  return (
    <>
      <div className='project-content'>
        <HanbyeolSlider />
        <div style={{marginLeft: '5px', marginBottom: '13px'}}>
          <p>
          The app automatically creates a seating chart by enabling guests to select their preferred seating partners through personalized invitation emails. This ensures a seamless and enjoyable experience for all guests.
          </p>
          <p style={{fontSize: '10px', fontStyle: 'italic', marginTop: '5px'}}>
            Technologies: Ruby on Rails, JS, HTML, SCSS, PostgreSQL, Bootstrap
          </p>
        </div>
        <div className='modal-content-grid' style={{ border: 'none', marginLeft: '5px' }}>
          <a href='https://github.com/bieeeee/hanbyeol.me' target='_blank' rel="noreferrer noopener" className='skill-logo' style={{textDecoration: 'none'}}>
            <img src="github.png" alt="repo" />
            <p>Source</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default Hanbyeol
