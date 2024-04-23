//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import React from 'react';
//import logoSource from './'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './components/Pages/Home'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact  Component={Home}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
