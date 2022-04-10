import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React from 'react';
import AppLogo from '../images/logo.svg';
import { LOGO_HEIGHT } from '../ui';

function Navbar() {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-dark d-flex justify-content-center align-items-center bg-black"
      style={{ backgroundColor: 'black' }}
    >
      <Link className="navbar-brand h1 m-0 font-weight-light" to="/">
        <span role="img" className="me-3" aria-label="rocket">
          <FontAwesomeIcon icon={faRocket} />
        </span>
        <img
          src={AppLogo}
          alt="1spaceX"
          title="1spaceX"
          style={{ height: LOGO_HEIGHT }}
        />
        <span role="img" className="ms-3" aria-label="rocket">
          <FontAwesomeIcon icon={faStar} />
        </span>
      </Link>
    </nav>
  );
}

export default Navbar;
