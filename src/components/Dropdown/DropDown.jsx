import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './dropdown.css'

const DropDown = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Join Us" className="toggle"  variant="none">
      <Dropdown.Item className='drop-item' href="#">Perform</Dropdown.Item>
      <Dropdown.Item className='drop-item' href="#">Vendor</Dropdown.Item>
    </DropdownButton>
  )
}

export default DropDown
