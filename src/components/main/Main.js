import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import Movies from "../movies/Movies";
import {movieActions} from "../../redux";
import {genresActions} from "../../redux/slices/genresSlice";
import {moviesService} from "../../services";

export default function Main() {
    const navigate = useNavigate();
    const {movies, page} = useSelector(state => state.movieReducer);
    const {genres} = useSelector(state => state.genresReducer);
    const dispatch = useDispatch();


    const mergedGenresMovies = movies.map((movie) => {
        const {genre_ids} = movie;

        const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId))

        return {
            ...movie,
            movieGenresList
        }
    });

    useEffect(() => {
        moviesService.getMovies(page).then(({results}) => dispatch(movieActions.getMovies(results)))

    }, [page,movies]);
    useEffect(() => {
        dispatch(genresActions.getGenres())
    }, [])

    const onFilmClick = (film) => {
        navigate(`/movies/${film.id}`)
    }
    const onGenreFilmClick = (id) => {
        navigate(`/genresMovie/${id}`)
    }

    return (
        <div className={'mainMovies'}>
            {
                mergedGenresMovies.map((movie) => <Movies onFilmClick={onFilmClick} onGenreFilmClick={onGenreFilmClick}
                                                          key={movie.id} movies={movie}/>)
            }
        </div>
    );
}