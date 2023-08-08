import React from 'react'
import ImageSlider from './ImageSlider'
import './Slider.css'

function BookingSlider() {
  const slides =[
    {url: "Booking/1.jpg"},
    {url: "Booking/2.jpg"},
    {url: "Booking/3.jpg"},
    {url: "Booking/4.jpg"}
  ];
  const containerStyles = {
    width: '100%',
    height: '270px',
    margin: '0 auto',
    marginBottom: '20px',
    marginTop: '10px'
  };

  return (
    <div className='slider-container' style={containerStyles}>
      <ImageSlider slides={slides} />
    </div>
  )
}

export default BookingSlider
