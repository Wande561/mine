import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; 
import Home from './pages/Home';
import About from './pages/About'; 
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;