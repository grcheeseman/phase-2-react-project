import React from 'react';
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail"

function MovieCollection({movies}){
    console.log(movies)
    // const renderMoviesToCards = 
    return(
        <ul className = "cards">
            <MovieCard />
            <MovieDetail />
        </ul>
    )
}

export default MovieCollection;