import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './dropdown.css'

const DropDown = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Join Us" className="toggle"  variant="none">
      <Dropdown.Item className='drop-item' href="https://forms.gle/NZhWKrvfrpgn4mEw8" target='_blank'>Vendor</Dropdown.Item>
      <Dropdown.Item className='drop-item' href="#">Performer</Dropdown.Item>
      <Dropdown.Item className='drop-item' href="#">Volunteer</Dropdown.Item>
    </DropdownButton>
  )
}

export default DropDown
