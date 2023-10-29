import React from 'react'
import '../Modal/Modal.css'
import ZapfitSlider from '../Slider/ZapfitSlider'

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
            <p className='project-tag'>Node.js</p>
            <p className='project-tag'>Express</p>
            <p className='project-tag'>React</p>
            <p className='project-tag'>SCSS</p>
            <p className='project-tag'>MongoDB</p>
          </div>
        </div>
        <div className='modal-content-grid' style={{ border: 'none', marginLeft: '5px' }}>
        </div>
      </div>
    </>
  )
}

export default Zapfit
