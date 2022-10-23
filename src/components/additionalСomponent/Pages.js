import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {moviesService} from "../../services";
import {movieActions} from "../../redux";

export default function Pages() {
    const {register, handleSubmit, formState: {isValid}} = useForm()
    const dispatch = useDispatch();
    const page = 2;
    useEffect(() => {
    moviesService.getPages(page).then((results) => dispatch(movieActions.getMovies(results)))
    }, []);

    const search = async () => {

    }

    return (<div>
            <form onSubmit={handleSubmit(search)}>
                <button>Prev</button>
                <input type="number" placeholder={'movie'} {...register('movie')}/>
                <button disabled={!isValid}>Next</button>


            </form>
        </div>
    );
}