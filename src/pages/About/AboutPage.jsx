import CallToAction from '../../components/CTA/CallToAction'
import Footer from '../../components/FooterSection/Footer'
import MemberList from '../../components/MemberList/MemberList'
import MissionSection from '../../components/MissionSection/MissionSection'
import './about-page.css'
import Navbar from '../../components/Navbar/Navbar';
import aboutImage from '../../images/background/about.png'
const AboutPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="hero-sub" >
        <div className="hero-section-two">
            <h1 className="about-title">About Us</h1>
        </div>
      </div>
      {/* ABOUT PAGE SECTION */}
      <div className="about-page-section">
        <div className="about-info-section">
          <div className="about-page-header">
              <h2 className="about-page-title">Why We Exist</h2>
              <hr  className="about-page-hr"/>
          </div>
          <div className="about-page-info">
            <p className='about-page-text'>
            {
              `Wetaskiwin Literacy & Wellness Services Ltd is a registered nonprofit company that is dedicated primarily to addressing the 
              foundational needs that enhance an individual's quality of life and contribute to the overall health and progress of the community. 
              By combining literacy and wellness initiatives, communities can create a holistic approach to improving quality of life and fostering sustainable development. `
            }
            </p>
            <p className='about-page-text'>
              In essence, literacy and wellness programs work hand in hand to build stronger, healthier, and more educated communities. 
              They help people achieve personal and economic goals, foster self-reliance, resilience, create a society that values knowledge, well-being, 
              and inclusivity, promoting a culture of empowerment resulting in a better quality of life for all.
            </p>
          </div>
        </div>
        {/* IMAGE SECTION */}
        <div className="about-img-section">

            <div className="about-page-container">
                <div className="about-box"></div>
                <div className='about-page-img-containter'>
                  <img className='about-page-img' src={aboutImage} alt="" />
                </div>
            </div>

        </div>
      </div>
      <hr className="about-hr"/>
      {/* MISION, VISION, VALUES */}
      <MissionSection/>
      {/* MEMBERS LIST SECTION */}
      <MemberList/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default AboutPage
