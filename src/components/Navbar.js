import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRocket } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "black"}}>
        <Link className="navbar-brand h1 m-0 font-weight-light" to="/">
          <span role="img" className="mr-2" aria-label="rocket"><FontAwesomeIcon icon={faRocket} /></span>
          SpaceX Capsules
        </Link>
      </nav>
    );
  }
}

export default Navbar;
