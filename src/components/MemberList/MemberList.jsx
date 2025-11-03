import marlon from '../../images/new-image-members/marlon.jpg';
import gerald from '../../images/new-image-members/gerald.jpg';
// import normita from '../../images/members/normita.png';
// import artemio from '../../images/members/artemio.png';
import adel from '../../images/new-image-members/adel.jpg';
import marsha from '../../images/new-image-members/marsha.jpg';
import shirley from '../../images/new-image-members/shirley.jpg';
import nelly from '../../images/new-image-members/nelly.jpg';
import steph from '../../images/new-image-members/steph.jpg';
import './member.css';

const MemberList = () => {
  return (
    <>
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
            <img className='member-img' src={steph} alt="Stephanie Strormquist" />
            {/* <img className='member-img' src={normita} alt="Normita Santos" /> */}
        </div>
        <div className="member member-four">
          <img className='member-img' src={adel} alt="Adelaida Lauro" />

        </div>
        {/* <div className="member member-five">

        </div> */}
        <div className="member member-five">
          <img className='member-img' src={nelly} alt="Nelly Vigil" />
            
        </div>
        <div className="member member-six">
            <img className='member-img' src={shirley} alt="Shirley Badua" />
        </div>
        <div className="member member-seven">
            <img className='member-img' src={marsha} alt="Marsha Merchant" />
        </div>
      </div>
    </>
  )
}

export default MemberList
