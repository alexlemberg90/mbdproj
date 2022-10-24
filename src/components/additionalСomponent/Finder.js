import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export default function Finder() {
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch();

    useEffect(() => {

    }, []);
    const search = ({find}) => {

// moviesService.getSearch(find).then(())
    }
// TODO "Доробити!!!!!"

    return (<div>
            <form onSubmit={handleSubmit(search)}>
                <input type="text" placeholder={'find'} {...register('find')}/>
                <button>Find</button>
            </form>
        </div>
    );
}