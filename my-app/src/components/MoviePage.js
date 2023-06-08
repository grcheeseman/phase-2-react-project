import React from "react";
import { useEffect,useState } from "react";
import Search from "./Search";
import MovieCollection from "./MovieCollection";

function MoviePage() {
    const [ movies, setMovies ] = useState([])
    const [ searchTerm, setSearchTerm ] = useState("")
    
    useEffect(()=>{
        fetch(" http://localhost:3001/movies")
            .then(resp=> resp.json())
            .then(movies => setMovies(movies))
    },[])

    function handleSearch(e) {
        e.preventDefault()
        
        setSearchTerm(e.target.searchTerm.value)
    }
    
    return (
        <div className='movie-page'>
            <Search handleSearch={handleSearch} />
            <MovieCollection movies={movies} searchTerm={searchTerm} />
        </div>
    )
}

export default MoviePage;
