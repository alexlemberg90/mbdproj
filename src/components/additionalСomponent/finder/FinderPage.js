import {useSelector} from "react-redux";
import {Card, CardBody, CardTitle} from "reactstrap";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function FinderPage() {
    const {search} = useSelector(state => state.movieReducer);
    const navigate = useNavigate()
    const getMovie = (id) =>
        navigate(`/movies/${id}`)
    ;

    return (<div>
            {search.map((movie) =>
                <Card key={movie.id} onClick={() => getMovie(movie.id)}>
                    <CardBody>
                        <CardTitle tag="h5">{movie.name}</CardTitle>
                    </CardBody>
                </Card>
            )}
        </div>
    );
}