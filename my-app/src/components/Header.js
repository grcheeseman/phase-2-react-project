import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        Harry Potter Movies
        <span className="logo" role="img">
          🪄
        </span>
      </h1>
      <nav>
        <ul>
        <Link to = "/">Home Page</Link>
        <Link to = "/forum">Movie Forum</Link> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
