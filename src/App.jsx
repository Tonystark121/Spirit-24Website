/** @format */

import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Event from "./Pages/Event";
import Partner from "./Pages/Partner";
import React from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Speakers from "./Pages/Speakers";

const App = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <Home />
      <Navbar />
      <About />
      <Speakers />
      <Event />
      <Partner/>
      <Footer />
    </div>
  );
};

export default App;
