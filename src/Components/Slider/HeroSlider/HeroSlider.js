import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import heroSlider from './heroSlider.css';

const HeroSlider = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 2000, min: 800 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 800, min: 480 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1
    }
  };

  return (
    <div style={{height:'350px'}} className="heroSlider">
      <Carousel
        arrows={false}
        showDots={true}
        renderDotsOutside={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={responsive}
        >
          <div className='heroSlide-1'></div>
          <div className='heroSlide-2'></div>
          <div className='heroSlide-3'></div>
          <div className='heroSlide-4'><h3>touch of <br /><span style={{color:'red'}}>creative hands</span></h3></div>
    </Carousel>
    </div>
  );
};

export default HeroSlider;