import React from 'react'
import './Modal.css'
import BookingSlider from './Slider/BookingSlider'

function Booking() {
  return (
    <>
      <div className='project-content'>
        <BookingSlider />
        <div style={{ marginLeft: '5px', marginBottom: '13px' }}>
          <p>
            A full-stack booking.com clone.
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
          <a href='https://github.com/bieeeee/booking-app' target='_blank' rel="noreferrer noopener" className='skill-logo' style={{ textDecoration: 'none' }}>
            <img src="assets/icons/github.png?as=webp" alt="repo" />
            <p>Source</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default Booking
