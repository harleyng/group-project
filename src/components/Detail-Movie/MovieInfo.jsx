import React, { useState, useEffect } from 'react'
import $ from 'jquery'

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import { Star } from '@material-ui/icons';
import { yellow } from '@material-ui/core/colors';

import { db } from '../../backend/firebase'
const MovieInfo = props => {
    const [movieInfo, setmovieInfo] = useState({})
    const [cityList, setcityList] = useState([])
    const [theaterList, settheaterList] = useState([])
    const [showList, setshowList] = useState([])
    const [dayList, setdayList] = useState([])
    const [selectedTheaterId, setselectedTheaterId] = useState(null)

    const cityRef = db.collection('city')
    const theaterRef = db.collection('theater')
    const showRef = db.collection('showtime')

    let current = new Date();
    let currentDate = current.getDate();
    let currentMonth = current.getMonth() + 1;
    let currentYear = current.getFullYear();


    useEffect(() => {
        fetchMovieInfo();
        fetchCity();
    }, [])

    const fetchMovieInfo = () => {
        db.collection("movie").where("id", "==", props.id)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (Object.keys(movieInfo).length == 0) {
                    setmovieInfo(doc.data())
                }
                });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }
    const fetchCity = () => {
        cityRef
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if  (cityList.includes(doc.data()) == false) {
                    setcityList(oldArray => [...oldArray, doc.data()])
                }
            })
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
            });
    }
    const handleCitySelect = (e) => {
        theaterRef.where("city_id", "==", e.target.value)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if  (theaterList.includes(doc.data()) == false) {
                    settheaterList(oldArray => [...oldArray, doc.data()])
                }
            })
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
            });

        $('#theaterSelector').addClass('clickable');
    }
    const handleTheaterSelect = (e) => {
        console.log(e.target.value)
        theaterRef.where("id", "==", e.target.value)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setselectedTheaterId(doc.id);
            })
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
            });

        $('#DateSelector').addClass('clickable');
    }
    const handleDateSelect = (e) => {
        let selectedDate;
        if (currentDate <= e.target.value) {
            selectedDate = `${e.target.value}/${currentMonth}/${currentYear}`;
        } else {
            if (currentMonth == 12) {
                selectedDate = `${currentDate}/1/${currentYear + 1}`;
            } else {
                selectedDate = `${currentDate}/${currentMonth + 1}/${currentYear}`;
            }
        }

        showRef
        .where("movie_id", "==", movieInfo.id)
        .where("date", "==", selectedDate)
        .where("theater_id", "==", selectedTheaterId)
        .get()
        .then((querySnapshot) => {
            setshowList([])
            querySnapshot.forEach((doc) => {
                if  (showList.includes(doc.data()) == false) {
                    console.log('false')
                    setshowList(oldArray => [...oldArray, doc.data()])
                }
            })
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
            });

        $('.detail__listOfDay--item').removeClass("active")
        e.target.className += " active"
    }
    const generateDate = () => {
        let current = new Date();
        let dayList = [];
        const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        // Starting Monday not Sunday
        current.setDate((current.getDate() - current.getDay() +1));
        for (let i = 0; i < 14; i++) {
            let today = {"date": current.getDate(), "day": current.getDay()}
            dayList.push(<li class="detail__listOfDay--item " value={today.date} onClick={handleDateSelect}><p class="dayOfWeek">{today.date}</p><p class="date">{weekDay[today.day]}</p></li>)
            current.setDate(current.getDate() +1);
        }
        // setdayList(dayList);
        return dayList; 
    }
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
    const StyledRating = withStyles({
        iconFilled: {
          color: yellow.A200, //#ffff00
        }
      })(Rating);
    
    return (
        <div className="MovieInfo">
            <div className="detail_content row">
                <div className="movieThumbnail col-3 ">
                    <div className="movieThumbnail_img" ><a href="#"><img className="movie_img" src={movieInfo.SmImage}/></a></div>
                    {/* <div className="like"><button className="like-btn">LIKES</button></div> */}
                    {/* <div className="booking"><button className="booking-btn">BOOKING</button></div> */}
                </div>

                <div className="movieDetail col-9">
                    <div className="row">
                        <div className="movie_Info col-12">
                            <h1>{movieInfo.title}</h1>
                            <p className="detail">{movieInfo.desc}</p>

                            <div className="bookingDetail row">
                                <div className="detail col-3">
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="grouped-native-select" style={{color: "wheat"}}>City</InputLabel>
                                        <Select native defaultValue="" id="grouped-native-select" style={{color: "wheat"}} onChange={handleCitySelect}>
                                            <option aria-label="None" value="" />
                                            {cityList.map(city => (
                                                <React.Fragment key = {city.id}>
                                                    <option value={city.id}>{city.name}</option>
                                                </React.Fragment>
                                            ))}
                                        </Select>
                                    </FormControl>  

                                    <FormControl id="theaterSelector" className={classes.formControl}>
                                        <InputLabel htmlFor="grouped-native-select" style={{color: "wheat"}}>Theater</InputLabel>
                                        <Select native defaultValue="" id="grouped-native-select" style={{color: "wheat"}} onChange={handleTheaterSelect}>
                                            <option aria-label="None" value="" />
                                            {theaterList.map(theater => (
                                                <React.Fragment key = {theater.id}>
                                                    <option value={theater.id}>{theater.name}</option>
                                                </React.Fragment>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>

                                <div className="listOfDay col-9">
                                    <ul id="DateSelector" className="detail__listOfDay">
                                        {generateDate()}
                                    </ul>
                                    <div className="detail-showlist row">
                                            {showList.map(show => (
                                                <div className="button-time">
                                                    <Button variant="contained">{show.startTime}</Button>
                                            </div>
                                            ))}
                                    </div>
                                </div>       
                            </div>
                            
                            <div className="movieInfo-container row">
                                <div className="movieInfo-content">
                                    <span className="rating">
                                        <StyledRating
                                            name="read-only"
                                            value={movieInfo.ratingIMDB/2}
                                            precision={0.1}
                                            emptyIcon={< Star style={{ color: 'white' }} />}
                                            readOnly
                                        />
                                    </span>
                                    <span className="ageRating">{movieInfo.ageRating}</span>
                                    <span className="duration">{movieInfo.duration} mins</span>
                                    <span className="releaseDate">{movieInfo.releaseYear}</span>
                                </div>
                            </div>

                            <h4 className="categories">DETAILS</h4>

                            <div className="MovieDetail row">
                                <div className="movieDetail col-6">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td class="director">Director:</td><td class="capitalize">{movieInfo.director}</td>
                                            </tr>
                                            <tr>
                                                <td class="stars">Stars:</td><td class="capitalize">{movieInfo.stars}</td>
                                            </tr>
                                            <tr>
                                                <td class="genre">Genre:</td><td class="capitalize">{movieInfo.genre}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="movieCast col-6">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td class="country">Country:</td><td class="capitalize">USA</td>
                                            </tr>
                                            <tr>
                                                <td class="language">Language:</td><td class="capitalize">English</td>
                                            </tr>
                                            <tr>
                                                <td class="time-duration">Duration:</td><td class="capitalize">{movieInfo.duration} mins</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <span className="categories">CASTS</span>
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
                                    </table> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="movie-story-trailer">

                    <div className="movie-storyline">
                        {/* <span className="storyline">STORYLINE</span>
                        
                        <div className="storyline-content">
                        <span>Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, when a pilot crashes on their shores and tells of a massive conflict raging in the outside world, Diana leaves her home, convinced she can stop the threat. Fighting alongside man in a war to end all wars, Diana will discover her full powers and her true destiny....</span>
                        </div> */}
                    </div>

                    <div className="trailer">
                        <div className="trailer_vid">
                            <iframe width="800" height="600" src={movieInfo.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

                    </div>
                </div>
            </div>     
        </div>
    )
}

export default MovieInfo
