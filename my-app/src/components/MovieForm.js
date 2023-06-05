import React from "react";

function MovieForm () {

    function handleSubmitForm(e) {
        e.preventDefault()
        
        const newMovie = {
            name: e.target.title.value,
            date: e.target.date.value,
            image: e.target.image.value,
            summary: e.target.summary.value
        }

        fetch('http://localhost:3001/movies', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
        .then((resp) => resp.json())
        .then((newMovie) => console.log(newMovie))

        e.target.reset()
    }
    
    return (
        <div className="form-container">
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="title">Movie Title</label>
                    <input type="text" id="title" name="title" placeholder="Title..." />
                <label htmlFor="date">Release Year</label>
                    <input type="text" id="date" name="date" placeholder="Date released..." />
                <label htmlFor="image">Image URL</label>
                    <input type="text" id="image" name="image" placeholder="Image URL..." />
                <label htmlFor="summary">Summary</label>
                    <textarea type="text" id="summary" name="summary" placeholder="Write the summary here..."></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default MovieForm;
