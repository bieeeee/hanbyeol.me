import '../Modal/Modal.css'
import HanbyeolSlider from '../Slider/HanbyeolSider'

function Hanbyeol() {
  return (
    <>
      <div className='project-content'>
        <HanbyeolSlider />
        <div style={{marginLeft: '5px', marginBottom: '13px'}}>
          <p>
          My personal website inspired by the nostalgia of the good ol' days
          </p>
          <div className='project-tag-container'>
            <p className='project-tag'>React</p>
            <p className='project-tag'>CSS</p>
          </div>
        </div>
        <div className='modal-content-grid' style={{ border: 'none', marginLeft: '5px' }}>
          <a href='https://github.com/bieeeee/hanbyeol.me' target='_blank' rel="noreferrer noopener" className='skill-logo' style={{textDecoration: 'none'}}>
            <img src="assets/icons/github.png?as=webp" alt="repo" />
            <p>Source</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default Hanbyeol
