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
          Varchar for you is a character rental service web application that connects clients with a diverse catalog of characters for their events. From birthday parties to corporate functions, clients can easily browse, book, and bring a touch of magic to their occasions with a seamless and personalized experience.
          </p>
          <p style={{fontSize: '10px', fontStyle: 'italic', marginTop: '5px'}}>
            Technologies: Ruby on Rails, Javascript, HTML, SCSS, PostgreSQL, Bootstrap
          </p>
        </div>
        <div className='modal-content-grid' style={{ border: 'none', marginLeft: '5px' }}>
          <a href='https://varchar.herokuapp.com/' target='_blank' rel="noreferrer noopener" className='skill-logo' style={{textDecoration: 'none'}}>
            <img src="internet.png" alt="link" />
            <p>Site.html</p>
          </a>
          <a href='https://github.com/bieeeee/Varchar' target='_blank' rel="noreferrer noopener" className='skill-logo' style={{textDecoration: 'none'}}>
            <img src="github.png" alt="repo" />
            <p>Source</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default VarcharForYou
