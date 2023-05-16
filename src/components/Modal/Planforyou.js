import React from 'react'

function PlanForYou() {
  return (
    <>
      <a href='https://planforyou.herokuapp.com' target='_blank' rel="noreferrer noopener" className='skill-logo'>
        <img src="internet.png" alt="link" />
        <p>Link</p>
      </a>
      <div className='skill-logo'>
        <img src="rails.png" alt="rails" />
        <p>Rails</p>
      </div>
      <div className='skill-logo'>
        <img src="javascript.png" alt="js" />
        <p>Javascript</p>
      </div>
      <div className='skill-logo'>
        <img src="html.png" alt="html" />
        <p>Html</p>
      </div>
      <div className='skill-logo'>
        <img src="scss.png" alt="scss" />
        <p>Scss</p>
      </div>
      <div className='skill-logo'>
        <img src="postgresql.png" alt="postgresql" />
        <p>PostgreSQL</p>
      </div>
    </>
  )
}

export default PlanForYou
