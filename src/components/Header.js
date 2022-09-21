import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Math Magicians</h1>
      <div id="h-links">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/calculator" className="link">Calculator</NavLink>
        <NavLink to="/quote" className="link">Quote</NavLink>
      </div>
    </header>

  );
}

export default Header;
