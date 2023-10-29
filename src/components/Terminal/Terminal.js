import React, { useState, useEffect } from 'react'
import './Terminal.css';
import { TypeAnimation } from 'react-type-animation';

function Terminal() {
  const [isClosed, setIsClosed] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  }

  useEffect(() => {
    const handleLoad = () => setStartTyping(true);
    window.onload = handleLoad;
    setStartTyping(true);
  }, []);


  return (
    <>
      {!isClosed && (
        <div className='terminal-container'>
          <div className="terminal-bar">
            <img src='assets/icons/prompt.png?as=webp' alt='folder' style={{width: '20px', height: '20px'}} />
            <p>About Me</p>
            <button className='btn-close' onClick={handleClose}>
              <img src="assets/icons/close.png?as=webp" alt="close" style={{width: '14.5px', height: '16px'}} />
            </button>
          </div>
          <div className="terminal-content">
              {startTyping && <TypeAnimation
                sequence={[
                  "Hello, bonjour!\nMy name is Hanbyeol(or Bie).\nWelcome to my 90s-inspired screen, where web development meets nostalgia.\nBesides coding, I dabble in DIY, baking, camping, and being the best dog mom ever!\nIf you're up for a fun project, feel free to reach out through this website or connect with me on LinkedIn.\nHave a nice day ou bonne soirée! :)", // Types 'One'
                  1500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
              />}
          </div>
        </div>
      )}
    </>
  )
}

export default Terminal
