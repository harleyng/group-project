import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import $ from 'jquery';

import { IconContext } from "react-icons";
import { BsChevronDoubleDown } from 'react-icons/bs'

import img from '../../assets/img/poster-slider-background.jpg'
import PosterSliderItem from './PosterSliderItem'

const PosterSlider = () => {
  const movieList = [
    {
      id: 1,
      title: 'wonder woman1',
      img: img,
      genre: ['action', 'adventure'],
      releaseDate: '2017',
      duration: 141,
      ratingIMDB: 7.4,
      ageRating: 'PG-13',
      director: 'Patty Jenkins',
      stars: ['Gal Gadot', 'Chris Pine'],
      desc: 'When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.'
    },
    {
      id: 2,
      title: 'wonder woman2',
      img: img,
      genre: ['action', 'adventure'],
      releaseDate: '2017',
      duration: 141,
      ratingIMDB: 7.4,
      ageRating: 'PG-13',
      director: 'Patty Jenkins',
      stars: ['Gal Gadot', 'Chris Pine'],
      desc: 'When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.'
    },
    {
      id: 3,
      title: 'wonder woman3',
      img: img,
      genre: ['action', 'adventure'],
      releaseDate: '2017',
      duration: 141,
      ratingIMDB: 7.4,
      ageRating: 'PG-13',
      director: 'Patty Jenkins',
      stars: ['Gal Gadot', 'Chris Pine'],
      desc: 'When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.'
    },
    {
      id: 4,
      title: 'wonder woman4',
      img: img,
      genre: ['action', 'adventure'],
      releaseDate: '2017',
      duration: 141,
      ratingIMDB: 7.4,
      ageRating: 'PG-13',
      director: 'Patty Jenkins',
      stars: ['Gal Gadot', 'Chris Pine'],
      desc: 'When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.'
    },
    {
      id: 5,
      title: 'wonder woman5',
      img: img,
      genre: ['action', 'adventure'],
      releaseDate: '2017',
      duration: 141,
      ratingIMDB: 7.4,
      ageRating: 'PG-13',
      director: 'Patty Jenkins',
      stars: ['Gal Gadot', 'Chris Pine'],
      desc: 'When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.'
    },
  ]

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
                img = {item.img}
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
      <a className="section-navigator" onClick={sectionNavigation}>
        <IconContext.Provider value={{ size: '3em', className: "puzzle" }}>
            <BsChevronDoubleDown />
        </IconContext.Provider>
      </a>
    </div>
  )
}

export default PosterSlider
