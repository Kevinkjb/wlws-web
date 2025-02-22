import './service-list.css'
// import imageOne from '../../images/services/service1.jpg'
import imageTwo from '../../images/services/service2.jpg'
import imageThree from '../../images/services/service3.jpg'
import imageFour from '../../images/services/service4.jpg'
import imageFive from '../../images/services/service7.jpg'
import imageSix from '../../images/services/service6.png'
import digitalLiteracy from '../../images/services/Digital Literacy.jpg'
const ServiceListPage = () => {
  return (
    <div>
      <div className="services-list-section">
        <div className="service-list">
            <div className="service-content">
                <img src={digitalLiteracy} alt="Digital Literacy" className="service-list-img digital" />
                <div className="service-list-info">
                    <p className='service-list-title'>Digital Literacy</p>
                    <p className='service-list-text'>
                        It aims to equip individuals with the skills, knowledge, and confidence to navigate, analyze, and engage with the digital world, 
                        essential for personal growth and employment opportunities. It includes technical proficiency, critical thinking, ethical responsibility, 
                        and adaptability, ensuring individuals can thrive, make informed decisions, and contribute meaningfully in an ever-evolving digital landscape, 
                        while enhancing their ability to succeed in the digital workforce.
                    </p>
                </div>
            </div>
            <div className="service-content">
                <img src={imageTwo} alt="" className="service-list-img" />
                
                <div className="service-list-info">
                    <p className='service-list-title'>Pre-Employment Literacy</p>
                    <p className='service-list-text'>Keen on mastering Pre-Employment Literacy, 
                        signaling a proactive approach to boost 
                        employability and excel in the dynamic professional and personal growth.
                    </p>
                </div>
                
            </div>
            <div className="service-content">
                <img src={imageThree} alt="" className="service-list-img" /> 
                <div className="service-list-info">
                    <p className='service-list-title'>Newcomers</p>
                    <p className='service-list-text'>
                        Eager to learn New Immigrants Literacy, a proactive step for seamless integration, 
                        language proficiency, and thriving in a new community.
                    </p>
                </div>
                 
            </div>
            <div className="service-content">
                <img src={imageSix} alt="" className="service-list-img" /> 
                <div className="service-list-info">
                    <p className='service-list-title'>Youth Wellness</p>
                    <p className='service-list-text'>
                        Keen on learning Youth Wellness to empower 
                        young individuals for a balanced and thriving life.
                    </p>
                </div>
                
            </div>
            <div className="service-content">
                <img src={imageFour} alt="" className="service-list-img" />
                <div className="service-list-info">
                    <p className='service-list-title'>Adult & Seniors Wellness</p>
                    <p className='service-list-text'>
                        Passionate about promoting the well-being of adults and seniors through a proactive approach, 
                        aiming to enhance both physical and mental health, and foster a fulfilling lifestyle.
                    </p>
                </div>
                
            </div>
            <div className="service-content">
                <img src={imageFive} alt="" className="service-list-img tutorial-image" />
                <div className="service-list-info">
                    <p className='service-list-title'>Tutorial Services </p>
                    <p className='service-list-text'>
                        Our dedicated and professional tutors can provide a comprehensive and supportive educational 
                        experience that help students thrive academically and personally.
                    </p>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceListPage
