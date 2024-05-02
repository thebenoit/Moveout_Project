import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Card";
import Demenagement from "./Demenagement";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Demenagement />
      <Footer />
    </>
  );
}

export default Home;
