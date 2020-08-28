import { React, useEffect, useState } from "libraries";

import { updateDimensions, convertDate } from '../../../utils/helper/index';

import { MyButton } from '../../../components';

import star from '../../../assets/images/star.png';
import play from '../../../assets/images/play-white.svg';

import './headline.scss';

const Headline = (props) => {

    const [dimension, setDimension] = useState(0);

    useEffect(() => {
        updateDimensions();

        window.addEventListener("resize", updateDimensions); //to update width size props to updateDimensions
        setDimension(updateDimensions())
        console.log(dimension)
    },[dimension])

    const background = {
        backgroundImage: `linear-gradient(to right, #000, transparent 70%, transparent), url("http://image.tmdb.org/t/p/w1280/${props.movie.backdrop}")`,
    }
    const backgroundResponsive = {
        backgroundImage: `linear-gradient(to top, #000, transparent 50%, transparent), url("http://image.tmdb.org/t/p/w1280/${props.movie.backdrop}")`,
    }

    let overview = props.movie.overview

    return (
        <div className="content">
            <div className="headline">
                <div className="backdrop center p-64" style={background}>
                    <img src={play} alt="play_button" className="btn_play" />
                    <div className="desc">
                        <h1>{props.movie.title}</h1>
                        <div className="wrap-vote_avg">
                            <img src={star} alt="star_average" />
                            <p className="vote-avg">{7.2} &nbsp; <small>Release { convertDate(props.movie.release_date) }</small> </p>
                        </div>
                        <p className="overview" style={{ width: '500px', color: 'white', fontSize: '18px' }}>{overview}</p>
                        <MyButton title={"Watch Trailer"} className="watch_trailer" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Headline;

