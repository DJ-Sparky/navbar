import React from 'react';
// custom CSS styles
<<<<<<< HEAD
import './src/style.css';
=======
import "./src/style.css";
>>>>>>> 612c5672a5c0f232c8d7ea1074cb9844c25f0559

import NavBar from './src/pages/Navbar';

export const wrapPageElement = ({ element, props }) => (
<<<<<<< HEAD
	<div>
		<header>
			<NavBar />
		</header>
		{element}
	</div>
);
=======
  <div>
    <header>
      <NavBar {...props} />
    </header>
    {element}
  </div>)

>>>>>>> 612c5672a5c0f232c8d7ea1074cb9844c25f0559
