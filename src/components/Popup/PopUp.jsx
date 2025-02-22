/* eslint-disable react/prop-types */
import { FaRegWindowClose } from "react-icons/fa";
import './popup.css'
const PopUp = (props) => {
  return (props.trigger) ? (
    <div>
      <div className="popup">
        <div className="popup-inner">
            <FaRegWindowClose className="close-btn" onClick={() => props.setTrigger(false)}>close</FaRegWindowClose>
            {props.children}
        </div>
      </div>
    </div>
  ) : "";
}

export default PopUp
