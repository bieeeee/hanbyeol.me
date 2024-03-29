import ImageSlider from './ImageSlider'
import './Slider.css'

function ZapfitSlider() {
  const slides =[
    {url: "assets/projects/Zapfit/1.jpg"},
    {url: "assets/projects/Zapfit/2.jpg"},
    {url: "assets/projects/Zapfit/3.jpg"},
    {url: "assets/projects/Zapfit/4.jpg"},
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

export default ZapfitSlider
