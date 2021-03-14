import React from 'react'
import {Link} from 'react-router-dom'

import { IconContext } from "react-icons";
import { AiFillStar } from 'react-icons/ai'

const OnShowingMovieItem = props => {
  const url = `/movie/${props.id}`
  return (
    <div className="item-container">
      <div>
        <Link to={url}>
          <img src={props.img} alt={props.title}/>
        </Link>
      </div>
      <div className="mt-3">
        <h5 className="movie-title">
          <Link to={url}>
            {props.title}
          </Link>
        </h5>
      <div className="movie-rating">
          <IconContext.Provider value={{ className: "star-icon" }}>
              <AiFillStar />
          </IconContext.Provider>
          <span className="ml-1">{props.ratingIMDB}/10 IMDB</span>
        </div>
      </div>
    </div>
  )
}

export default OnShowingMovieItem
