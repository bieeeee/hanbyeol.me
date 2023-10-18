import React, { useState } from 'react'
import './Terminal.css';
import { TypeAnimation } from 'react-type-animation';

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
            <img src='assets/icons/prompt.png?as=webp' alt='folder' />
            <p>About Me</p>
            <button className='btn-close' onClick={handleClose}>
              <img src="assets/icons/close.png?as=webp" alt="close" />
            </button>
          </div>
          <div className="terminal-content">
              <TypeAnimation
                sequence={[
                  "Hello, bonjour!\nWelcome to my 90s-inspired screen, where web development meets nostalgia.\nI go by Hanbyeol (but you can call me Bie).\nBesides coding, I dabble in DIY, baking, camping, and being the best dog mom ever!\nIf you're up for a fun project, feel free to reach out through this website or connect with me on LinkedIn.\nHave a nice day ou bonne soirée! :)", // Types 'One'
                  1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
              />
          </div>
        </div>
      )}
    </>
  )
}

export default Terminal
