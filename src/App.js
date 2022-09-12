import './App.css';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './component/Home';

import Genre from './component/music/Genre';
import React from 'react';
import Transaction from './component/transaction/Transaction';



function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/music/genre' element={<Genre />}></Route>
        <Route path='/transaction' element={<Transaction />}></Route>
      </Routes>
      </div>

    </BrowserRouter>
    
  );
}

export default App;
