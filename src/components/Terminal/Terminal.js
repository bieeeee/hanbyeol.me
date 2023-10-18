import React, { useState, lazy, Suspense } from 'react'
import './Terminal.css';
const Typewriter = lazy(() => import('typewriter-effect'));

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
            <Suspense fallback={<div>Loading...</div>}>
              <Typewriter
                options={{
                  strings: ["Hello, bonjour!<br>Welcome to my 90s-inspired screen, where web development meets nostalgia.<br>I go by Hanbyeol (but you can call me Bie).<br>Besides coding, I dabble in DIY, baking, camping, and being the best dog mom ever!<br>If you're up for a fun project, feel free to reach out through this website or connect with me on LinkedIn.<br>Have a nice day ou bonne soirée! :)"],
                  autoStart: true,
                  delay: 30,
                  loop: false,
                  deleteSpeed: Infinity
                }}
              />
            </Suspense>
          </div>
        </div>
      )}
    </>
  )
}

export default Terminal
