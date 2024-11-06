import './service-list.css'
import imageOne from '../../images/services/service1.jpg'
import imageTwo from '../../images/services/service2.jpg'
import imageThree from '../../images/services/service3.jpg'
import imageFour from '../../images/services/service4.jpg'
import imageFive from '../../images/services/service5.jpg'
import imageSix from '../../images/services/service6.png'
const ServiceListPage = () => {
  return (
    <div>
      <div className="services-list-section">
        <div className="service-list">
            <div className="service-content">
                <img src={imageOne} alt="" className="service-list-img" />
                <div className="service-list-info">
                    <p className='service-list-title'>English Language Literacy </p>
                    <p className='service-list-text'>Diving into English Language Literacy is a curiosity-driven venture, 
                        unlocking global connections, communication finesse, 
                        and abundant learning opportunities for personal and professional growth.
                    </p>
                </div>
            </div>
            <div className="service-content">
                <img src={imageTwo} alt="" className="service-list-img" />
                
                <div className="service-list-info">
                    <p className='service-list-title'>Pre-employment Literacy</p>
                    <p className='service-list-text'>Keen on mastering Pre-Employment Literacy, 
                        signaling a proactive approach to boost 
                        employability and excel in the dynamic professional arena.al growth.
                    </p>
                </div>
                
            </div>
            <div className="service-content">
                <img src={imageThree} alt="" className="service-list-img" /> 
                <div className="service-list-info">
                    <p className='service-list-title'>New Commers</p>
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
                <img src={imageFive} alt="" className="service-list-img" />
                <div className="service-list-info">
                    <p className='service-list-title'>Tutorial Services </p>
                    <p className='service-list-text'>
                        Eagerly exploring Document Services to find effective and 
                        dependable solutions for a variety of document-related requirements.
                    </p>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceListPage
