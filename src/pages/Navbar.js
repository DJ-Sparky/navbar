import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

const NavBar = ({location}) => {
  // Create a hook to toggle the state variable
  const [isNavVisible, toggleNavVisibility] = useState(false);
  useEffect(() => {
    console.log(`effect! ${location.pathname}`);
    toggleNavVisibility(false);
  }, [location]);

  return (
    <nav id="navbar" className='navbar-container container'>
      <Link to='/' className='home-link' state={{ fromNav: true }}>
        Website Name
      </Link>
      <button
        type="button"
        role="button"
        id='navbar-toggle'
        aria-controls='navbar-menu'
        aria-label='Toggle menu'
        aria-expanded={isNavVisible}
        onClick={e => toggleNavVisibility(!isNavVisible)}
      >
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
      </button>
      {/* // Only show the menu if isNavVisible === true */}
      {isNavVisible && (
        <div id='navbar-menu' aria-labelledby='navbar-toggle'>
          <ul className='navbar-links'>
            <li className='navbar-item'>
              <Link className='navbar-link' to='/about'>
                About
              </Link>
            </li>
            <li className='navbar-item'>
              <Link className='navbar-link' to='/blog'>
                Blog
              </Link>
            </li>
            <li className='navbar-item'>
              <Link className='navbar-link' to='/careers'>
                Careers
              </Link>
            </li>
            <li className='navbar-item'>
              <Link className='navbar-link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
