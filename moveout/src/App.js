//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

import React from 'react';
//import logoSource from './'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact />

        </Routes>
      </Router>
    </>
  );
}

export default App;
