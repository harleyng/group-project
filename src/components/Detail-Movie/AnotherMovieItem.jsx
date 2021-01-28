import React from 'react'

import { IconContext } from "react-icons";
import { AiFillStar } from 'react-icons/ai';

const AnotherMovieItem = props => {
    return (
        <div className="item-container">
            <div>
            <img src={props.img} alt={props.title}/>
            </div>
            <div className="mt-3">
            <h5 className="movie-title">{props.title}</h5>
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

export default AnotherMovieItem
