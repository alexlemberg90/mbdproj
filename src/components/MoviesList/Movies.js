import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import styles from "./movies.module.css"
import Movie from "../MoviesListCard/Movie";
import {movieActions} from "../../redux";
import {Link} from "react-router-dom";

export default function Movies() {

    const dispatch = useDispatch();
    const {movies, error, loading} = useSelector(state => state.movieReducer);
    const {results} = movies;

    useEffect(() => {
        dispatch(movieActions.getMovies())
    }, []);

    const onMovieClick = (movie) => {
        <Link to={`/movie/${movie.id}`}/>
    };

    return (<div className={styles.listWrapper}>
            {loading && <h1>LOADING</h1>}
            {error && <h1>errrrr</h1>}
            {results && results.map(movie => <div className={styles.filmItem} onClick={() => onMovieClick(movie)}
                                                  key={movie.id}><Movie key={movie.id} movie={movie}/></div>)}
        </div>
    );
}