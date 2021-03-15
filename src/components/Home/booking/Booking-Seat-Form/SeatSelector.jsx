import React, { useEffect } from 'react'
import $ from 'jquery'
import { db }  from '../../../../backend/firebase'


const SeatSelector = props => {
  console.log(props)
  const selectedTheaterId = props.theaterId;
  const selectedRoomId = props.roomId;
  var seatRef = db.collection("theater").doc(selectedTheaterId).collection("room").doc(selectedRoomId).collection("seat");
  
  seatRef
    .where("status", "==", "occupied")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            $(`#${doc.data().name}`).addClass('occupied');
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

  return (
    <div className="seat-selector-container">
      <div className="screen"></div>
      <div id="seat-selector-form">
        <table className="text-center">
          <colgroup>
            <col style={{width: '6%'}} />
            <col style={{width: '6%'}} />
            <col style={{width: '6%'}} />
            <col style={{width: '6%'}} />
            <col style={{width: '6%'}} />
            <col style={{width: '6%'}} />
            <col style={{width: '6%'}} />
            <col style={{width: '6%'}} />
            <col style={{width: '6%'}} />
            <col style={{width: '6%'}} />
            <col style={{width: '6%'}} />
            <col style={{width: '6%'}} />
            <col style={{width: '6%'}} />
            <col style={{width: '6%'}} />
            <col style={{width: '6%'}} />
          </colgroup>
          <tbody>
            <tr>
              <td className="seat-row-title">A</td>
              <td className="seat empty"></td>
              <td className="seat empty"></td>
              <td className="seat" id="A1"></td>
              <td className="seat" id="A2"></td>
              <td className="seat" id="A3"></td>
              <td className="seat" id="A4"></td>
              <td className="seat" id="A5"></td>
              <td className="seat" id="A6"></td>
              <td className="seat" id="A7"></td>
              <td className="seat" id="A8"></td>
              <td className="seat" id="A9"></td>
              <td className="seat" id="A10"></td>
              <td className="seat empty"></td>
              <td className="seat empty"></td>
            </tr>
            <tr>
              <td className="seat-row-title">B</td>
              <td className="seat empty"></td>
              <td className="seat" id="B1"></td>
              <td className="seat" id="B2"></td>
              <td className="seat" id="B3"></td>
              <td className="seat" id="B4"></td>
              <td className="seat" id="B5"></td>
              <td className="seat" id="B6"></td>
              <td className="seat" id="B7"></td>
              <td className="seat" id="B8"></td>
              <td className="seat" id="B9"></td>
              <td className="seat" id="B10"></td>
              <td className="seat" id="B11"></td>
              <td className="seat" id="B12"></td>
              <td className="seat empty"></td>
            </tr>
            <tr>
              <td className="seat-row-title">C</td>
              <td className="seat empty"></td>
              <td className="seat" id="C1"></td>
              <td className="seat" id="C2"></td>
              <td className="seat" id="C3"></td>
              <td className="seat" id="C4"></td>
              <td className="seat" id="C5"></td>
              <td className="seat" id="C6"></td>
              <td className="seat" id="C7"></td>
              <td className="seat" id="C8"></td>
              <td className="seat" id="C9"></td>
              <td className="seat" id="C10"></td>
              <td className="seat" id="C11"></td>
              <td className="seat" id="C12"></td>
              <td className="seat empty"></td>
            </tr>
            <tr>
              <td className="seat-row-title">D</td>
              <td className="seat" id="D1"></td>
              <td className="seat" id="D2"></td>
              <td className="seat" id="D3"></td>
              <td className="seat" id="D4"></td>
              <td className="seat" id="D5"></td>
              <td className="seat" id="D6"></td>
              <td className="seat" id="D7"></td>
              <td className="seat" id="D8"></td>
              <td className="seat" id="D9"></td>
              <td className="seat" id="D10"></td>
              <td className="seat" id="D11"></td>
              <td className="seat" id="D12"></td>
              <td className="seat" id="D13"></td>
              <td className="seat" id="D14"></td>
            </tr>
            <tr>
              <td className="seat-row-title">E</td>
              <td className="seat" id="E1"></td>
              <td className="seat" id="E2"></td>
              <td className="seat" id="E3"></td>
              <td className="seat" id="E4"></td>
              <td className="seat" id="E5"></td>
              <td className="seat" id="E6"></td>
              <td className="seat" id="E7"></td>
              <td className="seat" id="E8"></td>
              <td className="seat" id="E9"></td>
              <td className="seat" id="E10"></td>
              <td className="seat" id="E11"></td>
              <td className="seat" id="E12"></td>
              <td className="seat" id="E13"></td>
              <td className="seat" id="E14"></td>
            </tr>
            <tr>
              <td className="seat-row-title">F</td>
              <td className="seat" id="F1"></td>
              <td className="seat" id="F2"></td>
              <td className="seat" id="F3"></td>
              <td className="seat" id="F4"></td>
              <td className="seat" id="F5"></td>
              <td className="seat" id="F6"></td>
              <td className="seat" id="F7"></td>
              <td className="seat" id="F8"></td>
              <td className="seat" id="F9"></td>
              <td className="seat" id="F10"></td>
              <td className="seat" id="F11"></td>
              <td className="seat" id="F12"></td>
              <td className="seat" id="F13"></td>
              <td className="seat" id="F14"></td>
            </tr>
            <tr>
              <td className="seat-row-title">G</td>
              <td className="seat" id="G1"></td>
              <td className="seat" id="G2"></td>
              <td className="seat" id="G3"></td>
              <td className="seat" id="G4"></td>
              <td className="seat" id="G5"></td>
              <td className="seat" id="G6"></td>
              <td className="seat" id="G7"></td>
              <td className="seat" id="G8"></td>
              <td className="seat" id="G9"></td>
              <td className="seat" id="G10"></td>
              <td className="seat" id="G11"></td>
              <td className="seat" id="G12"></td>
              <td className="seat" id="G13"></td>
              <td className="seat" id="G14"></td>
            </tr>
            <tr>
              <td className="seat-row-title">H</td>
              <td className="seat" id="H1"></td>
              <td className="seat" id="H2"></td>
              <td className="seat" id="H3"></td>
              <td className="seat" id="H4"></td>
              <td className="seat" id="H5"></td>
              <td className="seat" id="H6"></td>
              <td className="seat" id="H7"></td>
              <td className="seat" id="H8"></td>
              <td className="seat" id="H9"></td>
              <td className="seat" id="H10"></td>
              <td className="seat" id="H11"></td>
              <td className="seat" id="H12"></td>
              <td className="seat" id="H13"></td>
              <td className="seat" id="H14"></td>
            </tr>
            <tr>
              <td className="seat-row-title">I</td>
              <td className="seat" id="I1"></td>
              <td className="seat" id="I2"></td>
              <td className="seat" id="I3"></td>
              <td className="seat" id="I4"></td>
              <td className="seat" id="I5"></td>
              <td className="seat" id="I6"></td>
              <td className="seat" id="I7"></td>
              <td className="seat" id="I8"></td>
              <td className="seat" id="I9"></td>
              <td className="seat" id="I10"></td>
              <td className="seat" id="I11"></td>
              <td className="seat" id="I12"></td>
              <td className="seat" id="I13"></td>
              <td className="seat" id="I14"></td>
            </tr>
            <tr>
              <td className="seat-row-title">J</td>
              <td className="seat" id="J1"></td>
              <td className="seat" id="J2"></td>
              <td className="seat" id="J3"></td>
              <td className="seat" id="J4"></td>
              <td className="seat" id="J5"></td>
              <td className="seat" id="J6"></td>
              <td className="seat" id="J7"></td>
              <td className="seat" id="J8"></td>
              <td className="seat" id="J9"></td>
              <td className="seat" id="J10"></td>
              <td className="seat" id="J11"></td>
              <td className="seat" id="J12"></td>
              <td className="seat" id="J13"></td>
              <td className="seat" id="J14"></td>
            </tr>
            <tr>
              <td className="seat-row-title">K</td>
              <td className="seat empty"></td>
              <td className="seat" id="K1"></td>
              <td className="seat" id="K2"></td>
              <td className="seat" id="K3"></td>
              <td className="seat" id="K4"></td>
              <td className="seat" id="K5"></td>
              <td className="seat" id="K6"></td>
              <td className="seat" id="K7"></td>
              <td className="seat" id="K8"></td>
              <td className="seat" id="K9"></td>
              <td className="seat" id="K10"></td>
              <td className="seat" id="K11"></td>
              <td className="seat" id="K12"></td>
              <td className="seat empty"></td>
            </tr>
            <tr>
              <td className="seat-row-title">L</td>
              <td className="seat empty" colSpan="2"></td>
              <td className="seat sweetbox" colSpan="2" id="L1"></td>
              <td className="seat sweetbox" colSpan="2" id="L2"></td>
              <td className="seat sweetbox" colSpan="2" id="L3"></td>
              <td className="seat sweetbox" colSpan="2" id="L4"></td>
              <td className="seat sweetbox" colSpan="2" id="L5"></td>
              <td className="seat empty" colSpan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul className="showcase">
        <li>
          <div className="seat unclickable"></div>
          <span>Available</span>
        </li>
        <li>
          <div className="seat selected unclickable"></div>
          <span>Selected</span>
        </li>
        <li>
          <div className="seat occupied unclickable"></div>
          <span>Occupied</span>
        </li>
        <li>
          <div className="seat sweetbox unclickable"></div>
          <span>Sweetbox</span>
        </li>
      </ul>
    </div>
  )
}

export default SeatSelector
