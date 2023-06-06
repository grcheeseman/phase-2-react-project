import React from 'react';
import MovieDetail from './MovieDetail';
import MoviePage from './MoviePage';
import MovieForm from './MovieForum';
import Header from './Header';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
    <Header />
    <Routes>
        <Route exact path = '/' element = {<MoviePage />} />
        <Route path = '/forum' element = { <MovieForm /> } />
        <Route path = '/detail' element = { <MovieDetail /> } />
    </Routes>
    </div>
  )
}

export default App;
