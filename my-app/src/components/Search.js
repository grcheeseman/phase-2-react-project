import React from "react";

function Search () {
    return (
        <div class="search">
            <input type="text" class="searchTerm" placeholder="What are you looking for?" />
            <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
            </button>
        </div>
    )
}

export default Search;
