import React from 'react';

function MovieForumCard({name,title,subject,comment}){
    return(
        <li className = "forumCard">
            <h3>Subject:{subject}</h3>
            <h3>Movie Title:{title}</h3>
            <p>Comment :{comment}</p>
            <p>Submitted By:{name}</p>
        </li>
    )
}

export default MovieForumCard;