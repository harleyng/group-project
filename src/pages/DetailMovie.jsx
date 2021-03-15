import React, { useState, useEffect } from 'react'
import MovieInfo from '../components/Detail-Movie/MovieInfo'
import AnotherMovie from '../components/Detail-Movie/AnotherMovie'

import { db } from '../backend/firebase'

const DetailMovie = props => {
    const [movieInfo, setmovieInfo] = useState({})
    useEffect(() => {
      fetchMovieInfo()
    }, [movieInfo])
  
    const fetchMovieInfo = () => {
      db.collection("movie").where("id", "==", props.match.params.movieId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            if (Object.keys(movieInfo).length == 0) {
              setmovieInfo(doc.data())
            }
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    }
    return (
       <div id="movie_container">
           <div id="movie_thumnail" 
           style={{
                backgroundImage: `url(${movieInfo.LgImage})`
           }}>
           </div>
           <div id="main">
            <MovieInfo id={props.match.params.movieId}/>
           </div>
           <div id="another-movie">
            <AnotherMovie/>
           </div>
       </div>
    )
}

export default DetailMovie
