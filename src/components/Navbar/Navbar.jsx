import logo from '../../images/icons/logo.png';
import { useState } from 'react';
import './navbar.css'
import {Link} from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import DropDown from '../Dropdown/DropDown';
import { useRef } from 'react';
const Navbar = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);
    // const [isScrolled, setIsScrolled] = useState(false);
    const [scroll, setScroll] = useState(false)
    const navRef = useRef(null); // NEW: ref to detect outside clicks
    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setBurgerMenu(false);
            }
        };

        if (burgerMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [burgerMenu]);


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
      function setScrolled() {
          if(window.scrollY >= 0){
              setScroll(true)
          } else{
              setScroll(false)
          }
        }
        window.addEventListener("scroll", setScrolled)
        
  return (
    <>
        <div className={scroll ? 'nav-main sticky' : 'nav-main'}>
          <div className="nav-container">
                <div className="nav-logo">
                    <Link to="/">
                        <img className='logo' src={logo} alt="WLWS Logo" />
                    </Link>
                    <p className='logo-text'>Wetaskiwin Literacy & Wellness Services LTD</p>
                </div>
                <ul ref={navRef}  className={`nav-item ${burgerMenu ? 'active' : ''}`}>
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
                    <li className="nav-list donate-list">
                        <Link className=' donate-link' to="/donate">Donate Now <FaHeart className='heart-icon'/></Link>
                    </li>
                </ul>
                <div className='nav-button' onClick={() => setBurgerMenu(!burgerMenu)}>
                    {burgerMenu ? <IoCloseSharp className='close-menu' /> : <GiHamburgerMenu className='burger-menu' />}
                </div>
          </div>
        </div>
    </>
    
  )
}

export default Navbar
