import './cta.css'
import {Link} from 'react-router-dom'
const CallToAction = () => {
  return (
    <div className='cta-container'>
      <div className="cta-section">
        <h2 className='cta-title'>Join Us!</h2>
        <p className='cta-text'>
            Celebrate community, culture, and giving back! 
            Join us for a day of fun, food, and live entertainment.  
            {` Bring your friends, family, and neighbours - let's make a difference together!`}
        </p>

          <button className='cta-btn'>
            <Link to="/events" className='cta-link'>
              Learn More
            </Link>
          </button>


      </div>
    </div>
  )
}

export default CallToAction
