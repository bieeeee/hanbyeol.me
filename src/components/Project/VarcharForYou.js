import '../Modal/Modal.css'
import VarcharSlider from '../Slider/VarcharSlider'

function VarcharForYou() {
  return (
    <>
      <div className='project-content'>
        <VarcharSlider />
        <div style={{ marginLeft: '5px', marginBottom: '13px' }}>
          <p>
            Varchar for you is a character rental service web application that connects clients with a diverse catalog of characters for their events. From birthday parties to corporate functions, clients can easily browse, book, and bring a touch of magic to their occasions with a seamless and personalized experience.
          </p>
          <div className='project-tag-container'>
            <p className='project-tag'>Ruby On Rails</p>
            <p className='project-tag'>Javascript</p>
            <p className='project-tag'>HTML</p>
            <p className='project-tag'>SCSS</p>
            <p className='project-tag'>PostgreSQL</p>
            <p className='project-tag'>Bootstrap</p>
          </div>
        </div>
        <div className='modal-content-grid' style={{ border: 'none', marginLeft: '5px' }}>
          <a href='https://github.com/bieeeee/Varchar' target='_blank' rel="noreferrer noopener" className='skill-logo' style={{ textDecoration: 'none' }}>
            <img src="assets/icons/github.png" alt="repo" />
            <p>Source</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default VarcharForYou
