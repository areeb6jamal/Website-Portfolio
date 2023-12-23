import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={About}/>
        <Route path="/skills" element={About}/>
        <Route path="/projects" element={About}/>
        <Route path="/contact" element={About}/>
      </Routes>
    </Router>
  );
};

export default App;
