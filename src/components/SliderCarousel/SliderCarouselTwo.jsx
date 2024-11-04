import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imageOne from '../../images/performing-arts/arts.png'
import imageTwo from '../../images/performing-arts/arts2.png'
import imageThree from '../../images/performing-arts/arts3.jpg'
import imageFour from '../../images/performing-arts/arts4.jpg'
import imageFive from '../../images/performing-arts/arts5.jpg'
import imageSix from '../../images/performing-arts/arts6.jpg'
import imageSeven from '../../images/performing-arts/arts7.jpg'
import imageEight from '../../images/performing-arts/arts9.jpg'
import imageNine from '../../images/performing-arts/arts10.jpg'

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

  ];

  
  const SliderCarouselTwo = () => {
    return (
<div className="parent">
            <h2 className="slide-title">Performing Arts</h2>
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
  
  export default SliderCarouselTwo
  