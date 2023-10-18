import React from 'react'
import './Skill.css';

function Skill() {
  return (
    <>
      <div className='skill-logo'>
        <img src="assets/icons/node.png?as=webp" alt="node" />
        <p>Node.js</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/react.png?as=webp" alt="react" />
        <p>React</p>
      </div>
      <div className='skill-logo' style={{ whiteSpace: "nowrap" }}>
        <img src="assets/icons/rails.png?as=webp" alt="rails" />
        <p>Ruby On Rails</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/javascript.png?as=webp" alt="js" />
        <p>Javascript</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/html.png?as=webp" alt="html" />
        <p>Html</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/css.png?as=webp" alt="css" />
        <p>Css</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/scss.png?as=webp" alt="scss" />
        <p>Sass</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/postgresql.png?as=webp" alt="postgresql" />
        <p>PostgreSQL</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/mongodb.png?as=webp" alt="mongodb" />
        <p>MongoDB</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/insomnia.svg?as=webp" alt="insomnia" />
        <p>Insomnia</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/tailwind.png?as=webp" alt="tailwind" style={{ padding: "5px" }} />
        <p>Tailwind</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/bootstrap.png?as=webp" alt="bootstrap" />
        <p>Bootstrap</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/git.png?as=webp" alt="git" />
        <p>Git</p>
      </div>
    </>
  )
}

export default Skill
