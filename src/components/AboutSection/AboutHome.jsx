import './about-home.css';
import aboutImage from './about.jpg'

const AboutHome = () => {
  return (
    <>
      <div className="about-home-container">
        {/* ABOUT INFO SECTION */}
        <div className="about-home-info">
            <div className="about-home-header">
                <h2 className="about-home-title">Why Wetaskiwin Literacy Wellness Services</h2>
                <hr className="about-hr"/>
            </div>
            <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin diam  mauris, ornare ut finibus id, semper non purus. 
                Mauris luctus ligula a  odio congue pharetra. 
                In hac habitasse platea dictumst. 
                Fusce faucibus  tellus sed nulla feugiat mollis suscipit et sapien. 
                Quisque fermentum  mauris in convallis egestas. 
                Ut ultricies erat at venenatis rutrum.  
            </p>
            {/* <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin diam  mauris, ornare ut finibus id, semper non purus. 
                Mauris luctus ligula a  odio congue pharetra. 
                In hac habitasse platea dictumst. 
            </p> */}
            <button className="about-btn">Learn More</button>
        </div>
        {/* ABOUT IMAGE SECTION */}
        <div className="about-img-section">

            <div className="img-container">
                <div className="box"></div>
                <div className='about-img-container'>
                  <img className='about-img' src={aboutImage} alt="Wetaskiwin Literacy & Wellness Services" />
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default AboutHome
