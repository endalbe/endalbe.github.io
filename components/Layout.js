import { Spinner } from '@chakra-ui/react';

import Head from 'next/head';

import useGetDataApi from '../hooks/useGetDataApi';
import Navbar from './Navbar';

function Layout({ children, home }) {
	const {
		data: profile,
		isLoadingProfile,
		isErrorProfile
	} = useGetDataApi('profile') || null;

	if (isLoadingProfile) return <Spinner />;
	if (isErrorProfile) return <div>Error</div>;

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

export default Layout;
