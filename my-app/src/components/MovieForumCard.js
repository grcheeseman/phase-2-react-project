import React from 'react';

function MovieForumCard({name,title,subject,comment}){
    return(
        <li className = "card">
            <h4>{name}</h4>
            <h2>{title}</h2>
            <h3>{subject}</h3>
            <p>{comment}</p>
        </li>
    )
}

export default MovieForumCard;