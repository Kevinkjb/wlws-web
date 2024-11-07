import Footer from "../../components/FooterSection/Footer"
import Navbar from "../../components/Navbar/Navbar"
import './donate.css'
import donateImage from '../../images/background/donation.png'

const Donate = () => {
  return (
    <div>
    <Navbar/>
      <div className="hero-sub" >
        <div className="hero-section-two">
            <h1 className="about-title">Donate</h1>
        </div>
      </div>
      <div className="donation-section" id="donate">
        <div className="donation-info">
          <p className="donation-text">Your donation will help us continue hosting festivals, educational programs, 
            and youth development initiatives that make a lasting impact.</p>
            <div className="donation-box">
              <div className="donation-email-info">
                <p style={{fontWeight: 'bold', color: '#000'}}>E-Transfer:</p>
                <a className="donation-email">wetaskiwinliteracyservices@gmail.com</a>
              </div>
              {/* <div className="donation-email-info">
                <p style={{fontWeight: 'bold', color: '#fff'}}>Donate Online:</p>
                <a className="donation-btn" href="#">Donate Now</a>
              </div> */}
              
             
            </div>
        </div>
        <div className="donation-img">
            <img className="donate-img" src={donateImage} alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Donate
