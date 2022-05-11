import React from 'react';
import { Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Carrosel = ({ slides }) => {

  return (
    <Carousel autoPlay infiniteLoop>
      {slides.map((slide) => {
        return <Image src={slide.image} height="100vh" width="50%" />;
      })}
    </Carousel>
  );
}

export default Carrosel;