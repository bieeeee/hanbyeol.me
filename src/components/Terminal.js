import React, { Component, useState } from 'react'
import './Terminal.css';
import Typewriter from 'typewriter-effect';


function Terminal() {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  }

  return (
    <>
      {!isClosed && (
        <div className='terminal-container'>
          <div className="terminal-bar">
            <img src='prompt.png' alt='folder' />
            <p>About Me</p>
            <button className='btn-close' onClick={handleClose}>X</button>
          </div>
          <div className="terminal-content">
            <Typewriter
              options={{
                strings: ["Hi! My name is <strong>Hanbyeol</strong> and I'm a web developer.<br>My experience in crafting creative advertising campaigns has given me a great eye for effective messaging and engaging user experiences.<br>Now I'm having fun turning those ideas into reality and building great apps.<br>By the way, React is fun!!!"],
                autoStart: true,
                delay: 30,
                loop: false,
                deleteSpeed: Infinity
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Terminal
