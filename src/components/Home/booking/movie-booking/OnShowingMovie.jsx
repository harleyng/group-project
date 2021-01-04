import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import OnShowingMovieItem from './OnShowingMovieItem'
import img from '../../../../assets/img/movie-slider-item-background.jpg'

const OnShowingMovie = () => {
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

  return (
    <div>
      <h1 className="slider-title">onshowing</h1>
      <OwlCarousel
        // Basic Settings 
        id="on-showing-movie-slider"
        className="owl-theme"
        items={4}
        nav
        // dotsContainer='#carousel-custom-dots'
        loop
        margin={10}
        >
        {movieList.map(item => (
          <React.Fragment key = {item.id}>
            <OnShowingMovieItem 
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
    </div>
  )
}

export default OnShowingMovie
