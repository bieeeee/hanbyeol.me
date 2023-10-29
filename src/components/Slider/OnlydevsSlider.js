import ImageSlider from './ImageSlider'
import './Slider.css'

function OnlydevsSlider() {
  const slides =[
    {url: "assets/projects/Onlydevs/1.jpg"},
    {url: "assets/projects/Onlydevs/2.jpg"},
    {url: "assets/projects/Onlydevs/3.jpg"},
  ];
  const containerStyles = {
    width: '100%',
    height: '270px',
    margin: '0 auto',
    marginBottom: '20px',
    marginTop: '10px'
  };

  return (
    <div className='slider-container' style={containerStyles}>
      <ImageSlider slides={slides} />
    </div>
  )
}

export default OnlydevsSlider
