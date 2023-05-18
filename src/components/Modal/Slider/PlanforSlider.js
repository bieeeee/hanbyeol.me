import React from 'react'
import ImageSlider from './ImageSlider'
import './Slider.css'

function PlanforSlider() {
  const slides =[
    {url: "Planfor/1.jpg"},
    {url: "Planfor/2.jpg"},
    {url: "Planfor/3.jpg"},
    {url: "Planfor/4.jpg"},
    {url: "Planfor/5.jpg"},
    {url: "Planfor/6.jpg"},
    {url: "Planfor/7.jpg"},
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

export default PlanforSlider
