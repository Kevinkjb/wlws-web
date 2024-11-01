import CallToAction from '../../components/CTA/CallToAction'
import Footer from '../../components/FooterSection/Footer'
import MemberList from '../../components/MemberList/MemberList'
import MissionSection from '../../components/MissionSection/MissionSection'
import './about-page.css'
import Navbar from '../../components/Navbar/Navbar';
import aboutImage from '../../images/background/about.jpg'
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Proin diam  mauris, ornare ut finibus id, semper non purus. 
              Mauris luctus ligula a  odio congue pharetra. 
              In hac habitasse platea dictumst. 
              Fusce faucibus tellus sed nulla feugiat mollis suscipit et sapien. 
              Quisque fermentum  mauris in convallis egestas. 
              Ut ultricies erat at venenatis rutrum. 
            </p>
            <p className='about-page-text'>
              Donec id congue elit, at feugiat mi. 
              Donec et lorem faucibus leo tempor  dapibus. 
              Nullam tempus ante quam, nec posuere sem condimentum eget. 
              Cras sollicitudin, dui sit amet feugiat tristique, 
              neque tortor interdum  tortor, malesuada volutpat 
              augue purus sit amet mauris. 
              Morbi semper in  ex ac dictum.
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
