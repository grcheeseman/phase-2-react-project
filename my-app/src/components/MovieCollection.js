import React from 'react';
import MovieCard from "./MovieCard";

function MovieCollection({movies}){
     const renderMoviesToCards = movies.map((movie)=>
        <MovieCard
            key = {movie.id}
            name = {movie.name}
            image = {movie.image}
            release = {movie.release}
        />
     )
    return(
        <ul className = "cards">
            {renderMoviesToCards}
        </ul>
    )
}

export default MovieCollection;