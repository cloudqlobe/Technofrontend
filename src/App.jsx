import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Fixed typo from Navabar to Navbar
import Model from "./components/Model";


import Dmodel from "./components/Dmodel";
import Card from "./components/Card";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
 
      <Model />
      <Dmodel />
      <Card />
      
     
    </Router>
  );
};

export default App;
