import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
          </Routes> 
        <Footer />
      </div>
    </Router>
  )
}

export default App;
