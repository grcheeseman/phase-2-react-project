import React from "react";
import { useEffect,useState } from "react";

import Search from "./Search";
import MovieForm from "./MovieForm";
import MovieCollection from "./MovieCollection";


function MoviePage() {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        fetch(" http://localhost:3001/movies")
            .then(resp=> resp.json())
            .then(movies => setMovies(movies))
    },[])

    return (
        <div className='movie-page'>
            <Search />
            <MovieForm />
            <MovieCollection movies = {movies} />
        </div>
    )

}

export default MoviePage;
