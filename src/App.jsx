import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Fixed typo from Navabar to Navbar
import Model from "./components/Model";


import Dmodel from "./components/Dmodel";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Count from "./components/Count";
import Content from "./components/Content";


const App = () => {
  return (
    <Router>
      <Navbar />
   

      <Routes>
        <Route path="/" element={<HomePage />} />

      </Routes>
 
      <Model />
      <Dmodel />
      
      <Content/>
      <Count/>
      <Card />
   
      <Footer/>
      
     
    </Router>
  );
};

export default App;
