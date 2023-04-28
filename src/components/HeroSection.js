import { Button } from './Button'
import React from 'react'

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>GET STARTED</Button>
      </div>
    </div>
  );
}

export default HeroSection
