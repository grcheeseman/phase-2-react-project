import React from 'react';


function MovieCard({ name, image, release, id }) {
    return(
        <li className = "card">
            <a href={`/detail/${id}`}>
                <img src={image} alt={name} />
            </a>
            <h4>{name}</h4>
            <p>Year Released: {release}</p>
        </li>
    )
}

export default MovieCard;