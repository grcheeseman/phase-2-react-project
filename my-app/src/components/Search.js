import React from "react";

function Search ({ handleSearch }) {
    return (
        <div className="search">
            <label>Search Movies</label>
                <input type="text" className="searchTerm" placeholder="" onChange={handleSearch}/>
            <button type="submit" className="searchButton">
                <i className="material-icons">search</i>
            </button>
        </div>
    )
}

export default Search;
