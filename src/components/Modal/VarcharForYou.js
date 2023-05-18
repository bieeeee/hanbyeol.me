import React from 'react'
import './Modal.css'
import VarcharSlider from './Slider/VarcharSlider'

function VarcharForYou() {
  return (
    <>
      <div className='project-content'>
        <VarcharSlider />
        <div style={{marginLeft: '5px', marginBottom: '13px'}}>
          <p>
          The app automatically creates a seating chart by enabling guests to select their preferred seating partners through personalized invitation emails. This ensures a seamless and enjoyable experience for all guests.
          </p>
          <p style={{fontSize: '10px', fontStyle: 'italic', marginTop: '5px'}}>
            Technologies: Ruby on Rails, JS, HTML, SCSS, PostgreSQL, Bootstrap
          </p>
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
      </div>
    </>
  )
}

export default VarcharForYou
