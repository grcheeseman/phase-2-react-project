import React from "react";
import { Link } from "react-router-dom";
import Sparkle from 'react-sparkle';

function Header() {
  return (
    <header style={{ position: 'relative' }}>
      <Sparkle color={'yellow'}/>
      <h1 >
        
      <Link to = "/">Harry Potter Movies</Link>
        
        <span className="logo" role="img" >
          🪄
        </span>
      </h1>
      <nav>
        <ul>
        <Link to = "/">Home</Link>
        <Link to = "/forum">Forum</Link> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
