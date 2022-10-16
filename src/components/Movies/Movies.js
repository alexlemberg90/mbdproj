import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import Movie from "../Movie/Movie";
import {moviesService} from "../../services";

export default function Movies() {
const [car, setCar] = useState([]);
    const dispatch = useDispatch();
    const {movies, error, loading} = useSelector(state => state.movieReducer)
    const {results} = movies;
    console.log(movies)
    useEffect(() => {
        moviesService.getMovies().then(({data}) => setCar(data))
        dispatch(movieActions.getMovies())
    }, [movies]);
    console.log(car)

    return (<div>
            {loading && <h1>LOADING</h1>}
            {error && <h1>errrrr</h1>}
            {results.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
}