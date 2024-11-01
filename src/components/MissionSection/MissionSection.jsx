import mission from '../../images/icons/leadership.png';
import vision from '../../images/icons/idea.png';
import values from '../../images/icons/value.png';
import './mission.css'
const MissionSection = () => {
  return (
    <>
      <div className="mission-container">
        <div className="mission-section">
            <div className="mission">
                <img className='mission-img' src={mission} alt="Our Mission" />
                <p className="mission-title">Our Mission</p>
                <p className="mission-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin diam  mauris, ornare ut finibus id, semper non purus.
                </p>
            </div>
            <div className="vision">
                <img className='vision-img' src={vision} alt="Our Mission" />
                <p className="vision-title">Our Vision</p>
                <p className="vision-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin diam  mauris, ornare ut finibus id
                </p>
            </div>
            <div className="values">
                <img className='values-img' src={values} alt="Our Mission" />
                <p className="values-title">Our Values</p>
                <p className="values-text">
                    Guided by integrity, empowerment, diversity, innovation, equity, and  compassion, 
                    Wetaskiwin Literacy Wellness Services is committed to fostering an inclusive community enriched by trust, 
                    opportunity, and dignity for all  individuals.
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default MissionSection
