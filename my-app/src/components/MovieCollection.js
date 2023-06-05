import React from 'react';
import React from "react";
import MovieCard from "./MovieCard";

function MovieCollection(){
    return(
        <ul className = "cards">
            <MovieCard />
        </ul>
    )
}

export default MovieCollection;