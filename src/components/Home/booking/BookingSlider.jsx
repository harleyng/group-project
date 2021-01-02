import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import MovieBooking from './MovieBooking'
import TimeBooking from './TimeBooking';
import CinemaBooking from './CinemaBooking';

const BookingSlider = () => {
  return (
    <div className="booking-slider">
      <OwlCarousel
        // Basic Settings 
        className="owl-theme"
        items={1}
        // dotsContainer='#carousel-custom-dots'
        loop
        margin={10}

        // Animation
        animateOut="fadeOut"
        >
        <MovieBooking/>
        <TimeBooking/>
        <CinemaBooking/>
      </OwlCarousel>
      
      <div className="dots">
        <ul id='carousel-custom-dots' className='custom-owl-dots'>
          <button className='owl-dot'></button>
          <button className='owl-dot'></button>
          <button className='owl-dot'></button>
          <button className='owl-dot'></button>
          <button className='owl-dot'></button>
        </ul>
      </div>
    </div>
  )
}

export default BookingSlider
