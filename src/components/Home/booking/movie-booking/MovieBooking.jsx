import React from 'react'
import OnShowingMovie from './OnShowingMovie'
import UpCommingMovie from './UpCommingMovie'

const MovieBooking = () => {
  return (
    <div className="booking-slider-item">
      <OnShowingMovie/>
      <UpCommingMovie/>
    </div>
  )
}

export default MovieBooking
