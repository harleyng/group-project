import React from 'react'
import Trailer from '../../assets/img/trailer-1.png'
import MovieImg from '../../assets/img/movie-slider-bg.jpg'
import ActorImg from '../../assets/img/gal_gadot.png'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { IconContext } from "react-icons";
import { AiFillStar } from 'react-icons/ai';

const MovieInfo = () => {
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 50,
        },
        formLabel:{
            color:"#000000",
        }
      }));
    const classes = useStyles();

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
                        <div className="movie_Info col-12">
                            <h1>WONDER WOMAN</h1>
                            <p className="detail">When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.</p>

                            <div className="bookingDetail row">
                                <div className="detail col-3">
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="grouped-native-select" style={{color: "wheat"}}>City</InputLabel>
                                        <Select native defaultValue="" id="grouped-native-select" style={{color: "wheat"}}>
                                            <option aria-label="None" value="" />
                                            <option value={1}>TICKETLAND HA NOI</option>
                                            <option value={2}>TICKETLAND HO CHI MINH</option>
                                            <option value={3}>TICKETLAND DA NANG</option>
                                        </Select>
                                    </FormControl>  

                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="grouped-native-select" style={{color: "wheat"}}>Street</InputLabel>
                                        <Select native defaultValue="" id="grouped-native-select" style={{color: "wheat"}}>
                                            <option aria-label="None" value="" />
                                            <option value={1}>TICKETLAND DAO TAN</option>
                                            <option value={2}>TICKETLAND HOANG QUOC VIET</option>
                                            <option value={3}>TICKETLAND THANH CONG</option>
                                        </Select>
                                    </FormControl>
                                </div>

                                <div className="listOfDay col-9">
                                    <ul class="detail__listOfDay">
                                        <li class="detail__listOfDay--item "><p class="dayOfWeek">01</p><p class="date">Mon</p></li>
                                        <li class="detail__listOfDay--item "><p class="dayOfWeek">02</p><p class="date">Tue</p></li>
                                        <li class="detail__listOfDay--item "><p class="dayOfWeek">03</p><p class="date">Wed</p></li>
                                        <li class="detail__listOfDay--item "><p class="dayOfWeek">04</p><p class="date">Thurs</p></li>
                                        <li class="detail__listOfDay--item "><p class="dayOfWeek">05</p><p class="date">Fri</p></li>
                                        <li class="detail__listOfDay--item "><p class="dayOfWeek">06</p><p class="date">Sat</p></li>
                                        <li class="detail__listOfDay--item "><p class="dayOfWeek">07</p><p class="date">Sun</p></li>
                                        <li class="detail__listOfDay--item "><p class="dayOfWeek">08</p><p class="date">Mon</p></li>
                                        <li class="detail__listOfDay--item "><p class="dayOfWeek">09</p><p class="date">Tue</p></li>
                                        <li class="detail__listOfDay--item "><p class="dayOfWeek">10</p><p class="date">Wed</p></li>
                                        <li class="detail__listOfDay--item "><p class="dayOfWeek">11</p><p class="date">Thurs</p></li>
                                        <li class="detail__listOfDay--item "><p class="dayOfWeek">12</p><p class="date">Fri</p></li>
                                        <li class="detail__listOfDay--item "><p class="dayOfWeek">13</p><p class="date">Sat</p></li>
                                        <li class="detail__listOfDay--item "><p class="dayOfWeek">14</p><p class="date">Sun</p></li>
                                    </ul>
                                    <div className="detail-showlist row">
                                        <div className="button-time">
                                            <Button variant="contained">8:30</Button>
                                        </div>
                                        <div className="button-time">
                                            <Button variant="contained">10:30</Button>
                                        </div>
                                        <div className="button-time">
                                            <Button variant="contained">12:30</Button>
                                        </div>
                                        <div className="button-time">
                                            <Button variant="contained">14:30</Button>
                                        </div>
                                        <div className="button-time">
                                            <Button variant="contained">16:30</Button>
                                        </div>
                                        <div className="button-time">
                                            <Button variant="contained">20:30</Button>
                                        </div>
                                        <div className="button-time">
                                            <Button variant="contained">22:30</Button>
                                        </div>
                                        <div className="button-time">
                                            <Button variant="contained">23:30</Button>
                                        </div>
                                    </div> 
                                </div>       
                            </div>
                            
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
                            <iframe width="1000" height="400" src="https://www.youtube.com/embed/1Q8fG0TtVAY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

                    </div>
                </div>
            </div>     
        </div>
    )
}

export default MovieInfo
