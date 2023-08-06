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
            OnlyDevs is a platform to connect junior/senior developers for career guidance. Similar to a dating app, our app provides filters for users to select developers nearby, preferred work experience and discipline. They can view a profile and leave questions for interaction.
          </p>
          <div className='project-tag-container'>
            <p className='project-tag'>Ruby On Rails</p>
            <p className='project-tag'>Javascript</p>
            <p className='project-tag'>HTML</p>
            <p className='project-tag'>SCSS</p>
            <p className='project-tag'>Tailwind</p>
          </div>
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
