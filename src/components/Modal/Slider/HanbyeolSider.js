import React from 'react'
import ImageSlider from './ImageSlider'
import './Slider.css'

function HanbyeolSider() {
  const slides =[
    {url: "assets/projects/Hanbyeol/1.jpg"},
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

export default HanbyeolSider
