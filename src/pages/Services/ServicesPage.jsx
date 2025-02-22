import Footer from '../../components/FooterSection/Footer';
import Navbar from '../../components/Navbar/Navbar';
import ServiceListPage from '../../components/ServiceList/ServiceListPage';

const ServicesPage = () => {

  return (
    
    <div>
      <Navbar/>

      <div className="hero-sub" >

        <div className="hero-section-two">
            <h1 className="about-title">Our Services</h1>
        </div>
      </div>
      <ServiceListPage/>
      <Footer/>
    </div>
  )
}

export default ServicesPage
