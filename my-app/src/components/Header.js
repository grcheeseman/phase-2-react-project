import React from "react";
//import MovieDetail from "./MovieDetail"

function Header() {
  return (
    <header>
      <h1>
        Harry Potter Movies
        <span className="logo" role="img">
          🪄
        </span>
      </h1>
        {/* <link to={"./MovieDetail"}>
          <li>Movie Details</li>
        </link>
        <link to={"./MovieForm"}>
          <li>Movie Forum</li>
        </link>  */}
    </header>
  );
}

export default Header;
