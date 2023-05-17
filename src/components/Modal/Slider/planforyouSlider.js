import React from 'react'
import ImageSlider from './ImageSlider'

function planforyouSlider() {
  const slides =[
    {url: "Planforyou/1.jPg"},
    {url: "Planforyou/2.jPg"},
    {url: "Planforyou/3.jPg"},
    {url: "Planforyou/4.jPg"},
    {url: "Planforyou/5.jPg"},
    {url: "Planforyou/6.jPg"},
    {url: "Planforyou/7.jPg"}
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
