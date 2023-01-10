import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Capsules from '../pages/capsules/Capsules';
import Cores from '../pages/cores/Cores';
import Launches from '../pages/launches/Launches';
import Payloads from '../pages/payloads/Payloads';
import Rockets from '../pages/rockets/Rockets';
import About from '../pages/about/About';

const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/cores" element={<Cores />} />
        <Route path="/payloads" element={<Payloads />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
