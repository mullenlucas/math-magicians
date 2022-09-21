import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Math Magicians</h1>
      <div id="h-links">
        <NavLink to="/" className="links">Home</NavLink>
        |
        <NavLink to="/calculator" className="links">Calculator</NavLink>
        |
        <NavLink to="/quote" className="links">Quote</NavLink>
      </div>
    </header>

  );
}

export default Header;
