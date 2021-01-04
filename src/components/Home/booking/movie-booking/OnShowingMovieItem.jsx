import React from 'react'

import { IconContext } from "react-icons";
import { AiFillStar } from 'react-icons/ai'

const OnShowingMovieItem = props => {
  return (
    <div className="item-container">
      <div>
        <img src={props.img} alt={props.title}/>
      </div>
      <div>
        <h5>{props.title}</h5>
        <div>
          <span>
            <IconContext.Provider value={{ className: "star-icon" }}>
                <AiFillStar />
            </IconContext.Provider>
          </span>
          {props.ratingIMDB}/10 IMDB
        </div>
      </div>
    </div>
  )
}

export default OnShowingMovieItem
