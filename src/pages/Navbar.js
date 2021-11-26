import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

const NavBar = ({location}) => {
  // Create a hook to toggle the state variable
  const [isNavVisible, toggleNavVisibility] = useState(false);
  useEffect(() => {
    console.log(`effect! ${location.pathname}`);
    toggleNavVisibility(false);
  }, [location]);

<<<<<<< HEAD
	return (
		<nav id='navbar' className='navbar-container container'>
			<Link to='/' className='home-link'>
				Website Name
			</Link>
			<button
				type='button'
				id='navbar-toggle'
				aria-controls='navbar-menu'
				aria-label='Toggle menu'
				aria-expanded={isNavVisible}
				onClick={(e) => {
					toggleNavVisibility(!isNavVisible);
					console.log('blerk');
				}}
			>
				<span className='icon-bar'></span>
				<span className='icon-bar'></span>
				<span className='icon-bar'></span>
			</button>
			{/* Only show the menu if isNavVisible === true */}
			{isNavVisible && (
				<div
					id='navbar-menu'
					aria-labelledby='navbar-toggle'
					role='button'
					tabindex={0}
					onClick={(e) => {
						toggleNavVisibility(!isNavVisible);
					}}
					onKeyDown={isNavVisible}
				>
					<ul className='navbar-links'>
						<li className='navbar-item'>
							<Link className='navbar-link' to='/'>
								Home
							</Link>
						</li>
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
=======
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
>>>>>>> 612c5672a5c0f232c8d7ea1074cb9844c25f0559
};
export default NavBar;
