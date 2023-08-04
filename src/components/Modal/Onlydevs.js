import React from 'react'
import './Modal.css'
import ZapfitSlider from './Slider/ZapfitSlider'

function Onlydevs() {
  return (
    <>
      <div className='project-content'>
        {/* <ZapfitSlider /> */}
        <div style={{ marginLeft: '5px', marginBottom: '13px' }}>
          <p>
            A personal training business website that enables clients to easily discover and schedule trial sessions.
          </p>
          <p style={{ fontSize: '10px', fontStyle: 'italic', marginTop: '5px' }}>
            Technologies: Ruby on Rails, Javascript, HTML, SCSS, Tailwind
          </p>
        </div>
        <div className='modal-content-grid' style={{ border: 'none', marginLeft: '5px' }}>
          <a href='https://github.com/bieeeee/onlydevs' target='_blank' rel="noreferrer noopener" className='skill-logo' style={{ textDecoration: 'none' }}>
            <img src="github.png" alt="repo" />
            <p>Source</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default Onlydevs
