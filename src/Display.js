import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import image1 from './SRW3.jpg'
import image2 from './illbleed.jpg'
import image3 from './prey.jpg'
 
export default class Display extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}><img alt="SRW 3" src={image1}></img></Slide>
          <Slide index={1}><img alt="Illbleed" src={image2}></img></Slide>
          <Slide index={2}><img alt="Prey" src={image3}></img></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}