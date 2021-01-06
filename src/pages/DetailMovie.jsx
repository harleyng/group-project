import React from 'react'
import MovieThumnail from '../components/Detail-Movie/MovieThumnail'
import MovieInfo from '../components/Detail-Movie/MovieInfo'
import AnotherMovie from '../components/Detail-Movie/AnotherMovie'
const DetailMovie = () => {
    return (
       <div id="movie_container">
           <div id="movie_thumnail">
           </div>
           <div id="main">
            <MovieInfo/>
           </div>
           <div id="another-movie">
            <AnotherMovie/>
           </div>
       </div>
    )
}

export default DetailMovie
