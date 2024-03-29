import React from 'react'
import { yellow } from '@material-ui/core/colors';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import { Star } from '@material-ui/icons';

// React Icons
import { BiCalendar } from 'react-icons/bi'
import { AiOutlineClockCircle } from 'react-icons/ai'


const PosterSliderItem = props => {
  const StyledRating = withStyles({
    iconFilled: {
      color: yellow.A200, //#ffff00
    }
  })(Rating);

  return (
    <div className="item-container"
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
      <div className="item-content">
        <div className="overall">
          <h1 className="title uppercase">{props.title}</h1>
          <div className="poster-info">
            <div className="genre capitalize">
              {props.genre}
            </div> 
            <div className="release-date">
              <span className="mr-2"><BiCalendar/></span>  
              <span>{props.releaseYear}</span> 
            </div>
            <div className="duration">
              <span className="mr-2"><AiOutlineClockCircle/></span>  
              <span>{props.duration} Mins</span>
            </div>
          </div>
          <div className="poster-info">
            <div className="rating-imdb">
              <StyledRating
                name="read-only"
                value={props.ratingIMDB/2}
                precision={0.1}
                emptyIcon={< Star style={{ color: 'white' }} />}
                readOnly
              />
              <span className="ml-2">{props.ratingIMDB}/10 IMDB</span>
            </div>
            <div className="age-rating">
              {props.ageRating}
            </div>
          </div>
          <div className="button-container">
            <Button variant="contained" className="pill-button">BOOK</Button>
            <Button variant="contained" className="pill-button">MORE</Button>
          </div>
        </div>
        <div className="detail">
          <table>
            <tbody>
              <tr>
                <td className="director yellow-text">Director:</td>
                <td className="capitalize">{props.director}</td>
              </tr>
              <tr>
                <td className="stars yellow-text">Stars:</td>
                <td className="capitalize">
                  {props.stars}  
                </td>
              </tr>
            </tbody>
          </table>
          <p>{props.desc}</p>
        </div>
      </div>
      
      
    </div>
  )
}

export default PosterSliderItem
