import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';

import bg from '../assets/img/movie-slider-item-background.jpg'
import MovieSliderItem from './MovieSliderItem'

const MovieSlider = () => {
  const movieList = [
    {
      id: 1,
      title: 'wonder woman',
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
      title: 'wonder woman',
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
      title: 'wonder woman',
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
      title: 'wonder woman',
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
      title: 'wonder woman',
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

  useEffect(() => {
    $('.owl-dots').addClass('custom-dots')
  }, [])

  return (
    <div className="movie-slider">
    <OwlCarousel
      // Basic Settings 
      className="owl-theme"
      items={1}
        loop
        margin={10}

        // Autoplay
        autoplay
        autoplayHoverPause

        // Animation
        animateOut="fadeOut"
        >
        {movieList.map(item => (
          <React.Fragment key={item._id}>
            <MovieSliderItem 
              id = {item._id}
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
    </div>
    
  )
}

export default MovieSlider
