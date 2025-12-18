import Footer from "../../components/FooterSection/Footer";
import NavbarTwo from "../../components/Navbar/NavbarTwo";
import './events-page.css';
import performer1 from '../../images/heritage-2025/performer4.jpg';
import performer2 from '../../images/heritage-2025/performers7.jpg';
import performer3 from '../../images/heritage-2025/performer11.jpg';
import vendor1 from '../../images/heritage-2025/vendor1.jpg';
import vendor2 from '../../images/heritage-2025/vendor2.jpg';
import vendor3 from '../../images/vendors/vendor1.png';
import ride1 from '../../images/heritage-2025/rides.jpg';
import ride2 from '../../images/heritage-2025/rides2.jpg';
import ride3 from '../../images/heritage-2025/rides3.jpg';
import volunteer1 from '../../images/heritage-2025/volunteer.jpg';
import volunteer2 from '../../images/heritage-2025/volunteer2.jpg';
import volunteer3 from '../../images/heritage-2025/volunteer4.jpg';
import wfcf from '../../images/members/wfcf.jpg';
import performingArts from '../../images/performing-arts/header-img.png';
import wehoops1 from '../../images/wehoops/wehoops.png';
import wehoops2 from '../../images/wehoops/wehoops1.jpg'
import wehoops3 from '../../images/wehoops/wehoops1.png'
import { useState } from 'react';
import Wfcf from "../../components/SliderCarousel/SliderCarousel";
import Arts from "../../components/SliderCarousel/SliderCarouselTwo";
import Modal from "./Modal/Modal";
import Advertisement from "../../components/Advertisement/Advertisement";

import HeritageFestival from '../../components/SliderCarousel/SliderCarouselThree'
const EventsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(null);

  const openModal = (slideType) => {
    setActiveSlide(slideType);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveSlide(null);
  };
  return (
    <>
      <NavbarTwo/>
      <div className="hero-section-festival">
        <h1 className="about-title">Events</h1>
      </div>
      {/* HEADER SECTION TITLE */}
      <div className="festival-header">
            <div className="festival-title-container">
                <h2 className="festival-title">Festival</h2>
                <div className="sub-container">
                    <p className="festival-subtitle">JOIN US</p>
                    <hr className="festival-hr"/>
                </div>
            </div>
            <p className="festival-text">The Wetaskiwin Literacy & Wellness Services LTD is thrilled to announce the Multicultural Heritage Festival in the City of Wetaskiwin every 1st weekend of July annually, at Jubilee Park.</p>
      </div>
      {/* PERFORMERS SECTION */}
      <div className="performers-section">
        <div className="performers-header">
          <p className="performers-title">Performers</p>
          <hr className="performers-hr"/>
        </div>
        {/* PERFORMERS LIST */}
        <div className="performers-list">
          <div className="performers-one">
            <img className="performer-img" src={performer1} alt="Performer One" />
          </div>
          <div className="performers-two">
            <img className="performer-img" src={performer2} alt="Performer Two" />
          </div>
          <div className="performers-three">
            <img className="performer-img" src={performer3} alt="Performer Three" />
          </div>
        </div>
        <p className="performer-text">
          Performers have the chance to represent their culture through music, dance, or other forms of entertainment. 
          By performing at the festival, they play a key role in spreading cultural appreciation, fostering unity, and entertaining a diverse crowd.
        </p>
        <p className="performer-text-two">Want to perform?</p>
        <a href="https://docs.google.com/forms/d/1FA9XqGmd9yrio1TyQO_z5KjqZ2Y3hd6_ihfj9_7ejNI/edit" target="_blank">
          <button className="events-register-btn">Register Now!</button>
        </a>
      </div>
      {/* VENDOR SECTION */}
      <div className="vendors-section">
        <div className="vendors-header">
          <p className="vendors-title">Vendors</p>
          <hr className="vendors-hr"/>
        </div>
        {/* VENDOR LIST */}
        <div className="vendors-list">
          <div className="vendors-one">
            <img className="vendor-img" src={vendor1} alt="Vendor Image" />
          </div>
          <div className="vendors-two">
            <img className="vendor-img" src={vendor2} alt="Vendor Image" />
          </div>
          <div className="vendors-three">
            <img className="vendor-img" src={vendor3} alt="Vendor Image" />
          </div>
        </div>
        <p className="vendors-text">
          Vendors can showcase their cultural crafts or culinary creations, bringing their unique products to a diverse audience. 
          Participating as a vendor allows individuals to share their heritage while connecting with attendees, 
          making it an excellent way to promote cultural exchange and support local businesses.
        </p>
        <p className="vendors-text-two">Want to setup a booth?</p>
        <a href="https://forms.gle/NZhWKrvfrpgn4mEw8" target="_blank">
          <button className="events-register-btn">Register Now!</button>
        </a>
      </div>
      {/* RIDES SECTION */}
      <div className="rides-section">
        <div className="rides-header">
          <p className="rides-title">Rides</p>
          <hr className="rides-hr"/>
        </div>
        {/* RIDES LIST */}
        <div className="rides-list">
          <div className="rides-one">
            <img className="rides-img" src={ride1} alt="Rides Image" />
          </div>
          <div className="rides-two">
            <img className="rides-img" src={ride2} alt="Rides Image" />
          </div>
          <div className="rides-three">
            <img className="rides-img" src={ride3} alt="Rides Image" />
          </div>
        </div>
      </div>
      {/* VOLUNTEER SECTION */}
      <div className="volunteer-section">
        <div className="volunteer-header">
          <p className="volunteer-title">Volunteers</p>
          <hr className="volunteer-hr"/>
        </div>
        {/* VOLUNTEER LIST */}
        <div className="volunteer-list">
          <div className="volunteer-one">
            <img className="volunteer-img" src={volunteer1} alt="Volunteer Image" />
          </div>
          <div className="volunteer-two">
            <img className="volunteer-img" src={volunteer2} alt="Volunteer Image" />
          </div>
          <div className="volunteer-three">
            <img className="volunteer-img" src={volunteer3} alt="Volunteer Image" />
          </div>
          {/* <div className="rides-two">
            <img className="rides-img" src={ride2} alt="Rides Image" />
          </div>
          <div className="rides-three">
            <img className="rides-img" src={ride3} alt="Rides Image" />
          </div> */}
        </div>
      </div>
      {/* HERITAGE FESTIVAL 2025 SECTION */}
      <div className="heritage-section">
        <div className="heritage-header">
          <p className="heritage-title">Multicultural Heritage Festival 2025</p>
          <hr className="heritage-hr"/>
        </div>
        {/* HERITAGE LIST */}
        <div className="heritage-list">
            <HeritageFestival/>
        </div>
      </div>
      {/* SPONSOR SECTION */}
      <div className="event-sponsor-section">
        <div className="event-sponsor-header">
          <p className="event-sponsor-title">General Sponsors</p>
          <hr className="event-sponsor-hr"/>
        </div>
        {/* SPONSOR LIST */}
        <div className="event-sponsor-list">
          <div className="event-sponsor-one">
            <div className="list-one">
              <p>Remax Descover, Wetaskiwin</p>
              <p>EXP Realty by Larry Matira</p>
              <p>Boston Pizza</p>
              <p>Ireland Sponsor</p>
              <p>Pipe Moore Inc</p>
            </div>
            <div className="list-two">
              <p>Refresh Wellness</p>
              <p>GP Glass & Windshield Ltd.</p>
              <p>Heart & Soul Massage</p>
              <p>Tim Hortons</p>
              <p>Melvie Visto</p>
            </div>
            <div className="list-three">
              <p>CIBC</p>
              <p>Vision Credit Union</p>
              <p>Pipe Stone</p>
              <p>No Frills</p>
              <p>ELJ</p>
            </div>
            <div className="list-four">
              <p>Loons Golf Course</p>
              <p>Carol and Boy Casacop</p>
              <p>Shoppers Drug Mart</p>
            </div>
          </div>
        </div>
      </div>
      {/* WFCF SECTION */}
      {/* WFCF HEADER SECTION TITLE */}
      <div className="wfcf-header">
            <div className="wfcf-title-container">
                <h2 className="wfcf-title">WFCF</h2>
                <div className="wfcf-sub-container">
                    <p className="wfcf-subtitle">JOIN US</p>
                    <hr className="wfcf-hr"/>
                </div>
            </div>
            <p className="wfcf-text">
              Wetaskiwin Filipino Community Foundation is a registered Non-Profit Organization under the Sociéties Act of Alberta: WFCF promotes UNITY to all Filipinos and Filipino-Canadians 
              in Wetaskiwin and other areas of Alberta by engaging in various programs and activities for the well-being of its members.</p>
      </div>
      <div className="wfcf-section">
        {/* WFCF LIST */}
        <div className="wfcf-list">
          <div className="wfcf-one">
            <img className="wfcf-img" src={wfcf} alt="WFCF" onClick={() => openModal('wfcf')}/>
          </div>
          <div className="wfcf-one">
            <img className="wfcf-img" src={performingArts} alt="Performing Arts" onClick={() => openModal('arts')}/>
          </div>
          {/* <div className="wfcf-two">
            <img className="wfcf-img" src={wfcf} alt="" onClick={() => openModal('wehoops')}/>
          </div> */}
          <Modal show={showModal} onClose={closeModal}>
            {activeSlide === 'wfcf' && <Wfcf/>}
            {activeSlide === 'arts' && <Arts/>}
          </Modal>
        </div>
        {/* <p className="wfcf-subtext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin diam  mauris, ornare ut finibus id, semper non purus. 
          Mauris luctus ligula a odio congue pharetra. 
          In hac habitasse platea dictumst. 
        </p> */}
        <a href="https://www.facebook.com/WFCF2018" target="_blank">
          <button className="events-register-btn">Learn More</button>
        </a>
      </div>
        {/* WEHOOPS SECTION */}
      {/* WEHOOPS HEADER SECTION TITLE */}
      <div className="wehoops-header">
            <div className="wehoops-title-container">
                <h2 className="wehoops-title">WEHoopS</h2>
                <div className="wehoops-sub-container">
                    <p className="wehoops-subtitle">JOIN US</p>
                    <hr className="wehoops-hr"/>
                </div>
            </div>
            <p className="wehoops-text">WEHooPS is a dedicated non-profit organization commited to fostering a love for basketball among young athletes.</p>
      </div>
      <div className="wehoops-section">
        {/* WEHOOPS LIST */}
        <div className="wehoops-list">
          <div className="wehoops-one">
            <img className="wehoops-img" src={wehoops1} alt="" />
          </div>
          <div className="wehoops-two">
            <img className="wehoops-img" src={wehoops2} alt="" />
          </div>
          <div className="wehoops-three">
            <img className="wehoops-img" src={wehoops3} alt="" />
          </div>
        </div>
        <p className="wehoops-subtext">
          WEHooPS hosts a variety of engaging events such as basketball tournaments, leagues, and 3v3 competitions. Driven by a passionate team basketball enthusiasts, 
          WEHooPS aims to prove opportunities for everyone to play, improve their skills, and enjoy the game in a supportive and fun environment. 
        </p>
        <a href="https://wehoops.ca/" target="_blank">
          <button className="events-register-btn">Learn More</button>
        </a>
      </div>
      {/* ADVERTISEMENT */}
      <div id="events-page">
       <Advertisement />
      </div>

      {/* SUB HERO SECTION OF EVENTS */}
      <div className="events-hero-section">

      </div>
      {/* DONATION SECTION */}

      <Footer/>
    </>
  )
}

export default EventsPage
