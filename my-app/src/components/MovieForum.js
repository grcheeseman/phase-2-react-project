import React from "react";
import { useState, useEffect } from 'react';
import MovieForumCard from "./MovieForumCard";

function MovieForum () {

    const [ forums, setForums ] = useState([])

    useEffect(()=>{
        fetch(" http://localhost:3001/forum")
            .then(resp=> resp.json())
            .then(forums => setForums(forums))
    },[])

    const renderMovieForum = forums.map((forum)=>
        <MovieForumCard
            key = {forum.id}
            name = {forum.name}
            title = {forum.title}
            subject = {forum.subject}
            comment = {forum.comment}
        />)

    function handleSubmitForm(e) {
        e.preventDefault()
        
        const newComment = {
            title: e.target.title.value,
            name: e.target.name.value,
            subject: e.target.subject.value,
            comment: e.target.comment.value
        }

        fetch('http://localhost:3001/forum', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then((resp) => resp.json())
        .then((newComment) => setForums([newComment, ...forums ]))

        e.target.reset()
        }
    
    return (
        <div className="form-box">

            <form className ="Movie-Forum" onSubmit={handleSubmitForm} >
            
           
                <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name..." /> 
                <label htmlFor="title">Movie Title</label>
                    <input type="text" id="title" name="title" placeholder="Title..." />
                <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject..." />
                <label htmlFor="comment">Comment</label>
                    <textarea type="text" id="comment" name="comment" placeholder="Write your comment here..."></textarea>
                <button type="submit" value="Submit" name="button">APARECIUM</button>  
                
            </form>

            <div className = "forumCards">{renderMovieForum}</div>
            


        </div>
    )
}

export default MovieForum;
