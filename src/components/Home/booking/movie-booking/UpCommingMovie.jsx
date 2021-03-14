import React, { useState, useEffect } from 'react'
import Slider from "react-slick";

import UpCommingMovieItem from './UpCommingMovieItem'
import { db } from '../../../../backend/firebase'

const UpCommingMovie = () => {
  const [movieList, setmovieList] = useState([])
  useEffect(() => {
    console.log("upcomming fetch")
    fetchMovie()
  }, [])

  const fetchMovie = () => {
    db.collection("movie").where("onShowing", "==", false)
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

  // localStorage.setItem("movieList", JSON.stringify())
  const settings = {
    // Basic Settings 
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          initialSlide: 4
        }
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          initialSlide: 1
        }
      }
    ]
  };
  return (
    <div id ="upcomming-movie" className="movie-slider">
      <h3 className="slider-title">upcomming</h3>
      <Slider {...settings}> 
        {movieList.map(item => (
          <React.Fragment key = {item.id}>
            <UpCommingMovieItem 
              id = {item.id}
              title = {item.title}
              img = {item.SmImage}
              genre = {item.genre}
              releaseDate = {item.releaseDate}
              releaseYear = {item.releaseYear}
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
  )
}

export default UpCommingMovie
