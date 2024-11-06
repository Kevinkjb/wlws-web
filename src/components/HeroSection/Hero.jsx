import './hero.css'
import { useState, useEffect } from 'react';
import imageOne from '../../images/background/hero4.png'
import imageTwo from '../../images/background/hero-bg2.png'

const Hero = () => {
  const images = [
    imageOne,
    imageTwo

  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );1
    }, 6000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div
    className="hero-slider"
    style={{
      backgroundImage: `url(${images[currentImageIndex]})`
    }}
  >
    <div className="overlay">
      <div className="hero-section">
          <div className="hero-container">
<<<<<<< HEAD
           <h1 className="hero-title">Be A <span style={{color: '#FFAE12'}}>Catalyst</span> Of Change And Together, We Build A <span style={{color: '#FFAE12'}}>Peaceful</span> Community</h1>
=======
           <h1 className="hero-title">Be A Catalyst Of Change And Together, We Build A <span style={{color: '#FFAE12'}}>Peaceful</span> Community</h1>
>>>>>>> 4dd19d16590d90b9bab27f7320f3e262792c4fbd
         </div>
     </div>
    </div>
  </div>
);
  //   <>     
  //       <div className="hero-section">
  //           <div className="hero-container">
  //               <h1 className="hero-title">Be An Agent Of Change And Together, We Build A <span style={{color: '#FFAE12'}}>Peaceful</span> Community</h1>
  //           </div>
  //       </div>
  //   </>
    
  // )
}

export default Hero
