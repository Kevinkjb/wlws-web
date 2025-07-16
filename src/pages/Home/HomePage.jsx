import AboutHome from "../../components/AboutSection/AboutHome"
import CallToAction from "../../components/CTA/CallToAction"
import Footer from "../../components/FooterSection/Footer"
import Hero from "../../components/HeroSection/Hero"
import ServicesSection from "../../components/ServicesSection/ServicesSection"
import Navbar from '../../components/Navbar/Navbar';
import './home-page.css';
import wetaskiwin from '../../images/funders/wetaskiwin.jpeg'
import alberta from '../../images/funders/alberta.jpg'
import collaborator1 from '../../images/collaborator/wfcf.png'
// import collaborator2 from '../../images/collaborator/vision.png'
import collaborator3 from '../../images/collaborator/wehoops.png'
import sponsor1 from '../../images/sponsors/major-sponsors.jpg'
import sponsor2 from '../../images/sponsors/major-sponsors2.png'
import sponsor3 from '../../images/sponsors/major-sponsors3.png'
import sponsor4 from '../../images/sponsors/sponsor1.jpg'
import sponsor5 from '../../images/sponsors/sponsor2.png'
import sponsor6 from '../../images/sponsors/sponsor3.webp'
import sponsor7 from '../../images/sponsors/sponsor4.jpg'
import sponsor8 from '../../images/sponsors/sponsor5.jpg'
import sponsor9 from '../../images/sponsors/sponsor6.jpg'
import sponsor10 from '../../images/sponsors/a6b1bcfe2b3ef6af486c4f5bee3bc0a06d2d29a6_logo.png'
// import advertisement from '../../images/advertisement/advertisement-one.jpg'
// import PopUp from "../../components/Popup/PopUp"
// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"


const HomePage = () => {
  // const [timePopup, setTimePopup] = useState(false)
  // useEffect(() => {
  //   setTimeout(()=>{
  //     setTimePopup(true)
  //   }, 3000)
  // }, [])
  
  return (
    <>
      <Navbar/>
      {/* <PopUp trigger={timePopup} setTrigger={setTimePopup}>
        <Link to='events'>
        <img src={advertisement} className="advertisement-home-img" alt="" />
        </Link>
      </PopUp> */}
      <div className="home-hero" >

        <Hero/>
      </div>
      <AboutHome/>
      <hr className="home-hr"/>
      {/* FUNDERS SECTION */}
      <div className="funders">
          <div className="funders-header">
              <h2 className="funders-title">Our Funders</h2>
              <hr className="funders-hr"/>
          </div>
          <div className="funders-container">
            <div >
              <a href="https://www.wetaskiwin.ca/" target="_blank">
                <img className="funder-box" src={wetaskiwin} alt="Wetaskiwin" />
              </a>
            </div>
            <div >
              <a href="https://www.alberta.ca/" target="_blank">
                <img className="funder-box" src={alberta} alt="Alberta" />
              </a>
            </div>
          </div>
      </div>
      {/* COLLABORATOR SECTION */}
      <div className="collaborator">
          <div className="collaborator-header">
              <h2 className="collaborator-title">Collaborators</h2>
              <hr className="collaborator-hr"/>
          </div>
          <div className="collaborator-container">
            <div className="collaborator-box">
              <a href="https://www.facebook.com/WFCF2018" target="_blank">
                <img className="collab-logo" src={collaborator1} alt="Wetaskiwin Filipino Community Foundation" />
              </a>
            </div>
            <div className="collaborator-box">
              <a href="https://wehoops.ca/" target="_blank">
                <img className="collab-logo"  src={collaborator3} alt="Wehoops" />
              </a>
            </div>
            {/* <div className="collaborator-box">
              <a href="https://www.visioncu.ca/en/home" target="_blank">
                <img className="collab-logo"  src={collaborator2} alt="Vision Credit Union" />
              </a>
            </div> */}
          </div>
      </div>
      {/* SPONSOR SECTION */}
      <div className="sponsor">
          <div className="sponsor-header">
              <h2 className="sponsor-title">Major Sponsors</h2>
              <hr className="sponsor-hr"/>
          </div>
          <div className="sponsor-container">
            <div className="sponsor-box">
              <a href="https://aquinascollege.ca/" target="_blank">
                <img className="sponsor-logo"  src={sponsor10} alt="Vision Credit Union" />
              </a>
            </div>
            <div className="sponsor-box">
              <a href="https://aquinascollege.ca/" target="_blank">
                <img className="sponsor-logo"  src={sponsor1} alt="Aquinas College" />
              </a>
            </div>
            <div className="sponsor-box">
              <img className="sponsor-logo"  src={sponsor2} alt="International Auto Finance" />
            </div>
            <div className="sponsor-box">
              <a href="https://dfwi.ca/" target="_blank">
                <img className="sponsor-logo"  src={sponsor3} alt="DFW Career Services" />
              </a>
            </div>
            <div className="sponsor-box">
              <a href="https://ralcomm.com/" target="_blank">
                <img className="sponsor-logo"  src={sponsor4} alt="Ralcomm" />
              </a>
            </div>
            <div className="sponsor-box">
              <a href="https://www.facebook.com/prod.variety" target="_blank">
                <img className="sponsor-logo"  src={sponsor5} alt="Variety Productions" />
              </a>
            </div>
            <div className="sponsor-box">
              <a href="" target="_blank">
                <img className="sponsor-logo"  src={sponsor6} alt="Northlane" />
              </a>
            </div>
            <div className="sponsor-box">
              <a href="https://www.dynacoremedical.com/" target="_blank">
                <img className="sponsor-logo"  src={sponsor7} alt="Dynacore Medical and Orthotics" />
              </a>
            </div>
            <div className="sponsor-box">
              <a href="https://www.facebook.com/profile.php?id=100068778164866" target="_blank">
                <img className="sponsor-logo"  src={sponsor8} alt="Holistic Touch Wellness" />
              </a>
            </div>
            <div className="sponsor-box">
              <a href="/" target="_blank">
                <img className="sponsor-logo"  src={sponsor9} alt="E-Sound" />
              </a>
            </div>
          </div>
      </div>
      <CallToAction/>
      <ServicesSection/>
      <Footer/>

    </>

  )
}

export default HomePage
