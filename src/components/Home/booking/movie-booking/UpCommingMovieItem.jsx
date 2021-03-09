import React from 'react'


const UpCommingMovieItem = props => {
  return (
    <div className="item-container">
      <div>
        <img src={props.img} alt={props.title}/>
      </div>
      <div className="mt-3">
        <h5 className="movie-title">{props.title}</h5>
        <div className="movie-released">
          <h6>{props.releaseDate}</h6>
        </div>
      </div>
    </div>
  )
}

export default UpCommingMovieItem
