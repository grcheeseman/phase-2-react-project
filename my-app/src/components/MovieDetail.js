import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
    const params = useParams();

    const [ movie, setMovie ] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:3001/movies/${params.movieId}`)
            .then(resp=> resp.json())
            .then(movie => setMovie(movie))
    },[])

    return(
        <div>
            <img src={movie.image} alt={movie.name} />
            <h1>{movie.name}</h1>
            <p>Year Released: {movie.release}</p>
            <p>Movie Summary: {movie.summary}</p>
        </div>
    )
}



export default MovieDetail;