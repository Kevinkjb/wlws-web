import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './dropdown.css'

const DropDown = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Join Us" className="toggle"  variant="none">
      <Dropdown.Item className='drop-item' href="https://docs.google.com/forms/d/1cxCfEqPI89PQw_37ElrmwRO9n35dPSbl5gHeFB16Uv8/viewform?pli=1&pli=1&edit_requested=true" target='_blank'>Vendor</Dropdown.Item>
      <Dropdown.Item className='drop-item' href="https://docs.google.com/forms/d/1aXYwv0YNNxhrl0yaJng2cAevui57YY13iZoIrJ-47Ew/viewform?edit_requested=true" target='_blank'>Performer</Dropdown.Item>
      <Dropdown.Item className='drop-item' href="https://docs.google.com/forms/d/105tZQJHAtGt1Dx1721b8_kQTiBnfzXbJ6ZgpKwbhhr8/viewform?edit_requested=true" target='_blank'>Volunteer</Dropdown.Item>
    </DropdownButton>
  )
}

export default DropDown
