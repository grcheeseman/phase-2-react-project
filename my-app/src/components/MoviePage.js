import React, { useState } from "react";

import Search from "./Search";
import MovieForm from "./MovieForm";
import MovieCollection from "./MovieCollection";

function MoviePage() {
    const [ searchTerm, setSearchTerm ] = useState("")

    function handleSearch(e) {
        console.log(e.target.value)
        setSearchTerm(e.target.value)
    }
    
    return (
        <div className='movie-page'>
            <Search handleSearch={handleSearch} />
            <MovieForm />
            <MovieCollection searchTerm={searchTerm} />
        </div>
    )
}

export default MoviePage;
