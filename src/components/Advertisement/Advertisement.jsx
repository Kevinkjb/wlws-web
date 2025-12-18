import './advertisement.css'
// import advertisement from './advertisement-one.jpg'
const Advertisement = () => {
  return (
    <div>
      <div className="advertisement-container">
        <h2 className="advertisement-title">Join us for the Wetaskiwin Multicultural Heritage Festival 2026! </h2>
        <p className="advertisement-text">
            Celebrate the rich diversity of our community at the Wetaskiwin Multicultural Heritage Festival! 
            Experience the vibrant cultures that make Wetaskiwin unique through delicious food, lively performances, 
            amazing amusement rides, and exciting activities for all ages.
        </p>
        <ul className="advertisement-item">
            <li className="advertisement-list">Dance to the beat of the world’s rhythms</li>
            <li className="advertisement-list">Savor flavors from every corner of the globe</li>
            <li className="advertisement-list">Explore cultural exhibits and hands-on crafts!</li>
        </ul>
        <p className="advertisement-text">Don’t miss out on this unforgettable event – bring your family and friends to celebrate diversity and unity. Let’s make memories together!</p>
        <p className="advertisement-text advertisement-info">Date: July 3-5, 2026</p>
        <p className="advertisement-text advertisement-info">Location: Jubilee Park, Wetaskiwin, Alberta</p>
        <p className="advertisement-text advertisement-info">OUTDOOR: Free Admission | Fun for Everyone!</p>
        {/* <img src={advertisement} alt="Advertisement Image" className='advertisement-img'/> */}
      </div>
    </div>
  )
}

export default Advertisement
