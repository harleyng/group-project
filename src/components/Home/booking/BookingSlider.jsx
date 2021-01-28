import React, { useEffect } from 'react'
import Slider from "react-slick";
// import OwlCarousel from 'react-owl-carousel';
import $ from 'jquery'

import MovieBooking from './movie-booking/MovieBooking'
import TimeBooking from './time-booking/TimeBooking';
import CinemaBooking from './CinemaBooking';

const BookingSlider = () => {
  const titles = ['SCHEDULE BASED ON MOVIE', 'SCHEDULE BASED ON TIME', 'SCHEDULE BASED ON CINEMA HALL'];
  const settings = {
    // Basic Settings 
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    // Animation
    fade: true,

    appendDots: dots => (
      <ul id='booking-slider-custom-dots'>
        {dots}
        <div className="slider"/>
      </ul>
    ),

    customPaging: (i) => {
      return <button>{titles[i]}</button>
    }
  };

  return (
    <div className="booking-slider">
      <Slider {...settings}> 
        <MovieBooking/>
        <TimeBooking/>
        <CinemaBooking/>
      </Slider>
    </div>
  )
}

export default BookingSlider
