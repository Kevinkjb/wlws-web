import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imageOne from '../../images/heritage-2025/performer1.jpg'
import imageTwo from '../../images/heritage-2025/performer2.jpg'
import imageThree from '../../images/heritage-2025/vendor1.jpg'
import imageFour from '../../images/heritage-2025/rides.jpg'
import imageFive from '../../images/heritage-2025/volunteer4.jpg'
import imageSix from '../../images/heritage-2025/volunteer3.jpg'
import imageSeven from '../../images/heritage-2025/staff.jpg'
import imageEight from '../../images/heritage-2025/rides3.jpg'
import imageNine from '../../images/heritage-2025/performer3.jpg'

import './slider.css'
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
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

  
  const SliderCarouselThree = () => {
    return (
<div className="parent">

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
                <img className='heritage-img' src={imageUrl.url} alt="Heritage Festival Gallery" />
                </div>
            );
            })}
            </Carousel>
        </div>
    )
  }
  
  export default SliderCarouselThree
  