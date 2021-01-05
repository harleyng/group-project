import React from 'react'
import Trailer from '../../assets/img/trailer-1.png'

const MovieInfo = () => {
    return (
        <div className="MovieInfo">
            <div className="movie-storyline">
                <span className="storyline">STORYLINE</span>
            </div>
            <div className="storyline-content">
                <span>Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, when a pilot crashes on their shores and tells of a massive conflict raging in the outside world, Diana leaves her home, convinced she can stop the threat. Fighting alongside man in a war to end all wars, Diana will discover her full powers and her true destiny....</span>
            </div>
            <div className="trailer">
                <div className="trailer_vid">
                    <iframe width="700" height="400" src="https://www.youtube.com/embed/1Q8fG0TtVAY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="another_list">
                <div>

                </div>
            </div>
        </div>
    )
}

export default MovieInfo
