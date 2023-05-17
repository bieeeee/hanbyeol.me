import React, { useState } from "react"

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyles = {
    height: '100%',
    position: 'relative'
  }
  const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`
  }
  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '10px',
    fontSize: '30px',
    color: 'orange',
    zIndex: 1,
    cursor: 'pointer'
  }
  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '10px',
    fontSize: '30px',
    color: 'orange',
    zIndex: 1,
    cursor: 'pointer'
  }
  const goToPrevious = (e) => {
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const goToNext = (e) => {
    e.stopPropagation();
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  return(
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>❰</div>
      <div style={rightArrowStyles} onClick={goToNext}>❱</div>
      <div style={slideStyles}>
      </div>
    </div>
  )
};

export default ImageSlider;
