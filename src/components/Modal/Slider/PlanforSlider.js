import React from 'react'
import ImageSlider from './ImageSlider'
import './Slider.css'

function PlanforSlider() {
  const slides =[
    {url: "Planforyou/1.jpg"},
    {url: "Planforyou/2.jpg"},
    {url: "Planforyou/3.jpg"},
    {url: "Planforyou/4.jpg"},
    {url: "Planforyou/5.jpg"},
    {url: "Planforyou/6.jpg"},
    {url: "Planforyou/7.jpg"},
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
