import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <nav className="App-header">
      <div className="App-header-left">
        <Link to="/">
          <FontAwesomeIcon className="App-backtohome" icon={faChevronLeft} />
        </Link>
        <h1 data-testid="app-title">Air Quality</h1>
      </div>
      <ul className="App-link">
        <li>
          <NavLink
            to="/"
            className="App-navlink"
          >
            Air Quality Index
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className="App-navlink"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/References"
            className="App-navlink"
          >
            References
          </NavLink>
        </li>
      </ul>
      <FontAwesomeIcon className="App-hamburger" icon={faBars} />
    </nav>
  );
}

export default Header;
