import Head from 'next/head';

import Navbar from './Navbar';

function Layout({ home, children, profile }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="" />
				<meta name="theme-color" content="#0f1624" />
				<meta property="og:image" content="" />
				<meta name="og:title" content="" />
				<meta name="twitter:card" content="" />
			</Head>

			<Navbar home={home} profile={profile} />

			<main>{children}</main>
		</div>
	);
}

export const getStaticProps = async () => {
	if (process.browser) {
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
		if (process.browser) {
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
