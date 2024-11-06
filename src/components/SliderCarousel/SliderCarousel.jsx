import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import alexis from '../../images/wfcf/Alexis.png'
import armie from '../../images/wfcf/Armie.png'
import arnel from '../../images/wfcf/Arnel.png'
import boni from '../../images/wfcf/Boni.png'
import charina from '../../images/wfcf/Charina.png'
import janet from '../../images/wfcf/Janet.png'
import adel from '../../images/wfcf/adel.png'
import jen from '../../images/wfcf/Jen.png'
import jerome from '../../images/wfcf/Jerome.png'
import romel from '../../images/wfcf/Romel.png'
import marlon from '../../images/wfcf/marlon.png'
import gerald from '../../images/wfcf/gerald.png'
import nelly from '../../images/wfcf/nelly.png'
import leo from '../../images/wfcf/leo.png'
import shirley from '../../images/wfcf/shirley.png'
import normita from '../../images/wfcf/normita.png'
import juanita from '../../images/wfcf/juanita.png'
import art from '../../images/wfcf/art.png'
import './slider.css'
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 340 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const sliderImageUrl = [
    //First image url
    {
      url:
      marlon
    },
    {
      url:
      jen
    },
    //Second image url
    {
      url:
      adel
    },
    //Third image url
    {
      url:
      gerald
    },
  
    //Fourth image url
  
    {
        url:
        normita
    },
    {
        url:
        juanita
    },
    {
        url:
        janet
    },
    {
        url:
        romel
    },
    {
      url:
      alexis
    },
    {
      url:
      jerome
    }
    ,
    {
      url:
      leo
    },
    {
      url:
      charina
    }
    ,
    {
      url:
      armie
    },
    {
      url:
      arnel
    },
    {
      url:
      boni
    },
    {
      url:
      art
    },
    {
      url:
      nelly
    },
    {
      url:
      shirley
    }


  ];

  
  const SliderCarousel = () => {
    return (
<div className="parent">
            <h2 className="slide-title">WFCF Members</h2>
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              partialVisible={false}
              focusOnSelect={true}
              arrows={true}
              ssr={true} // means to render carousel on server-side.
            >
            {sliderImageUrl.map((imageUrl, index) => {
            return (
                <div className="slider" key={index}>
                <img src={imageUrl.url} alt="WFCF Gallery" />
                </div>
            );
            })}
            </Carousel>
        </div>
    )
  }
  
  export default SliderCarousel
  