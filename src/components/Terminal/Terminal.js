import React, { useState, lazy, Suspense } from 'react'
import './Terminal.css';
const TypeAnimation = lazy(() =>
  window.onload = import("react-type-animation").then(module => {
    return { default: module.TypeAnimation };
  })
);

function Terminal() {
  const [isClosed, setIsClosed] = useState(false);
  const handleClose = () => {
    setIsClosed(true);
  }

  return (
    <div className='terminal' id='about'>
      {!isClosed && (
        <div className='terminal-container'>
          <div className="terminal-bar">
            <img src='assets/icons/prompt.png' alt='folder' style={{ width: '20px', height: '20px' }} />
            About Me
            <button className='btn-close' aria-label="Close button" onClick={handleClose}>
              <img src="assets/icons/close.png" alt="close-button" style={{ width: '12px', height: '12px' }} />
            </button>
          </div>
          <div className="terminal-content">
            <Suspense>
              <TypeAnimation
                sequence={[
                  "Hello, bonjour!\nMy name is Hanbyeol(or Bie).\nWelcome to my 90s-inspired screen, where web development meets nostalgia.\nBesides coding, I dabble in DIY, baking, camping, and being the best dog mom ever!\nIf you're up for a fun project, feel free to reach out through this website or connect with me on LinkedIn.\nHave a nice day ou bonne soirée! :)", // Types 'One'
                  1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                speed={80}
                style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
              />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  )
}

export default Terminal
