import marlon from '../../images/members/marlon.png';
import gerald from '../../images/members/gerald.png';
import normita from '../../images/members/normita.png';
import artemio from '../../images/members/artemio.png';
import adel from '../../images/members/adel.png';
import juanita from '../../images/members/juanita.png';
import shirley from '../../images/members/shirley.png';
import nelly from '../../images/members/nelly.png';
import './member.css';

const MemberList = () => {
  return (
    <div className="">
      <div className="member-list-header">
        <div className="member-header">
            <h2 className="member-title">WLWS Leadership & Operational Management</h2>
            <hr className="member-hr"/>
        </div>
      </div>
      <div className="member-list-section">
        <div className="member member-one">
            <img className='member-img' src={marlon} alt="Marlon Pinaso" />
        </div>
        <div className="member member-two">
            <img className='member-img' src={gerald} alt="Gerald Achazo" />
        </div>
        <div className="member member-three">
            <img className='member-img' src={normita} alt="Normita Santos" />
        </div>
        <div className="member member-four">
            <img className='member-img' src={artemio} alt="Artemio Limbaga" />
        </div>
        <div className="member member-five">
            <img className='member-img' src={adel} alt="Adelaida Lauro" />
        </div>
        <div className="member member-six">
            <img className='member-img' src={juanita} alt="Juanita Limbaga" />
        </div>
        <div className="member member-seven">
            <img className='member-img' src={shirley} alt="Shirley Badua" />
        </div>
        <div className="member member-eight">
            <img className='member-img' src={nelly} alt="Nelly Vigil" />
        </div>
      </div>
    </div>
  )
}

export default MemberList
