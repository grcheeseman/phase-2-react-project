import React from 'react';
import MovieCollection from './MovieCollection';


function MovieCard(){
    return(
        <li className = "card">
            <img src={"movie-image"} alt={"movie name"} />
            <h4>{"movie-name"}</h4>
            <p>Year Released: {"year-released"}</p>

        </li>

       
    )
}

export default MovieCard;