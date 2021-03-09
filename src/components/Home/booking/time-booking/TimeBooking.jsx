import React from 'react'
import DatePicker from './DatePicker'
import OnShowingMovie from '../movie-booking/OnShowingMovie'
import UpCommingMovie from '../movie-booking/UpCommingMovie'

const TimeBooking = () => {
  return (
    <div className="booking-slider-item">
      <DatePicker/>
      <OnShowingMovie/>
      <UpCommingMovie/>
    </div>
  )
}

export default TimeBooking
