import '../styles/app.scss';
import theme from '../theme';

import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const PortfolioApp = ({ Component, pageProps }) => {
	const [profile, setProfile] = useState(null);
	const [projects, setProjects] = useState(null);

	async function getData(
		from = 'https://api.github.com/users/endalbe',
		set = setProfile
	) {
		await fetch(from)
			.then((res) => res.json())
			.then((data) => set(data));
	}

	useEffect(() => {
		!profile && getData();
		profile?.repos_url && getData(profile?.repos_url, setProjects);
	}, [profile]);

	return (
		<ChakraProvider theme={theme}>
			<Navbar profile={profile} />

			<Component projects={projects} profile={profile} {...pageProps} />
		</ChakraProvider>
	);
};

export default PortfolioApp;
