import React, { Component } from 'react'
import './Terminal.css';
import Typewriter from 'typewriter-effect';


function Terminal() {
  return (
    <div className='terminal-container'>
      <div className="terminal-bar">
        <p>About Me</p>
      </div>
      <div className="terminal-content">
        <Typewriter
          options={{
            strings: ["Hi! My name is <strong>Hanbyeol</strong> and I'm a web developer.<br>I currently graduated Le Wagon in Montreal.<br>I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences."],
            autoStart: true,
            delay: 40,
            loop: false,
            deleteSpeed: Infinity
          }}
        />
      </div>
    </div>
  )
}

export default Terminal
