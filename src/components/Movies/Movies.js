import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import Movie from "../Movie/Movie";

export default function Movies() {

    const dispatch = useDispatch();
    const {movies, error, loading} = useSelector(state => state.movieReducer)
    const {results} = movies;
    console.log(movies)
    useEffect(() => {
        dispatch(movieActions.getMovies())
    }, [movies]);

    return (<div>
            {loading && <h1>LOADING</h1>}
            {error && <h1>errrrr</h1>}
            {results.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
}