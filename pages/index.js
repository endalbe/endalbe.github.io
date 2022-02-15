import {
	Box,
	Divider,
	Flex,
	Heading,
	HStack,
	Spinner,
	Tag,
	TagLabel,
	Text,
	useColorModeValue,
	Button
} from '@chakra-ui/react';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import useGetDataApi from '../hooks/useGetDataApi';
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
	// const { data, isLoadingProfile, isErrorProfile } = useGetDataApi('profile');
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

	const [profile, setProfile] = useState(data);

	useEffect(() => {
		setProfile(data);
	}, [data]);

	// if (isLoadingProfile) return <Spinner />;
	// if (isErrorProfile) return <div>Error</div>;

	// if (isLoading) return <p>Loading...</p>;
	// if (!data) return <p>No data</p>;
	// console.log(profile);

	return (
		<Layout home className={styles.container}>
			<Box marginX={10} marginY={14}>
				{profile?.name && (
					<Heading size={'lg'} fontSize="50px">
						{profile?.name}
					</Heading>
				)}
				<Text
					mt={1}
					color={useColorModeValue('gray.500', 'cyan.300')}
					fontSize="sm"
				>
					{profile?.location}
				</Text>

				{profile?.email && (
					<Text
						mt={4}
						fontSize="md"
						color={useColorModeValue('cyan.500', 'cyan.100')}
					>
						<a href={'mailto:' + profile?.email}>
							{profile?.email}
						</a>
					</Text>
				)}
				{profile?.twitter_username && (
					<Text fontSize="md" color="cyan.500">
						<a
							href={
								'https://twitter.com/' +
								profile?.twitter_username
							}
						>
							Twitter:
						</a>
					</Text>
				)}

				<Text fontSize="xl" mt={12}>
					{profile?.bio}
				</Text>

				<Divider my={8} />

				<Flex flexDirection="row" alignItems="center">
					<Text
						fontWeight={'bold'}
						color={useColorModeValue('gray.500', 'cyan.300')}
					>
						Repositories:
					</Text>
					<Flex
						flexDirection="row"
						alignItems="center"
						mx={4}
						bg={useColorModeValue('gray.300', 'gray.600')}
						px={4}
						py={1}
						rounded="md"
					>
						<Text color={'gray.500'}>Private</Text>
						<HStack spacing={4} ml={2}>
							<Tag
								size={'lg'}
								variant="subtle"
								bg={useColorModeValue('gray.100', 'gray.800')}
								color={useColorModeValue(
									'gray.500',
									'gray.200'
								)}
								fontSize={20}
							>
								<TagLabel>
									{profile?.total_private_repos}
								</TagLabel>
							</Tag>
						</HStack>
					</Flex>
					<Link href={'/github'}>
						<Button
							bg={useColorModeValue('blue.400', 'blue.400')}
							px={4}
							py={1}
							rounded={'md'}
							_hover={{
								bg: 'blue.500'
							}}
							_focus={{
								bg: 'blue.500'
							}}
							_active={{
								bg: 'blue.700'
							}}
						>
							<Flex
								flexDirection="row"
								alignItems="center"
								mx={4}
							>
								<Text
									color={useColorModeValue('white', 'white')}
								>
									Public
								</Text>
								<HStack spacing={4} ml={2}>
									<Tag
										size={'lg'}
										variant="subtle"
										bg={useColorModeValue(
											'blue.300',
											'blue.700'
										)}
										color={useColorModeValue(
											'white',
											'white'
										)}
										fontSize={20}
									>
										<TagLabel>
											{profile?.public_repos}
										</TagLabel>
									</Tag>
								</HStack>
							</Flex>
						</Button>
					</Link>
				</Flex>
			</Box>
		</Layout>
	);
}
