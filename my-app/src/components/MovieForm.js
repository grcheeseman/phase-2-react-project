import React from "react";

function MovieForm ({setForum,forum}) {

    function handleSubmitForm(e) {
        e.preventDefault()
        
        const newComment = {
            movieTitle: e.target.title.value,
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
       .then((newComment) => setForum(newComment))

        e.target.reset()
        

    }
    
    return (
        <div className="Movie-Form">

            <form onSubmit={handleSubmitForm} >
                <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name..." /> 
                <label htmlFor="title">Movie Title</label>

                    <input type="text" id="title" name="title" placeholder="Title..." />
                <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject..." />
                <label htmlFor="comment">Comment</label>
                    <textarea type="text" id="comment" name="comment" placeholder="Write your comment here..."></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default MovieForm;
