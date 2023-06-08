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
                <label htmlFor="form">Submit your comment here!</label>
                    <input type="text" id="name" name="name" placeholder="Your Name..." required/> 
                    <select id="title" name="title" required>                        
                        <option value={null}>Select Movie</option>
                        <option value="Harry Potter and the Sorcerer's Stone">Harry Potter and the Sorcerer's Stone</option>
                        <option value="Harry Potter and the Chamber of Secrets">Harry Potter and the Chamber of Secrets</option>
                        <option value="Harry Potter and the Prisoner of Azkaban">Harry Potter and the Prisoner of Azkaban</option>
                        <option value="Harry Potter and the Goblet of Fire">Harry Potter and the Goblet of Fire</option>
                        <option value="Harry Potter and the Order of the Phoenix">Harry Potter and the Order of the Phoenix</option>
                        <option value="Harry Potter and the Half Blood Prince">Harry Potter and the Half Blood Prince</option>
                        <option value="Harry Potter and the Deathly Hallows Part 1">Harry Potter and the Deathly Hallows Part 1</option>
                        <option value="Harry Potter and the Deathly Hallows Part 2">Harry Potter and the Deathly Hallows Part 2</option>
                    </select>
                    <input type="text" id="subject" name="subject" placeholder="Subject..." />
                    <textarea className="comment-text" type="text" id="comment" name="comment" placeholder="Write your comment here..."></textarea>
                <button type="submit" value="Submit" name="button">APARECIUM 🪄</button> 
            </form>
            <div className = "forumCards">
                {renderMovieForum}
            </div>
        </div>
    )
}

export default MovieForum;
