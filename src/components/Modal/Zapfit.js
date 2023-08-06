import React from 'react'
import './Modal.css'
import ZapfitSlider from './Slider/ZapfitSlider'

function Zapfit() {
  return (
    <>
      <div className='project-content'>
        <ZapfitSlider />
        <div style={{marginLeft: '5px', marginBottom: '13px'}}>
          <p>
            A personal training business website that enables clients to easily discover and schedule trial sessions.
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
          <a href='https://www.zapfit.ca/' target='_blank' rel="noreferrer noopener" className='skill-logo' style={{textDecoration: 'none'}}>
            <img src="internet.png" alt="link" />
            <p>Site.html</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default Zapfit
