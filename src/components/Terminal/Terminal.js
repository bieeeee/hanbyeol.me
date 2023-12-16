import React, { lazy, Suspense, useEffect, useState } from 'react'
import './Terminal.css';
import '../Modal/Modal.css';
const TypeAnimation = lazy(() =>
  window.onload = import("react-type-animation").then(module => {
    return { default: module.TypeAnimation };
  })
);
function Terminal({t, i18n}) {
  const [reload, setReload] = useState(0);
  useEffect(() => {
    setReload((prev) => prev + 1);
  }, [i18n.language]);

  return (
    <div className='terminal' id='about'>
      <div className='terminal-container'>
        <div className="modal-bar">
          <div className="modal-bar-left">
            <img src='assets/icons/prompt.png' alt='folder' />
            {t('modal.aboutme')}
          </div>
          <div className='close-modal' aria-label="Close button">
            <img src="assets/icons/close.png" alt="close-button" />
          </div>
        </div>
        <div className="terminal-content">
          <Suspense>
            <TypeAnimation
              key={reload}
              sequence={[
                t('terminal.desc'),
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
