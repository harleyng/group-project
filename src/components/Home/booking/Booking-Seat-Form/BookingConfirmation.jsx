import { Height } from '@material-ui/icons'
import React, { useEffect } from 'react'
import TicketShapeBackground from '../../../../assets/img/seat-confirmation-background.png' 
const BookingConfirmation = (props) => {
  const {count, total} = props;

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
              <th>Seat</th>
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
                <td><button className="seat-confirmation-button">NO. 169</button></td>
                <td colSpan="2"></td>
                <td><button className="seat-confirmation-button">Next</button></td>
              </tr>
            </tfoot>
        </table>
      </div>
    </div>
  )
}

export default BookingConfirmation
