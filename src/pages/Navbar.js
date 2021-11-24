import React, { useState, useCallback } from 'react';
import { Link } from 'gatsby';

const NavBar = () => {
	// Create a hook to toggle the state variable
	const [isNavVisible, toggleNavVisibility] = useState(false);

	return (
		<nav class='navbar-container container'>
			<Link href='/' class='home-link'>
				Website Name
			</Link>
			<button
				type='button'
				id='navbar-toggle'
				aria-controls='navbar-menu'
				aria-label='Toggle menu'
				aria-expanded={isNavVisible}
				onClick={(e) => toggleNavVisibility()}
			>
				<span className='icon-bar'></span>
				<span className='icon-bar'></span>
				<span className='icon-bar'></span>
			</button>
			// Only show the menu if isNavVisible === true
			{isNavVisible && (
				<div id='navbar-menu' aria-labelledby='navbar-toggle'>
					<ul className='navbar-links'>
						<li className='navbar-item'>
							<Link className='navbar-link' href='/about'>
								About
							</Link>
						</li>
						<li className='navbar-item'>
							<Link className='navbar-link' href='/blog'>
								Blog
							</Link>
						</li>
						<li className='navbar-item'>
							<Link className='navbar-link' href='/careers'>
								Careers
							</Link>
						</li>
						<li className='navbar-item'>
							<Link className='navbar-link' href='/contact'>
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
