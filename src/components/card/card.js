import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div data-testid= "movie-poster" className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <><Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
                    <div data-testid="movie-poster" className="cards">
                        <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                        <div className="heart"></div>
                        <div data-testid="movie-title" className="card__title">
                            {movie ? movie.original_title : ""}
                        </div>
                        <div data-testid="movie-release-date" className="card__release">
                            {movie ? movie.release_date : ""}
                        </div>
                    </div>
                </Link></>
    }
    </>
}

export default Cards