import './App.css';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './component/Home';

import Genre from './component/music/Genre';
import React from 'react';



function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/music/genre' element={<Genre />}>
        </Route>
      </Routes>
      </div>

    </BrowserRouter>
    
  );
}

// function App()
// {
  

//   return (
//     <div className='App'>
      

//     <Test />
//     {/* <MusicPlayerSetup /> */}
//     </div>
//   )
// }

export default App;
