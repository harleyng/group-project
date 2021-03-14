import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import $ from 'jquery';

import { IconContext } from "react-icons";
import { BsChevronDoubleDown } from 'react-icons/bs'

import { db } from '../../backend/firebase'
import PosterSliderItem from './PosterSliderItem'

const PosterSlider = () => {
  const [movieList, setmovieList] = useState([])
  useEffect(() => {
    fetchMovie()
    // console.log(movieList)
  }, [])

  const fetchMovie = () => {
    db.collection("movie")
    .where("onShowing", "==", true)
    .orderBy("releaseYear")
    .orderBy("releaseDate")
    .limitToLast(5)
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

  const sectionNavigation = () => {
    let booking = $('#booking').offset().top;
    $('html, body').scrollTop(booking);
  }

  const settings = {
    // Basic Settings 
    dots: true,
    infinite: true,
    draggable: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    // Autoplay
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,

    appendDots: dots => (
      <ul id='poster-slider-custom-dots'>
        {dots}
      </ul>
    ),
    customPaging: i => (
      <li className="dot"></li>
    )
  };

  return (
    <div className="poster-slider-container">
      <div id="poster-slider">
        <Slider {...settings}> 
          {movieList.map(item => (
            <React.Fragment key = {item.id}>
              <PosterSliderItem 
                id = {item.id}
                title = {item.title}
                img = {item.LgImage}
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
      <a className="section-navigator" onClick={sectionNavigation}>
        <IconContext.Provider value={{ size: '3em', className: "puzzle" }}>
            <BsChevronDoubleDown />
        </IconContext.Provider>
      </a>
    </div>
  )
}

export default PosterSlider
