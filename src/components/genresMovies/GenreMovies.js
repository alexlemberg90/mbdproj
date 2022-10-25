import React from "react";
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

import Stars from "../StarsRating/Stars";

export default function GenreMovies({results, onFilmClick}) {

    const {original_title, overview, release_date, vote_average, vote_count, poster_path} = results;


    return (
        <div className={'movies'}>
            <Card>
                <CardImg src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${original_title} poster`}/>
                <CardBody>
                    <CardTitle tag="h5">{original_title}</CardTitle>
                    <CardText>{overview}</CardText>
                    <b>Release date:{release_date}</b>
                    <div><Stars ratingNum={vote_average}/> (total vote: {vote_count})</div>
                    <Button onClick={() => onFilmClick(results)}>Movie Details</Button>
                </CardBody>
            </Card>
        </div>
    );
}
