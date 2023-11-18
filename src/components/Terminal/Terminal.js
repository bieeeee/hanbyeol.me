import React, { lazy, Suspense } from 'react'
import './Terminal.css';
const TypeAnimation = lazy(() =>
  window.onload = import("react-type-animation").then(module => {
    return { default: module.TypeAnimation };
  })
);
function Terminal({ t }) {
  return (
    <div className='terminal' id='about'>
      <div className='terminal-container'>
        <div className="terminal-bar">
          <img src='assets/icons/prompt.png' alt='folder' style={{ width: '20px', height: '20px' }} />
          About Me
          <button className='btn-close' aria-label="Close button">
            <img src="assets/icons/close.png" alt="close-button" style={{ width: '12px', height: '12px' }} />
          </button>
        </div>
        <div className="terminal-content">
          <Suspense>
            <TypeAnimation
              sequence={[
                `${t('terminal.desc')}`,
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
    </div>
  )
}

export default Terminal
