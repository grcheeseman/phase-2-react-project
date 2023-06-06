import React from 'react';
import MovieCollection from './MovieCollection';


function MovieCard({name,image,release}){
    return(
        <li className = "card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>Year Released: {release}</p>
        </li>
    )
}

export default MovieCard;