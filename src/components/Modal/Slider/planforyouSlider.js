import React from 'react'
import ImageSlider from './ImageSlider'

function planforyouSlider() {
  const slides =[
    {url: "planforyou/1.jpg"},
    {url: "planforyou/2.jpg"},
    {url: "planforyou/3.jpg"},
    {url: "planforyou/4.jpg"},
    {url: "planforyou/5.jpg"},
    {url: "planforyou/6.jpg"},
    {url: "planforyou/7.jpg"}
  ];
  const containerStyles = {
    width: '100%',
    height: '200px',
    margin: '0 auto',
    marginBottom: '20px',
    marginTop: '10px'
  };

  return (
    <div style={containerStyles}>
      <ImageSlider slides={slides} />
    </div>
  )
}

export default planforyouSlider
