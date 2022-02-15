import Head from 'next/head';

import Navbar from './Navbar';

function Layout({ home, children, profile }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<meta name="description" content="Portfolio site" />
				<meta name="theme-color" />
			</Head>

			<Navbar home={home} profile={profile || null} />

			<main>{children}</main>
		</div>
	);
}

export const getStaticProps = async () => {
	if (typeof window !== 'undefined') {
		if (localStorage.getItem('profileData')) {
			const profile = localStorage.getItem('profileData');
			return {
				props: {
					profile
				}
			};
		}
	}

	try {
		const res = await fetch('https://api.github.com/users/endalbe', {
			auth: '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'
		});

		const profile = await res.json();
		if (typeof window !== 'undefined') {
			localStorage.setItem('profileData', profile);
		}

		return {
			props: {
				profile
			}
		};
	} catch (error) {
		return { props: null };
	}
};

export default Layout;
