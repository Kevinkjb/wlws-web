import './service-list.css'
// import imageOne from '../../images/services/service1.jpg'
import imageTwo from '../../images/services/employment.png'
// import imageThree from '../../images/services/service3.jpg'
import imageFour from '../../images/services/youth-adult.png'
import imageFive from '../../images/services/tutorial.png'
import imageSix from '../../images/services/community.png'
import digitalLiteracy from '../../images/services/Digital.png'
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
                        A <b>curriculum-based Instruction</b> aims to equip individuals with the skills, knowledge, 
                        and confidence to navigate, analyze, and engage with the digital world essential for 
                        personal growth and employment opportunities.  It includes technical proficiency, 
                        critical thinking, ethical responsibility, and adaptability, ensuring individuals can thrive, 
                        make informed decisions, and contribute meaningfully in the ever-evolving digital landscape, 
                        while enhancing their ability to succeed in the digital workforce.
                    </p>
                    <div className="schedule-section">
                        <p>Delivery Schedules: </p>
                        <p>Wednesdays & Thursdays 10:00 AM - 12:15 PM </p>
                        <p>BASIC DIGITAL LITERACY – FREE</p>
                        <p>ADVANCED DIGITAL LITERACY – $10/hr</p>
                        <p>Pre-registration Required: 6 clients minimum</p>
                    </div>
                    {/* <a href="">
                        <button className='services-book'>Book appointment</button>
                    </a> */}
                </div>
            </div>
            <div className="service-content">
                <img src={imageTwo} alt="" className="service-list-img employment" />
                
                <div className="service-list-info">
                    <p className='service-list-title'>Pre-Employment Literacy</p>
                    <p className='service-list-text'>
                        Aims to equip <b>individuals including newcomers</b> with the essential skills needed to successfully
                         enter and thrive in the workforce. This program focuses on leadership workshops and English language training.
                          Together, these components aim to prepare participants not only to secure employment but to contribute positively
                           and effectively within any work environment.
                    </p>
                    <p className='service-list-text'>
                        <b>Leadership Workshops</b> - focus on fostering clients’ confidence, r
                        esponsibility, and decision-making abilities, as well as soft skills workshops that focus on communication, 
                        teamwork, problem-solving, financial management, and professionalism. 
                    </p>
                    <p className='service-list-text'>
                        <b>English Language Training</b> - focuses on equipping clients with essential workplace vocabulary, 
                        communication skills, and job-seeking strategies. This approach enhances their confidence and readiness for employment by 
                        aligning language learning with real-world job requirements. 
                    </p>
                    <div className="schedule-section">
                        <p>Delivery Schedules: </p>
                        <p>Leadership Workshops: By Schedule (FREE)</p>
                        <p>English Language: Tuesdays 1:00 PM - 3:00 PM - $25/hour(6 clients minimum)</p>
                        <p>Pre-registration Required</p>
                    </div>
                    {/* <a href="">
                        <button className='services-book'>Book appointment</button>
                    </a> */}
                </div>
                
            </div>
            {/* <div className="service-content">
                <img src={imageThree} alt="" className="service-list-img" /> 
                <div className="service-list-info">
                    <p className='service-list-title'>Newcomers</p>
                    <p className='service-list-text'>
                        Eager to learn New Immigrants Literacy, a proactive step for seamless integration, 
                        language proficiency, and thriving in a new community.
                    </p>
                </div>
                 
            </div> */}
            <div className="service-content">
                <img src={imageFour} alt="" className="service-list-img" />
                <div className="service-list-info">
                    <p className='service-list-title'>Youth, Adult & Seniors Wellness</p>
                    <p className='service-list-text'>
                        Aims to promote the overall well-being of individuals by encouraging healthy lifestyles, 
                        mental and emotional resilience, and strong social connections. Through multicultural workshops in sports, dance, 
                        music, and other arts, the program celebrates diversity and encourages participants to learn about and appreciate various cultural traditions. 
                        Other workshops include peer support, and educational sessions, and story-telling/community conversation circles. 
                    </p>
                    <div className="schedule-section">
                        <p>Delivery Schedules: </p>
                        <p>Mondays & Fridays – 10:00 AM - 12:00 PM /2:00 PM - 5:00 PM</p>
                        <p>Minimal Registration Fee/Pre-registration required.</p>
                    </div>
                    {/* <a href="">
                        <button className='services-book'>Book appointment</button>
                    </a> */}
                </div>
                
                
            </div>
            <div className="service-content">
                <img src={imageSix} alt="" className="service-list-img community" /> 
                <div className="service-list-info">
                    <p className='service-list-title'>Community Supports</p>
                    <p className='service-list-text'>
                        Aim to foster inclusivity, cultural awareness, and a strong sense of belonging by bringing people together through shared experiences. 
                        It also aims to strengthen relationships within the community and build a more vibrant, respectful, and united society.
                    </p>
                    <p className='service-list-text'>
                        <b>Tax Clinic</b> - 
                        provides free tax assistance to senior citizens by helping them navigate basic tax systems and access eligible benefits. 
                        It also fosters financial literacy and promotes economic stability within the community
                    </p>
                    <div className="schedule-section">
                        <p>Delivery Schedules: </p>
                        <p>BY APPOINTMENT (FREE)</p>
                        <p>Mondays & Fridays – 12:00 PM - 1:00 PM /4:00 PM- 5:00 PM</p>
                        <p>Saturdays: 1:00 PM - 3:00 PM</p>
                    </div>
                    {/* <a href="">
                        <button className='services-book'>Book appointment</button>
                    </a> */}
                </div>
                
            </div>
            
            <div className="service-content">
                <img src={imageFive} alt="" className="service-list-img tutorial-image" />
                <div className="service-list-info">
                    <p className='service-list-title'>Tutorial Services </p>
                    <p className='service-list-text'>
                        Aim to support students in strengthening their understanding of <b>mathematical concepts or computer skills </b>   
                        and improving their academic performance. By offering one-on-one or personalized instruction, practice sessions, and problem-solving strategies, 
                        the program aims to build confidence, enhance critical thinking skills, and develop a positive attitude toward learning math or computers. 
                    </p>
                    <div className="schedule-section">
                        <p>Delivery Schedules: </p>
                        <p>Wednesdays & Fridays/ 4:00 PM - 6:00 PM</p>
                        <p>Basic Math to Advanced Calculus </p>
                        <p>Basic and Advanced Computer Literacy</p>
                        <p>Pre-registration required(2 clients minimum) – Cost: $25/hr</p>
                    </div>
                    {/* <a href="">
                        <button className='services-book'>Book appointment</button>
                    </a> */}
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceListPage
