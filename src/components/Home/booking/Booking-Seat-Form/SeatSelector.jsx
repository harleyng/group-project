import React, { useEffect } from 'react'
import $ from 'jquery'

const SeatSelector = () => {
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
              <td className="seat occupied"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat empty"></td>
              <td className="seat empty"></td>
            </tr>
            <tr>
              <td className="seat-row-title">B</td>
              <td className="seat empty"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat occupied"></td>
              <td className="seat occupied"></td>
              <td className="seat occupied"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat empty"></td>
            </tr>
            <tr>
              <td className="seat-row-title">C</td>
              <td className="seat empty"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat occupied"></td>
              <td className="seat occupied"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat empty"></td>
            </tr>
            <tr>
              <td className="seat-row-title">D</td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
            </tr>
            <tr>
              <td className="seat-row-title">E</td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
            </tr>
            <tr>
              <td className="seat-row-title">F</td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
            </tr>
            <tr>
              <td className="seat-row-title">G</td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
            </tr>
            <tr>
              <td className="seat-row-title">H</td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
            </tr>
            <tr>
              <td className="seat-row-title">I</td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
            </tr>
            <tr>
              <td className="seat-row-title">J</td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
            </tr>
            <tr>
              <td className="seat-row-title">K</td>
              <td className="seat empty"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat"></td>
              <td className="seat occupied"></td>
              <td className="seat occupied"></td>
              <td className="seat empty"></td>
            </tr>
            <tr>
              <td className="seat-row-title">L</td>
              <td className="seat empty" colSpan="2"></td>
              <td className="seat sweetbox" colSpan="2"></td>
              <td className="seat sweetbox" colSpan="2"></td>
              <td className="seat sweetbox occupied" colSpan="2"></td>
              <td className="seat sweetbox" colSpan="2"></td>
              <td className="seat sweetbox" colSpan="2"></td>
              <td className="seat empty" colSpan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <span>Available</span>
        </li>
        <li>
          <div className="seat selected"></div>
          <span>Selected</span>
        </li>
        <li>
          <div className="seat occupied"></div>
          <span>Occupied</span>
        </li>
        <li>
          <div className="seat sweetbox"></div>
          <span>Sweetbox</span>
        </li>
      </ul>
    </div>
  )
}

export default SeatSelector
