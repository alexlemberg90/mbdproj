import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {moviesService} from "../../services";
import {movieActions} from "../../redux";

export default function MovieInfo() {
const {id} = useParams();
    const dispatch = useDispatch();
    const {movie} = useSelector(state => state.movieReducer)
useEffect(()=>{
    moviesService.getMovieDetails(id).then(({data})=>dispatch(movieActions.getMovie(data)))
},[id])
    return (<div>
            {movie && movie.id}
        </div>
    );
}