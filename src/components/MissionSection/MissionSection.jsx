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
                  Literacy, in its broadest sense, encompasses the essential skills that enable individuals to access information, engage meaningfully in society, and participate in a range of life opportunities. 
                  Beyond traditional reading and writing, digital literacy plays an increasingly vital role in the modern world.
                </p>
                <p className="mission-text">
                  It equips people with the skills needed to navigate digital tools, access online information, and communicate effectively through technology. 
                  It fosters a sense of self-worth, inclusion, and empowerment, enabling individuals to make informed decisions, achieve independence, and secure employment. 
                  These competencies are key to building a more equitable society where everyone can thrive.
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
