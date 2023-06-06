import React from "react";

function MovieDetailCard({ name, image, release, summary }){
    return(
        <li className = "details">
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>Year Released: {release}</p>
            <p>Movie Summary: {summary}</p>
        </li>
    )
}

export default MovieDetailCard;