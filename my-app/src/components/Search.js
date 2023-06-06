import React from "react";

function Search ({ handleSearch }) {
    return (
        <div className="search">
                <input type="text" className="searchTerm" placeholder="Search Movies" onChange={handleSearch}/>
            <button type="submit" className="searchButton">
                <i className="material-icons">search</i>
            </button>
        </div>
    )
}

export default Search;
