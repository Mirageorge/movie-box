import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "top_rated"}?api_key=92b19e59621c28c47ddc3ec4c87949f6&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "Featured Movie")}</h2>
            <div className="list__cards">
                {
                    movieList.slice(0,10).map(movies => (
                        <Cards movie={movies} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList