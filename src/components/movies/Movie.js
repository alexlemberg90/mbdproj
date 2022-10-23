import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {Button} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import {moviesService} from "../../services";
import Stars from "../StarsRating/Stars";

export default function Movie() {
    const {movie} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        moviesService.getMovieDetails(id).then((results) => dispatch(movieActions.getMovie(results)))
    }, [movie, id]);
    const onGenreFilmClick = (id) => {
        navigate(`/genresMovie/${id}`)
    };
    console.log(movie)
    return (
        (movie != null && <div className={'movie'}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                     alt={`${movie.original_title} poster`}/>
            </div>
            <div className={"textMovie"}>
                <h2>{movie.original_title}</h2>
                <h3>Genres: {movie.genres.map(({name, id}) => <Button outline color="success" key={id}
                                                                      onClick={() => onGenreFilmClick(id)}>{name}</Button>)} </h3>
                <span>Rating:  <Stars ratingNum={movie.vote_average}/>(total vote: {movie.vote_count})</span>
                <p>{movie.overview}</p>
                <span>Release date:{movie.release_date}</span>
            </div>
        </div>)

    )
}