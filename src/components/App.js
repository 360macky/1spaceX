import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Footer from '../components/Footer';

import Capsules from '../pages/capsules/Capsules';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/capsules" component={Capsules} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
