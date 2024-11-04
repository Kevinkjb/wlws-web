import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imageOne from '../../images/wfcf/Alexis.png'
import imageTwo from '../../images/wfcf/Armie.png'
import imageThree from '../../images/wfcf/Arnel.png'
import imageFour from '../../images/wfcf/Boni.png'
import imageFive from '../../images/wfcf/Charina.png'
import imageSix from '../../images/wfcf/Janet.png'
import imageSeven from '../../images/wfcf/Jen.png'
import imageEight from '../../images/wfcf/Jerome.png'
import imageNine from '../../images/wfcf/Romel.png'
import image10 from '../../images/wfcf/marlon.png'
import image11 from '../../images/wfcf/gerald.png'
import image12 from '../../images/wfcf/nelly.png'
import image13 from '../../images/wfcf/leo.png'
import image14 from '../../images/wfcf/shirley.png'
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
      image10
    },
    {
      url:
      imageTwo
    },
    //Second image url
    {
      url:
      imageThree
    },
    //Third image url
    {
      url:
      imageFour
    },
  
    //Fourth image url
  
    {
        url:
        imageFive
    },
    {
        url:
        imageSix
    },
    {
        url:
        imageSeven
    },
    {
        url:
        imageEight
    },
    {
      url:
      imageNine
    },
    {
      url:
      imageOne
    }
    ,
    {
      url:
      image11
    },
    {
      url:
      image12
    }
    ,
    {
      url:
      image13
    },
    {
      url:
      image14
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
  