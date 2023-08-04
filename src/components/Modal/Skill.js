import React from 'react'
import './Skill.css';

function Skill() {
  return (
    <>
      <div className='skill-logo'>
        <img src="node.png" alt="node" />
        <p>Node.js</p>
      </div>
      <div className='skill-logo'>
        <img src="react.png" alt="react" />
        <p>React</p>
      </div>
      <div className='skill-logo' style={{ whiteSpace: "nowrap" }}>
        <img src="rails.png" alt="rails" />
        <p>Ruby On Rails</p>
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
        <img src="css.png" alt="css" />
        <p>Css</p>
      </div>
      <div className='skill-logo'>
        <img src="scss.png" alt="scss" />
        <p>Sass</p>
      </div>
      <div className='skill-logo'>
        <img src="postgresql.png" alt="postgresql" />
        <p>PostgreSQL</p>
      </div>
      <div className='skill-logo'>
        <img src="mongodb.png" alt="mongodb" />
        <p>MongoDB</p>
      </div>
      <div className='skill-logo'>
        <img src="insomnia.svg" alt="insomnia" />
        <p>Insomnia</p>
      </div>
      <div className='skill-logo'>
        <img src="tailwind.png" alt="tailwind" style={{ padding: "5px" }} />
        <p>Tailwind</p>
      </div>
      <div className='skill-logo'>
        <img src="bootstrap.png" alt="bootstrap" />
        <p>Bootstrap</p>
      </div>
      <div className='skill-logo'>
        <img src="git.png" alt="git" />
        <p>Git</p>
      </div>
    </>
  )
}

export default Skill
