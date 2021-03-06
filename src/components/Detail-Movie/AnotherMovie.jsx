import React from 'react'
import Slider from "react-slick";

import AnotherMovieItem from './AnotherMovieItem'
import img from '../../assets/img/movie-slider-bg.jpg'

const AnotherMovie = () => {
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
      ]
      const settings = {
        // Basic Settings 
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
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
        </div>
    )
}

export default AnotherMovie
