import React from "react";

function Search () {
    return (
        <div class="search">
            <label>Search Movies</label>
                <input type="text" class="searchTerm" placeholder="" />
            <button type="submit" class="searchButton">
                <i class="material-icons">search</i>
            </button>
        </div>
    )
}

export default Search;
