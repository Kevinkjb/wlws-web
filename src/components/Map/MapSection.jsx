
import './map.css'
const MapSection = () => {
  return (
    <div className='office-hours-section'>
        <div className="map-container">
            <iframe 
                className="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38444.139984771966!2d-113.37807565!3d52.9707542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53754e3a0e182599%3A0x117840d97fd37a40!2sWetaskiwin%2C%20AB!5e0!3m2!1sen!2sca!4v1740677351210!5m2!1sen!2sca" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
        <div className="services-hours">
            <h4 className='footer-title'>Services Hours</h4>
            <div className="footer-hours">
                <p><span className='hours-span'>Monday: </span> 11:00AM - 8:00PM</p>
                <p><span className='hours-span'>Tuesday: </span> 11:00AM - 8:00PM</p>
                <p><span className='hours-span'>Wednesday: </span> 11:00AM - 8:00PM</p>
                <p><span className='hours-span'>Thursday: </span> 11:00AM - 8:00PM</p>
                <p><span className='hours-span'>Friday: </span> 11:00AM - 8:00PM</p>
                <p><span className='hours-span'>Saturday: </span> 12:00PM - 8:00PM</p>
                <p><span className='hours-span'>Sunday: </span> Closed</p>
            </div>
        </div>
    </div>
  )
}

export default MapSection
