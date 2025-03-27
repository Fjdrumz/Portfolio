import React from 'react';


function NavBar() {
  return (
      <nav className="navbar">
        <h2 className='logo'>
          About <span>Me</span>
        </h2>
        <ul className="nav-links">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICE</li>
          <li>PORTFOLIO</li>
          <li>RESUME</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>
      </nav>
  );
}

export default NavBar;