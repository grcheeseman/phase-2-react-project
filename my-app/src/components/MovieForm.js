import React from "react";

function MovieForm () {
    return (
        <div class="form-container">
            <form>

                <label for="title">Movie Title</label>
                    <input type="text" id="title" name="title" placeholder="Title..." />

                <label for="date">Last Name</label>
                    <input type="text" id="date" name="date" placeholder="Date watched..." />

                <label for="review">Review</label>
                    <textarea id="review" name="review" placeholder="Write your review here..." style="height:200px"></textarea>

                <input type="submit" value="Submit" />

            </form>

        </div>
    )
}

export default MovieForm;
