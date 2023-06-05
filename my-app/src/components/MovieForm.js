import React from "react";

function MovieForm () {
    return (
        <div className="form-container">
            <form className = "Movie-Form">
                <label for="title">Movie Title</label>
                    <input type="text" id="title" name="title" placeholder="Title..." />
                <label for="date">Date Watched</label>
                    <input type="text" id="date" name="date" placeholder="Date watched..." />
                <label for="image">Image URL</label>
                    <input type="text" id="image" name="image" placeholder="Image URL..." />
                <label for="review">Review</label>
                    <textarea type="text" id="review" name="review" placeholder="Write your review here..."></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default MovieForm;
