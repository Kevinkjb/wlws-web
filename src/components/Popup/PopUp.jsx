/* eslint-disable react/prop-types */
import { FaRegWindowClose } from "react-icons/fa";
import './popup.css'
import { Link } from "react-router-dom";

import popImg from '../../images/advertisement/advertisement.jpg'
const Popup = (props) => {
  const handleImageClick = () => {
    props.setTrigger(false);  // Close the popup when the image is clicked
  };

  return (
    props.trigger ? (
      <div>
        <div className="popup">
          <div className="popup-inner">
            <FaRegWindowClose 
              className="close-btn" 
              onClick={() => props.setTrigger(false)} 
            />
            {/* Add the image and onClick event */}
            <Link to="/events">
              <img 
              src={popImg}
              alt="Close Popup" 
              className="popup-image"
              onClick={handleImageClick}  // Close on image click
            />
            </Link>

            {props.children}  {/* Display the content passed to the Popup */}
          </div>
        </div>
      </div>
    ) : null
  );
}

export default Popup;
