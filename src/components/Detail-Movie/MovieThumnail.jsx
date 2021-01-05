import React from 'react'
import MovieImg from '../../assets/img/movie-slider-bg.jpg'
import ActorImg from '../../assets/img/gal_gadot.png'

import { IconContext } from "react-icons";
import { AiFillStar } from 'react-icons/ai';

const MovieThumnail = () => {
    return (
        <div className="MovieThumbnail">
            <div className="row">
                <div className="movieThumbnail col-3">
                    <div className="movieThumbnail_img" ><a href="#"><img className="movie_img" src={MovieImg}/></a></div>
                    <div className="like"><button className="like-btn">LIKES</button></div>
                    <div className="booking"><button className="booking-btn">BOOKING</button></div>
                </div>
                <div className="movieDetail col-6">
                    <h1>WONDER WOMAN</h1>

                    <p className="detail">When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.</p>

                    <div className="movieInfo row">
                        <span className="rating">
                        <IconContext.Provider value={{ className: "star-icon" }}>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </IconContext.Provider>
                        </span>
                        <span className="ageRating">PG-13</span>
                        <span className="duration">2h 21 mins</span>
                        <span className="releaseDate">2017</span>
                    </div>

                    <div className="MovieDetail row">
                        <div className="movieDetail col-6">
                            <span className="categories">DETAILS</span>
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="director">Director:</td><td class="capitalize">Patty Jenkins</td>
                                    </tr>
                                    <tr>
                                        <td class="stars">Stars:</td><td class="capitalize">Gal Gadot, Chris Pine</td>
                                    </tr>
                                    <tr>
                                        <td class="certifications">Certifications:</td><td class="capitalize">PG - 13</td>
                                    </tr>
                                    <tr>
                                        <td class="genre">Genre:</td><td class="capitalize">Action, Adventure, Fantasy</td>
                                    </tr>
                                    <tr>
                                        <td class="country">Country:</td><td class="capitalize">PG - 13</td>
                                    </tr>
                                    <tr>
                                        <td class="language">Language:</td><td class="capitalize">English</td>
                                    </tr>
                                    <tr>
                                        <td class="time-duration">Duration:</td><td class="capitalize">141 mins</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="movieCast col-6">
                            <span className="categories">CASTS</span>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><img className="actor_img_1" src={ActorImg}/></td><td class="actor_name">Gal Godot</td>
                                    </tr>
                                    <tr>
                                        <td><img className="actor_img_1" src={ActorImg}/></td><td class="actor_name">Gal Godot</td>
                                    </tr>
                                    <tr>
                                        <td><img className="actor_img_1" src={ActorImg}/></td><td class="actor_name">Gal Godot</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

                <div className="movieGallery col-3">
                    <h3>GALLERY</h3>
                    <div className="movieGallery_img" ><a href="#"><img className="gallery_img" src={MovieImg} alt="social-facebook"/></a></div>
                    <div className="soundtracks"><button className="soundtracks-btn">SOUNDTRACKS</button></div>
                </div>

            </div>
        </div>
    )
}

export default MovieThumnail
