import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/Navbar/Navbar';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

import './contact.css'
const ContactPage = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_number: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = '*Name is required';
    if (!formData.user_email) {
      newErrors.user_email = '*Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = 'Email is invalid';
    }
    if (!formData.user_number.trim()) {
      newErrors.user_number = '*Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.user_number)) {
      newErrors.user_number = 'Phone number should be 10-15 digits';
    }
    if (!formData.message.trim()) newErrors.message = '*Message is required';

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      emailjs
        .sendForm('', '', form.current, {
          publicKey: '',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            console.log('Message Sent!')
            form.current.reset();
            setFormData({ user_name: '', user_email: '', user_number: '', message: '' });
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    } else {
      setErrors(formErrors);
    }
  };
  return (
    <div>
      <Navbar/>
      <div className="hero-sub" style={{color: '#fff'}}>
        <div className="hero-section-two">
            <h1 className="about-title">Contact Us</h1>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            {/* CONTACT HEADER SECTION */}
          <div className="contact-header">
            <div className="contact-title-container">
                <h2 className="contact-title">Get In Touch With Us</h2>
                <div className="contact-sub-container">
                    <p className="contact-subtitle">Contact Us</p>
                    <hr className="contact-hr"/>
                </div>
            </div>
          </div>
            <div className="contact-details">
              <div className="contact-phone">
                <div className="contact-icon-container">
                  <FiPhone className="phone-icon" />
                </div>
                <div className="contact-detail-container">
                  <p className="contact-detail-title">Phone</p>
                  <p className="contact-detail-text">780-362-0909</p>
                </div>
              </div>
              <div className="contact-phone">
                <div className="contact-icon-container">
                  <HiOutlineMail className="email-icon" />
                </div>
                <div className="contact-detail-container">
                  <p className="contact-detail-title">Email</p>
                  <p className="contact-detail-text">wetaskiwinliteracyservices@gmail.com</p>
                </div>
              </div>

            </div>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="name-input">
                <input
                  className="fname"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  value={formData.user_name}
                  onChange={handleChange}
                />
                {errors.user_name && <p className="error-text">{errors.user_name}</p>}
              </div>
              <div className="email-input">
                <input
                  className="email"
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  value={formData.user_email}
                  onChange={handleChange}
                />
                {errors.user_email && <p className="error-text">{errors.user_email}</p>}
              </div>
              <div className="number-input">
                <input
                  className="number"
                  type="text"
                  name="user_number"
                  placeholder="Phone Number"
                  value={formData.user_number}
                  onChange={handleChange}
                />
                {errors.user_number && <p className="error-text">{errors.user_number}</p>}
              </div>
              <div className="message-input">
                <textarea
                  className="message"
                  name="message"
                  placeholder="Please let us know briefly what you're looking for."
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="error-text">{errors.message}</p>}
              </div>
              <div className="button-input">
                <button type="submit" className="contact-button">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactPage
