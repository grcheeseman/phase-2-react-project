import React from 'react';

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