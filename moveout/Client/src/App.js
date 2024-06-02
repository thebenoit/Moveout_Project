//import logo from './logo.svg';
import "../src/App.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer"
import React from "react";
//import logoSource from './'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../src/components/Pages/Home";
import Demenagement from "../src/components/Pages/Demenagement";
import Login from "../src/components/Pages/Login"
import Appartments from "../src/components/Pages/Appartements"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/demenagement" element={<Demenagement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Appartments" element={<Appartments />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
