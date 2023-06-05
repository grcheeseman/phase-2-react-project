import React from 'react';
import MoviePage from './MoviePage';
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail"

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
        <ul className = "cards"> {renderMoviesToCards}
           
        </ul>
    )
}

export default MovieCollection;