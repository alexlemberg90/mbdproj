import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import GenreMovies from "./GenreMovies";
import {genresActions} from "../../redux/slices/genresSlice";
import {moviesService} from "../../services";

export default function GenresMovies() {

    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();
    const {genresMovie} = useSelector(state => state.genresReducer)

    useEffect(() => {
        moviesService.getGenresMovie(id).then((results)=>dispatch(genresActions.getGenresMovie(results)))
    }, [id]);

    const onFilmClick = (film) => {
        navigate(`/movies/${film.id}`)
    };

    return (
        <div className={'mainMovies'}>
            {
                genresMovie.map((movie) => <GenreMovies key={movie.id} results={movie} onFilmClick={onFilmClick}/>)
            }
        </div>
    );
}