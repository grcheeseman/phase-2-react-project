import React from "react";

function Search ({ handleSearch }) {
    return (
        <div className="search">
            <form onSubmit = {handleSearch}>
                <input type="text" className="searchTerm" name = "searchTerm" placeholder="Search Movies" />
            <button type="submit" className="searchButton">
                <i className="material-icons">search</i>
            </button>
            </form>
        </div>
    )
}

export default Search;
