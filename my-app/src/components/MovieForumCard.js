import React from 'react';

function MovieForumCard({name,title,subject,comment}){
    return(
        <li className = "forumCard">
            <h3>Subject:<p>{subject}</p></h3>
            <h3>Movie Title:<p>{title}</p></h3>
            <p>Comment :<p>{comment}</p></p>
            <p>Submitted By:{name}</p>
        </li>
    )
}

export default MovieForumCard;