import './Skill.css';

function Skill() {
  return (
    <>
      <div className='skill-logo'>
        <img src="assets/icons/node.png" alt="node" />
        <p>Node.js</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/react.png" alt="react" />
        <p>React</p>
      </div>
      <div className='skill-logo' style={{ whiteSpace: "nowrap" }}>
        <img src="assets/icons/rails.png" alt="rails" />
        <p>Ruby On Rails</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/javascript.png" alt="js" />
        <p>Javascript</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/html.png" alt="html" />
        <p>Html</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/css.png" alt="css" />
        <p>Css</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/scss.png" alt="scss" />
        <p>Sass</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/postgresql.png" alt="postgresql" />
        <p>PostgreSQL</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/mongodb.png" alt="mongodb" />
        <p>MongoDB</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/insomnia.svg" alt="insomnia" />
        <p>Insomnia</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/tailwind.png" alt="tailwind" style={{ padding: "5px" }} />
        <p>Tailwind</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/bootstrap.png" alt="bootstrap" />
        <p>Bootstrap</p>
      </div>
      <div className='skill-logo'>
        <img src="assets/icons/git.png" alt="git" />
        <p>Git</p>
      </div>
    </>
  )
}

export default Skill
