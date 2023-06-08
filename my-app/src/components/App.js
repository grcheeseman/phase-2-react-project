import React from 'react';
import MovieDetail from './MovieDetail';
import MoviePage from './MoviePage';
import MovieForum from './MovieForum';
import Header from './Header';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className = "body">
      <Header />
      <Routes>
         <Route exact path = '/' element = {<MoviePage />} />
         <Route path = '/forum' element = { <MovieForum /> } />
         <Route path = '/detail/:movieId' element = { <MovieDetail /> } />
      </Routes>
    </div>
  )
}

export default App;
