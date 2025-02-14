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
                  Literacy Programs aim to provide individuals with essential skills which enable them to access information, participate in society, 
                  foster a sense of self-worth, inclusion, and secure employment. These skills empower people to make informed decisions and achieve independence.
                </p>
                <p className="mission-text">
                  Wellness Programs aim to teach individuals how to take care of their physical, mental, and emotional well-being. 
                  This knowledge helps people build resilience, reduce stress, and maintain a balanced lifestyle, 
                  which can improve their overall well-being and productivity. This also promotes healthier relationships, communication, and empathy in society.
                </p>
            </div>
            <div className="vision">
                <img className='vision-img' src={vision} alt="Our Mission" />
                <p className="vision-title">Our Vision</p>
                <p className="vision-text">
                  To empower individuals to unlock their full potential through the transformation power of literacy, and holistic wellness, fostering lifelong learning, emotional resilience,
                  and a deep sense of purpose. We envision a community where every person has the skills, resources, and support to lead a balanced, and meaningful life, 
                  equipped to navigate the challenges of an ever-changing world.
                </p>
            </div>
            <div className="values">
                <img className='values-img' src={values} alt="Our Mission" />
                <p className="values-title">Our Values</p>
                <p className="values-text">
                    Guided by integrity, empowerment, diversity, innovation, equity, and compassion, 
                    Wetaskiwin Literacy Wellness Services Ltd is committed to fostering an inclusive community enriched by trust, 
                    opportunity, and dignity for all individuals.
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default MissionSection
