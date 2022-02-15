import { Spinner } from '@chakra-ui/react';

import Head from 'next/head';

import useGetDataApi from '../hooks/useGetDataApi';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
// import { Octokit } from '@octokit/core';

// export default async function handler(req, res) {
// 	const octokit = new Octokit({
// 		auth: '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'
// 	});

// 	try {
// 		const { data } = await octokit.request('GET /users/{username}', {
// 			username: 'endalbe'
// 		});

// 		const response = await data;
// 		res.statusCode = 200;
// 		res.setHeader('Content-Type', 'application/json');
// 		res.setHeader('Cache-Control', 'max-age=180000');
// 		res.end(JSON.stringify(response));

// 		return res;
// 	} catch (error) {
// 		res.json(error);
// 		res.status(405).end();
// 	}
// }

function Layout({ children, home }) {
	// const {
	// 	data: profile,
	// 	isLoadingProfile,
	// 	isErrorProfile
	// } = useGetDataApi('profile') || null;
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('api/profile')
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []);

	// if (isLoading) return <p>Loading...</p>;
	// if (!data) return <p>No profile data</p>;

	// console.log();

	// if (isLoadingProfile) return <Spinner />;
	// if (isErrorProfile) return <div>Error</div>;

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

			<Navbar home={home} profile={data} />

			<main>{children}</main>
		</div>
	);
}

export default Layout;
