import React, {useEffect, useState, } from "react"
import "./movie.css"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    
    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])
    
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=92b19e59621c28c47ddc3ec4c87949f6`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    return (
        <div className="movie">
            <Link to="/"><img alt="" className="header__icon" src="logo.png" /></Link>
            <div className="side__bar">

            <div className="hmtu">
                <div className="home">
                    <img src="Home.png" alt="" />
                    <a>Home</a>
                </div>

                <div className="movies">
                    <img src="Movie Projector.png" alt="" />
                    <a> Movies</a>
                </div>

                <div className="series">
                    <img src="TV Show.png" alt="" />
                    <a>TV Series</a>
                </div>

                <div className="upcoming">
                    <img src="Calendar.png" alt="" />
                    <a>Upcoming</a>
                </div>
            </div>
                <div className="movie__quiz">
                    <p className="play">Play movie quizzes and earn free tickets</p>
                    <p className="sub">50k people are playing now</p>
                    <button>Start playing</button>
                </div>

                <div className="logout">
                    <img src="Logout.png" alt="" />
                    <p>Log Out </p>
                </div>
            </div>

        <div className="right">
            <div className="movie__intro">
                <img className="movie__backdrop" alt="" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" alt="" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
            <div className="movie__detailRight">
                <div className="movie__detailRightTop">
                    <div data-testid= "movie-title" className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}
                    </div>
                    <div className="movie__rating"> <FontAwesomeIcon icon="fa-duotone fa-tomato" style={{"--fa-primary-color": "#f4f80d", "--fa-secondary-color": "#ce1a0d", "--fa-secondary-opacity": "1",}} />
                        {currentMovieDetail ? currentMovieDetail.vote_average: ""} 
                        <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                    </div>  
                    <div data-testid= "movie-runtime" className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
                    </div>
                    <div data-testid= "movie-release-date" className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}
                    </div>
                    <div className="movie__genres">
                        {
                            currentMovieDetail && currentMovieDetail.genres
                                ? 
                            currentMovieDetail.genres.map(genre => (
                                <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                            )) 
                                : 
                                ""
                        }
                    </div>
                </div>
                    <div className="movie__detailRightBottom">
                        <div  data-testid= "movie-overview" className="overviewText">Overview</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
            </div>
            </div>
        </div>
            
        </div>
    )
}

export default Movie