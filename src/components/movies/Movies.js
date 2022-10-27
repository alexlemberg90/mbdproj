import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import React from "react";

import Stars from "../StarsRating/Stars";

export default function Movies({movies, onFilmClick, onGenreFilmClick}) {
    const {original_title, overview, release_date, vote_average, vote_count, poster_path, movieGenresList} = movies;
    
    return (
        <div className={'movies'}>

            <Card>
                <CardImg src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${original_title} poster`}
                         onClick={() => onFilmClick(movies)}/>
                <CardBody>
                    <CardTitle tag="h5">{original_title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Genres: {movieGenresList.map(({name, id}) =>
                        <Button outline color="success" key={id}
                                onClick={() => onGenreFilmClick(id)}>{name}</Button>)}</CardSubtitle>
                    <CardText>{overview}</CardText>
                    <b>Release date:{release_date}</b>
                    <div><Stars ratingNum={vote_average}/> (total vote: {vote_count})</div>
                    <Button onClick={() => onFilmClick(movies)}>Movie Details</Button>
                </CardBody>
            </Card>

        </div>
    );
}