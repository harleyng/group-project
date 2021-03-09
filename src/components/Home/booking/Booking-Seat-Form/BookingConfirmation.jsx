import { Height } from '@material-ui/icons'
import React, { useEffect } from 'react'
import TicketShapeBackground from '../../../../assets/img/seat-confirmation-background.png' 
import { db }  from '../../../../backend/firebase'
import Swal from 'sweetalert2'

const BookingConfirmation = (props) => {
  const {count, total} = props;
  var seatRef = db.collection("theater").doc("8zbFBYEdH6lL6ULWpfLv").collection("room").doc("KrIzFrQ6eMasaga1uNYM").collection("seat");
  var selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  const handleResetSeat = () => {
    seatRef
    .where("status", "==", "occupied")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.update({
          status: "available"
        })
        Swal.fire({
          title: 'You have reset ALL seats',
          icon: 'success',
          didClose: windowReload
        })
      });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }

  const handleSeatBooking = () => {
    // for (let i = 1; i < 6; i++) {
    //   console.log(i)
    //   seatRef.add({
    //     name: "L"+i,
    //     status: "available",
    //     type: "sweetbox"
    //   })
    // }

    for (let i = 0; i < selectedSeats.length; i++) {
      const seatName = selectedSeats[i].seatRow + selectedSeats[i].seatIndex;
      console.log(typeof seatName);
      seatRef
        .where("name", "==", seatName)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({
              status: "occupied"
            })
            Swal.fire({
              title: 'You have booked ' + selectedSeats.length + ' seats',
              text: 'Your billing is ' + total + '$',
              icon: 'success',
              didClose: windowReload
            })
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
    }
  }

  const windowReload = () => {
    window.location.reload();
  }
  return (
    <div id="booking-confirmation-container">
      <div id="booking-confirmation-title" className="uppercase text-center">shopping cart</div>
      <div className="date-time-booked">
        <table>
          <tr>
            <td><span className="uppercase">ticketland</span> Ha Noi</td>
            <td className="text-right"><span className="uppercase">ticketland</span> Dao Tan</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td className="text-right">1 December 2020</td>
          </tr>
        </table>
      </div>
      <div id="seat-confirmation-title" className="text-center mb-2">Seat</div>
      <div className="seat-booked-info">
        <table>
            <tr>
              <th>Sr No.</th>
              <th>Row</th>
              <th>Index</th>
              <th>Price</th>
            </tr>
            <tbody className="mt-3"></tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td colSpan="2"></td>
                <td>{total}$</td>
              </tr>
              <tr>
                <td><button className="seat-confirmation-button" onClick={handleResetSeat}>Reset</button></td>
                <td colSpan="2"></td>
                <td><button className="seat-confirmation-button" onClick={handleSeatBooking}>Confirm</button></td>
              </tr>
            </tfoot>
        </table>
      </div>
    </div>
  )
}

export default BookingConfirmation
