import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './dropdown.css'

const DropDown = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Join Us" className="toggle"  variant="none">
      <Dropdown.Item className='drop-item' href="https://forms.gle/NZhWKrvfrpgn4mEw8" target='_blank'>Vendor</Dropdown.Item>
      <Dropdown.Item className='drop-item' href="https://docs.google.com/forms/d/1FA9XqGmd9yrio1TyQO_z5KjqZ2Y3hd6_ihfj9_7ejNI/edit" target='_blank'>Performer</Dropdown.Item>
      <Dropdown.Item className='drop-item' href="https://docs.google.com/forms/d/1_p4GXf72x5tPzPy5Pc6GHwrTyqEvvqyhyEfD5oGnOxM/edit" target='_blank'>Volunteer</Dropdown.Item>
    </DropdownButton>
  )
}

export default DropDown
