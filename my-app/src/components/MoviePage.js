import React from "react";
import { useEffect,useState } from "react";

import Search from "./Search";
import MovieForm from "./MovieForm";
import MovieCollection from "./MovieCollection";


function MoviePage() {
    const [ movies, setMovies ] = useState([])
    const [ searchTerm, setSearchTerm ] = useState("")
    const [forum,setForum] = useState([])


    useEffect(()=>{
        fetch(" http://localhost:3001/forum")
            .then(resp=> resp.json())
            .then(forum => setForum(forum))
    },[])

    
    useEffect(()=>{
        fetch("http://localhost:3001/movies")
            .then(resp=> resp.json())
            .then(movies => setMovies(movies))
    },[])

    function handleSearch(e) {
        console.log(e.target.value)
        setSearchTerm(e.target.value)
    }
    
    return (
        <div className='movie-page'>
            <Search handleSearch={handleSearch} />
            <MovieForm forum = {forum} setForum = {setForum}/>
            <MovieCollection movies={movies} searchTerm={searchTerm} />
        </div>
    )
}

export default MoviePage;
