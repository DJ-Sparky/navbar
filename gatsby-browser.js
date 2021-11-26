import React from 'react';
// custom CSS styles
import './src/style.css';

import NavBar from './src/pages/Navbar';

export const wrapPageElement = ({ element, props }) => (
	<div>
		<header>
			<NavBar />
		</header>
		{element}
	</div>
);
