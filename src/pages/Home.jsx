import React from 'react'

import PosterSlider from '../components/Home/PosterSlider'
import BookingSlider from '../components/Home/booking/BookingSlider'

const Home = () => {
  return (
    <div id="home-page">
      <PosterSlider/>
      <div id="booking">
        <BookingSlider/>
      </div>
    </div>
  )
}

export default Home
