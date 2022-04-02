import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Footer from '../components/Footer';

import Capsules from '../pages/capsules/Capsules';
import Cores from '../pages/cores/Cores';
import Launches from '../pages/launches/Launches';
import About from '../pages/about/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/cores" element={<Cores />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
