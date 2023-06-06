import React from "react";
import MovieDetailCard from "./MovieDetailCard";

function MovieDetails({movies}){
     const renderMovieDetails = movies.map((movie)=>
        <MovieDetailCard
            key = {movie.id}
            name = {movie.name}
            image = {movie.image}
            release = {movie.release}
        />
     )
    return(
        <ul className = "details">
            {renderMovieDetails}
        </ul>
    )
}

export default MovieDetails;