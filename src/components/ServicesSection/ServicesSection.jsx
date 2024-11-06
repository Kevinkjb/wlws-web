import './service.css'
// import service1 from '../../images/services/service1.jpg'
// import service2 from '../../images/services/service2.jpg'
// import service3 from '../../images/services/service3.jpg'
// import service4 from '../../images/services/service4.jpg'
// import service5 from '../../images/services/service5.jpg'
// import service6 from '../../images/services/service6.png'
import {Link } from 'react-router-dom'
const ServicesSection = () => {
  return (
    <>
      <div className="services-section">
        <div className="service-header">
            <h2 className="services-title">Our Services</h2>
            <hr  className="service-hr"/>
        </div>
        <div className="services-list">
          <Link to='/services'>
              <div className="services-box box-one">
                <p className='menu-one-title'>English Language Literacy</p>
                  {/* <img className='service-img' src={service1} alt="" /> */}
              </div>
          </Link>
            
            <Link to='/services'>
              <div className="services-box box-two">
                <p className='menu-one-title'>Pre-Employment Literacy</p>
                  {/* <img className='service-img'  src={service2} alt="" /> */}
              </div>
            </Link>
            
            <Link to='/services'>
              <div className="services-box box-three">
                <p className='menu-one-title'>New Immigrants Literacy</p>
                  {/* <img className='service-img'  src={service3} alt="" /> */}
              </div>
            </Link>
            <Link to="/services">
              <div className="services-box box-four">
                <p className='menu-one-title'>Adults & Seniors Wellness</p>
                  {/* <img className='service-img'  src={service4} alt="" /> */}
              </div>
            </Link>
            <Link to="/services">
              <div className="services-box box-five">
                <p className='menu-one-title'>Tutorial Services</p>
                  {/* <img className='service-img'  src={service5} alt="" /> */}
              </div>
            </Link>
            <Link to="/services">
              <div className="services-box box-six">
                <p className='menu-one-title'>Youth Wellness</p>
                  {/* <img className='service-img'  src={service6} alt="" /> */}
              </div>
            </Link>
        </div>
      </div>
    </>
  )
}

export default ServicesSection
