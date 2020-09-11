import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar sticky-top navbar-expand-lg navbar-dark"
        style={{ backgroundColor: 'black' }}
      >
        <a className="navbar-brand h1 m-0 font-weight-light" href="/">
          <span role="img" className="mr-2" aria-label="rocket">
            <FontAwesomeIcon icon={faRocket} />
          </span>
          SpaceX Capsules
        </a>
      </nav>
    );
  }
}

export default Navbar;
