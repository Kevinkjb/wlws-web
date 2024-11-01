import logo from '../../images/icons/logo.png';
import { useState } from 'react';
import './navbar.css'
import {Link} from 'react-router-dom'
import { FaHeart } from "react-icons/fa";


import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import DropDown from '../Dropdown/DropDown';

const Navbar = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);
    const closeMobile = () => {
        scrollToTop();
        setBurgerMenu(false);
      };
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
  return (
    <>
        <div className='nav-container'>
                <div className="nav-logo">
                    <Link to="/">
                        <img className='logo' src={logo} alt="WLWS Logo" />
                    </Link>
                    <p className='logo-text'>Wetaskiwin Literacy & Wellness Services LTD</p>
                </div>
                <ul  className={`nav-item ${burgerMenu ? 'active' : ''}`}>
                    <li className="nav-list">
                        <Link to="/about" className='nav-link' onClick={closeMobile}>About</Link>
                    </li>
                    <li className="nav-list">
                        <Link to="/services" className='nav-link' onClick={closeMobile}>Services</Link>
                    </li>
                    <li className="nav-list">
                        <Link to="/events" className='nav-link ' onClick={closeMobile}>Events</Link>
                    </li>
                    <li className="nav-list">
                        <Link to="/contact" className='nav-link' onClick={closeMobile}>Contact Us</Link>
                    </li>

                    <DropDown/>

                    <li className="nav-list">
                        <a className='nav-link' href='#' target='_blank'>Donate Now <FaHeart className='heart-icon'/></a>
                    </li>
                </ul>
                <div className='nav-button' onClick={() => setBurgerMenu(!burgerMenu)}>
                    {burgerMenu ? <IoCloseSharp className='close-menu' /> : <GiHamburgerMenu className='burger-menu' />}
                </div>
        </div>
    </>
    
  )
}

export default Navbar
