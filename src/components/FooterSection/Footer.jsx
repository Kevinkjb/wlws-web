import { FaFacebook, FaEnvelope  } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import logo from '../../images/icons/logo.png'
import {Link} from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (
    <>
    <div className="footer-container">
    <div className="footer-section">
      <div className="footer-logo">
          <Link to="/">
              <img className="footer-img" src={logo} alt="Footer Logo" />
          </Link>
          <p className="footer-text">
              Wetaskiwin Literacy <br />
              & Wellness Services LTD
          </p>
      </div>
      {/* FOOTER QUICK LINKS */}
      <div className="quick-links">
          <p className="footer-title">Quick Links</p>
          <div className="footer-list-section">
              <ul className="footer-item">
                  <li className="footer-list">
                      <Link to="/" className="footer-link">Home</Link>
                  </li>
                  <li className="footer-list">
                      <Link to="/about" className="footer-link">About</Link>
                  </li>
                  <li className="footer-list">
                      <Link to="/services" className="footer-link">Services</Link>
                  </li>
              </ul>
              <ul className="footer-item">
                  <li className="footer-list">
                      <Link to="/events" className="footer-link">Events</Link>
                  </li>
                  <li className="footer-list">
                      <Link to="/contact" className="footer-link">Contact Us</Link>
                  </li>
                  <li className="footer-list">
                      <Link className="footer-link" to="/donate">Donate Now</Link>
                  </li>
              </ul>
          </div>

      </div>
      {/* FOOTER CONTACT INFO */}
      <div className="footer-contact">
          <p className="footer-title">
              Contact Us
          </p>
          <div className="footer-icon-container">
              <div className="footer-phone">
                  <IoMdPhonePortrait className="footer-icon"/>
                  <a  href="tel:7803620909">780-362-0909</a>
              </div>
              <div className="footer-mail">
                  <FaEnvelope className="footer-icon"/>
                  <a className="footer-email" href="mailto:wetaskiwinliteracyservices@gmail.com">wetaskiwinliteracyservices@gmail.com</a>
              </div>
          </div>
          <div className="social-icon" style={{marginTop: '2rem'}}>
              <p className="footer-title">Follow Us</p>
              <a href="https://www.facebook.com/p/wetaskiwin-united-heritage-festival-61554739525516/" className="footer-social-fb" target="_blank" alt="Facebook" aria-label="Facebook Link">
                  <FaFacebook className="footer-icon" alt="Facebook"/>
              </a>
              
          </div>
      </div>
      
      {/* JOIN US SECTION LINKS */}
      <div className="join-link">
          <p className="footer-title">Join Us</p>
          <ul className="footer-item">
              <li className="footer-list">
                  <a className="footer-social-link" href="https://forms.gle/NZhWKrvfrpgn4mEw8" target="_blank">Vendors</a>
              </li>
              <li className="footer-list">
                  <a className="footer-social-link" href="https://docs.google.com/forms/d/1FA9XqGmd9yrio1TyQO_z5KjqZ2Y3hd6_ihfj9_7ejNI/edit" target='_blank'>Performers</a>
              </li>
              <li className="footer-list">
                  <a className="footer-social-link" href="https://docs.google.com/forms/d/1_p4GXf72x5tPzPy5Pc6GHwrTyqEvvqyhyEfD5oGnOxM/edit" target='_blank'>Volunteers</a>
              </li>
          </ul>
      </div>
    </div>

    </div>
    <div className="copyrights">
        <p>Wetaskiwin Literacy Wellness Services LTD © 2024 | Designed and Developed by <a className="copy-link" href="https://raydenwebstudio.com/" target="_blank">Rayden Web Studio</a></p>
    </div>
    </>
    
  )
}

export default Footer
