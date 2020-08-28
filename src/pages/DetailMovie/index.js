import { React, useEffect, useState } from "libraries";
import { Menubar, Headline } from '../../components/';
import appConfig from '../../configs/appConfig';
import { API } from '../../configs/';

const DetailMovie = (props) => {
    useEffect(() => {
        const movieId = props.match.params.id
        API.getMovies({ url: `${appConfig.url.api}movie/${movieId}${appConfig.url.key}` })
            .then((res) => {
                console.log(res)
                setMovies(true)
                setHeadlineMovie({
                    title: res.title,
                    backdrop: res.backdrop_path,
                    avg_vote: res.vote_average,
                    overview: res.overview,
                    release_date: res.release_date
                })
            })
    }, [])

    const [movies, setMovies] = useState([]);
    const [headlineMovie, setHeadlineMovie] = useState({
        title: 'Loading',
        backdrop: '.jpg',
        avg_vote: 'Loading'
    })
    return (
        <>
            <Menubar />
            <Headline movie={headlineMovie} />
            <div className="content container">
                {
                    !movies ? 'Loading +++++' : 'Component'
                }

            </div>
        </>
    )

};

export default DetailMovie;
