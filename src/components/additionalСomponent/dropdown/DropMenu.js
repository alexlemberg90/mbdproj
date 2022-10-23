import React, {useEffect} from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap';


import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {genresActions} from "../../../redux/slices/genresSlice";

export default function DropMenu () {

    const {genres} = useSelector(state => state.genresReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(genresActions.getGenres())
    },[dispatch])

    const genresMoviePage = (value) => {
        navigate(`/genresMovie/${value}`);
    }

    return (

        <UncontrolledDropdown className={'dropMenu'}>
            <DropdownToggle caret color="danger">
                Genres
            </DropdownToggle>
            <DropdownMenu>
                {genres.map((value) => <DropdownItem key={value.id} onClick={() => {genresMoviePage(value.id)}}>{value.name}</DropdownItem>)}
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}