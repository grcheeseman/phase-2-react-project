import React from "react";

function MovieDetail({ name, image, release, summary }){
    return(
        <div>
            <li className = "detail">
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>Year Released: {release}</p>
            <p>Movie Summary: {summary}</p>
        </li>
        </div>
    )
}

export default MovieDetail;