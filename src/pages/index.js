import * as React from 'react';

// styles
const pageStyles = {
	color: '#232129',
	padding: 96,
	fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
	marginTop: 0,
	marginBottom: 64,
	maxWidth: 320,
};

const IndexPage = () => {
	return (
		<main style={pageStyles}>
			<title>Home Page</title>
			<h1 style={headingStyles}>Home</h1>
		</main>
	);
};

export default IndexPage;
