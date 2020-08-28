import { React, useEffect, useState, useDispatch, useSelector } from "libraries";
import { setMovie } from '../../modules/redux/'
import { API } from '../../configs/';
// import appConfig from '../../configs/appConfig'; 
import { sortTitle } from '../../utils/index';

import '../../assets/scss/style.scss';
import './homepage.scss';

import star from '../../assets/images/star.png'

import { MyButton, Menubar, Headline } from '../../components/';

const Homepage = () => {

  const dispatch = useDispatch();

  const [movies, setMovies] = useState([]);
  const [headlineMovie, setHeadlineMovie] = useState({
    title: 'Scooby Doo',
    backdrop: 'b5Fej0UT6gPFd2GcGEWw4SAwGUM.jpg',
    avg_vote: '7.2',
    overview: 'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced'
  })

  useEffect(() => {
    API.getMovies()
      .then((res) => {
        console.log(res)
        setMovies(res.axiosResponse.data.results)
      }).then(dispatch(setMovie(true)))
  }, [])

  const { set_movies } = useSelector((state) => ({
    // return state.movies.set_movies
    set_movies: state.movies.set_movies
  }))

  function detailMovie(id) {
    // API.getMovies({ url: `${appConfig.url.api}movie/${id}${appConfig.url.key}` })
    //   .then((res) => {
    //     console.log(res)
    //   }).then(dispatch(setMovie(true)))
  }

  const Card = (props) => (
    <div className="grid-item">
      <img src={`http://image.tmdb.org/t/p/w200/${props.urlImg}`} alt={props.text} />
      <p className="title-text">
        {
          props.title
        }
      </p>
      <div className="desc-sort">
        <img src={star} alt="star_average" />
        <p className="vote-avg">{props.vote_avg} &nbsp; <small>Release Year {props.year.substr(0, 4)}</small> </p>
      </div>
      <a href={`movie/${props.movie_id}`}>
        <MyButton title="View Details" className="button-sm mt-0" isWide onClick={() => detailMovie(props.movie_id)} />
      </a>
    </div>
  )


  return (
    <>
      <Menubar />
      <div className="content">
        <Headline movie={headlineMovie} />
        <div className="grid-container">
          <h2>Popular Movies</h2>
          {
            set_movies ? movies.map((item, key) => {
              return <Card title={sortTitle(item.title)} key={key} urlImg={item.poster_path} movie_id={item.id} vote_avg={item.vote_average} year={item.release_date} />
            }
            ) : 'Loading ...'
          }
        </div>
      </div>
    </>
  )

};

export default Homepage;
