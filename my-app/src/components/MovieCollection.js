import React from 'react';
import MovieCard from "./MovieCard";

function MovieCollection({ movies, searchTerm }){
    
    const filteredMovies = movies.filter((movie) => {
        return movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    
    const renderMoviesToCards = filteredMovies.map((movie)=>
        <MovieCard
            key = {movie.id}
            id = {movie.id}
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