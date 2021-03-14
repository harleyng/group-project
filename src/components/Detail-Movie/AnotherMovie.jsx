import React, { useState, useEffect } from 'react'
import Slider from "react-slick";

import AnotherMovieItem from './AnotherMovieItem'
import { db } from '../../backend/firebase'

const AnotherMovie = () => {
  const [movieList, setmovieList] = useState([])
  useEffect(() => {
    fetchMovie()
  }, [])

  const fetchMovie = () => {
    db.collection("movie").where("onShowing", "==", true)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          setmovieList(oldArray => {
            if  (movieList.includes(doc.data()) == false) {
              return [...oldArray, doc.data()]
            } 
          })
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  }
      const settings = {
        // Basic Settings 
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
      
    return (
        <div>
            <div id="anotherMovie" className="movie-slider">
                <h3 className="slider-title">Another Movie</h3>
                <Slider {...settings}> 
                    {movieList.map(item => (
                    <React.Fragment key = {item.id}>
                        <AnotherMovieItem 
                        id = {item.id}
                        title = {item.title}
                        img = {item.SmImage}
                        genre = {item.genre}
                        releaseDate = {item.releaseDate}
                        duration = {item.duration}
                        ratingIMDB = {item.ratingIMDB}
                        ageRating = {item.ageRating}
                        director = {item.director}
                        stars = {item.stars}
                        desc = {item.desc}
                        />
                    </React.Fragment>
                    ))}
                </Slider>
                </div>
        </div>
    )
}

export default AnotherMovie
