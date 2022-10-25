import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {moviesService} from "../../../services";
import {movieActions} from "../../../redux";


export default function Finder() {
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

    }, []);
    const search = ({find}) => {
        moviesService.getSearch(find).then(({results}) => dispatch(movieActions.searchPage(results)))
        navigate('/search')
    }

    return (<div>
            <form onSubmit={handleSubmit(search)}>
                <input type="text" placeholder={'find'} {...register('find')}/>
                <button>Find</button>
            </form>
        </div>
    );
}