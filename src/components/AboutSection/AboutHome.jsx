import './about-home.css';
import aboutImage from './about.png'
import {Link} from 'react-router-dom'
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
              Wetaskiwin Literacy & Wellness Services Ltd (WLWS) provides a vital support system 
              for individuals in  Wetaskiwin and area by addressing 
              both literacy and wellness needs in one integrated approach.
            </p>
            <p className="about-text">
              Meeting community needs, holistic approach, improved health outcomes, economic empowerment, 
              strengthening social connections, prevention and education, inclusivity, 
              and impact to the community are the reasons why such services are valuable to all individuals.
            </p>
            <p className="about-text">
              In essence, Wetaskiwin Literacy & Wellness Services Ltd plays a crucial role in improving the lives of individuals in the community 
              by addressing the foundational aspects of education and health. 
              By providing both literacy and wellness programming, WLWS supports a healthier, more informed, and more resilient population.
            </p>
            <button className="about-btn">
              <Link to="/about" className='about-home-link'>
                Learn More
              </Link>
            </button>
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
