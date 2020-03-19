import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "black"}}>
        <Link className="navbar-brand h1 m-0" to="/">
          <span role="img" aria-label="rocket">🚀</span>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
