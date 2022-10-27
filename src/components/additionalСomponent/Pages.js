import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {movieActions} from "../../redux";

export default function Pages() {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {totalPage} = useSelector(state => state.movieReducer);


    const pagesInput = ({page}) => {
        dispatch(movieActions.getPage(page))
        navigate('/')
    }


    return (<div>
            <form onSubmit={handleSubmit(pagesInput)}>
                <input type="number" placeholder={'page'} {...register('page')} min="1" max={totalPage}/>
                <button>Page</button>
            </form>

        </div>
    );
}