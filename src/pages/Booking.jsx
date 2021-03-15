import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import BookingConfirmation from '../components/Home/booking/Booking-Seat-Form/BookingConfirmation'
import SeatSelector from '../components/Home/booking/Booking-Seat-Form/SeatSelector'

const Booking = props => {
  const selectedTheaterId = props.match.params.theaterId;
  const selectedRoomId = props.match.params.roomId;
  // Seats Information
  const rowTitles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  // const rowSeatNumber = [10, 12, 12, 14, 14, 14, 14, 14, 14, 14, 12, 5];
  
  // const [count, setcount] = useState(0)
  const [total, settotal] = useState(0)
  
  // Function change selected seat UI
  const handleSeatSelect = (event) => {
    if (
      (event.target.classList.contains("seat") || event.target.classList.contains("sweetbox"))  &&
      !(event.target.classList.contains("occupied") || event.target.classList.contains("empty"))
    ) {
      event.target.classList.toggle("selected");
      updateSelectedCount();
    }
  }

  // Function update selected seat
  function updateSelectedCount() {
    // Seat Rows
    const seatsRow = document.querySelectorAll("#seat-selector-form tr");
    // Selected Seat
    const selectedSeats = $("#seat-selector-form .seat.selected:not(.sweetbox)");
    const selectedSweetboxs = $("#seat-selector-form .sweetbox.selected");
    const totalSelectedSeats = selectedSeats.add(selectedSweetboxs);
    var seatsInfo = [];
  
    // Identify each selected seat information 
    // Push each item in seatsInfo array
    [...totalSelectedSeats].forEach(seat => {
      // row
      const seatRow = rowTitles[[...seatsRow].indexOf(seat.parentElement)];

      // index
      let selectedSeatRow = Array.from(seat.parentElement.childNodes);
      selectedSeatRow = selectedSeatRow.filter(e => !e.classList.contains("empty") && !e.classList.contains("seat-row-title"))
      const seatIndex = selectedSeatRow.indexOf(seat) + 1;

      // price
      let seatPrice = 0;
      seat.classList.contains("sweetbox") ? seatPrice = 75 : seatPrice = 60;
      seatsInfo.push({
        seatRow: seatRow,
        seatIndex: seatIndex,
        seatPrice: seatPrice
      })
    });
    localStorage.setItem("selectedSeats", JSON.stringify(seatsInfo));
  
    // setcount(totalSelectedSeats.length);
    settotal(selectedSeats.length * 60 + selectedSweetboxs.length * 75); // seatPrice = 60 & sweetboxPrice = 75
    renderSeatSelect(seatsInfo);
  }

  const renderSeatSelect = (seatsInfo) => {
    var seats = '';
    [...seatsInfo].forEach((seat, index) => {
      seats += '<tr>';
      seats += '<td>'+(index+1)+'</td>';
      seats += '<td>'+seat.seatRow+'</td>';
      seats += '<td>'+seat.seatIndex+'</td>';
      seats += '<td>'+seat.seatPrice+'$</td>';
      seats += '</tr>';
    });
    $('.seat-booked-info table tbody').empty();
    $(seats).appendTo('.seat-booked-info table tbody')
  }

  useEffect(() => {
    window.addEventListener('click', (event) => {handleSeatSelect(event)});
    return () => {
      window.removeEventListener('click', () => {console.log('remove')});
    }
  }, [])
  return (
    <div className="bookingContainer d-flex">
      <div className="bookingContent row">
        <div className="col-8">
          <SeatSelector theaterId={selectedTheaterId} roomId={selectedRoomId}/>
        </div>
        <div className="col-4">
          <BookingConfirmation total={total} render={renderSeatSelect}/>
        </div>
      </div>
    </div>
  )
}

export default Booking
