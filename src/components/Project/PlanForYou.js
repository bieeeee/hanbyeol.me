import '../Modal/Modal.css'
import PlanforSlider from "../Slider/PlanforSlider"

function PlanForYou() {
  return (
    <>
      <div className='project-content'>
        <PlanforSlider />
        <div style={{marginLeft: '5px', marginBottom: '13px'}}>
          <p>
            The app automatically creates a seating chart by enabling guests to select their preferred seating partners through personalized invitation emails. This ensures a seamless and enjoyable experience for all guests.
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
          <a href='https://planforyou.herokuapp.com' target='_blank' rel="noreferrer noopener" className='skill-logo' style={{textDecoration: 'none'}}>
            <img src="assets/icons/internet.png?as=webp" alt="link" />
            <p>Site.html</p>
          </a>
          <a href='https://youtu.be/3jZFHTANuRQ?t=1766' target='_blank' rel="noreferrer noopener" className='skill-logo' style={{textDecoration: 'none'}}>
            <img src="assets/icons/video.png?as=webp" alt="video" />
            <p>Demo.mp4</p>
          </a>
          <a href='https://github.com/bieeeee/PLAN4U' target='_blank' rel="noreferrer noopener" className='skill-logo' style={{textDecoration: 'none'}}>
            <img src="assets/icons/github.png?as=webp" alt="repo" />
            <p>Source</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default PlanForYou
