import React from 'react'
import Trailer from '../../assets/img/trailer-1.png'
import MovieImg from '../../assets/img/movie-slider-bg.jpg'
import ActorImg from '../../assets/img/gal_gadot.png'

import { IconContext } from "react-icons";
import { AiFillStar } from 'react-icons/ai';

const MovieInfo = () => {
    return (
        <div className="MovieInfo">
            <div className="detail_content row">
                <div className="movieThumbnail col-3">
                    <div className="movieThumbnail_img" ><a href="#"><img className="movie_img" src={MovieImg}/></a></div>
                    <div className="like"><button className="like-btn">LIKES</button></div>
                    <div className="booking"><button className="booking-btn">BOOKING</button></div>
                </div>

                <div className="movieDetail col-9">
                    <div className="row">
                        <div className="movie_Info col-8">
                            <h1>WONDER WOMAN</h1>
                            <p className="detail">When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.</p>

                            <div className="movieInfo-container row">
                                <div className="movieInfo-content">
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
                                                <td class="country">Country:</td><td class="capitalize">USA</td>
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
                        <div className="movieGallery col-4">
                            <h3>GALLERY</h3>
                            <div className="movieGallery_img" ><a href="#"><img className="gallery_img" src={MovieImg} alt="social-facebook"/></a></div>
                            <div className="soundtracks"><button className="soundtracks-btn">SOUNDTRACKS</button></div>
                        </div>  
                    </div>
                    <div className="movie-story-trailer">

                    <div className="movie-storyline">
                        <span className="storyline">STORYLINE</span>
                        
                        <div className="storyline-content">
                        <span>Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, when a pilot crashes on their shores and tells of a massive conflict raging in the outside world, Diana leaves her home, convinced she can stop the threat. Fighting alongside man in a war to end all wars, Diana will discover her full powers and her true destiny....</span>
                        </div>
                    </div>

                    <div className="trailer">
                        <div className="trailer_vid">
                            <iframe width="700" height="400" src="https://www.youtube.com/embed/1Q8fG0TtVAY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

                    </div>
                </div>
            </div>     
        </div>
    )
}

export default MovieInfo
