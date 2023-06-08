import React from 'react';

function MovieForumCard({name,title,subject,comment}){
    return(
        <li className = "forumCard">
            <h3>Subject: <br/>{subject}</h3>
            <h3>Movie Title: <br/>{title}</h3>
            <p>Comment : <br/>{comment}</p>
            <p>Submitted By: <br/>{name}</p>
        </li>
    )
}

export default MovieForumCard;