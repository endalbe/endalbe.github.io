import Head from 'next/head';

import Navbar from './Navbar';

function Layout({ home, children }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<meta name="description" content="Portfolio site" />
				<meta name={'theme-color'} />
			</Head>

			<Navbar home={home} />

			<main>{children}</main>
		</div>
	);
}

export default Layout;
