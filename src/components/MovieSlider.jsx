import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';

import { IconContext } from "react-icons";
import { BsChevronDoubleDown } from 'react-icons/bs'

import bg from '../assets/img/movie-slider-item-background.jpg'
import MovieSliderItem from './MovieSliderItem'

const MovieSlider = () => {
  const movieList = [
    {
      id: 1,
      title: 'wonder woman1',
      bg: bg,
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
      bg: bg,
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
      bg: bg,
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
      bg: bg,
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
      bg: bg,
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
    console.log(booking)
  }
  return (
    <div className="movie-slider">
      <OwlCarousel
        // Basic Settings 
        id="movie-slider"
        className="owl-theme"
        items={1}
        dotsContainer='#carousel-custom-dots'
        loop
        margin={10}

        // Autoplay
        autoplay
        autoplayHoverPause

        // Animation
        animateOut="fadeOut"
        >
        {movieList.map(item => (
          <React.Fragment key = {item.id}>
            <MovieSliderItem 
              id = {item.id}
              title = {item.title}
              bg = {item.bg}
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
      </OwlCarousel>
      <div className="dots">
        <ul id='carousel-custom-dots' className='custom-owl-dots'>
          <button className='owl-dot'></button>
          <button className='owl-dot'></button>
          <button className='owl-dot'></button>
          <button className='owl-dot'></button>
          <button className='owl-dot'></button>
        </ul>
      </div>
      <a className="section-navigator" onClick={sectionNavigation}>
        <IconContext.Provider value={{ size: '3em', className: "puzzle" }}>
            <BsChevronDoubleDown />
        </IconContext.Provider>
      </a>
    </div>
  )
}

export default MovieSlider
