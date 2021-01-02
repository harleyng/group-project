import React from 'react'

import MovieSlider from '../components/Home/MovieSlider'
import BookingSlider from '../components/Home/booking/BookingSlider'

const Home = () => {
  return (
    <div>
      <MovieSlider/>
      <div id="booking">
        <BookingSlider/>
      </div>
    </div>
  )
}

export default Home
