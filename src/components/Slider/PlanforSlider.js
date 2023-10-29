import React from 'react'
import ImageSlider from './ImageSlider'
import './Slider.css'

function PlanforSlider() {
  const slides =[
    {url: "assets/projects/Planfor/1.jpg?as=webp"},
    {url: "assets/projects/Planfor/2.jpg?as=webp"},
    {url: "assets/projects/Planfor/3.jpg?as=webp"},
    {url: "assets/projects/Planfor/4.jpg?as=webp"},
    {url: "assets/projects/Planfor/5.jpg?as=webp"},
    {url: "assets/projects/Planfor/6.jpg?as=webp"},
    {url: "assets/projects/Planfor/7.jpg?as=webp"},
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
