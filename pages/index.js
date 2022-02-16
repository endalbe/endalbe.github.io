import {
	Box,
	Button,
	Center,
	Divider,
	Flex,
	Heading,
	HStack,
	Tag,
	TagLabel,
	Text,
	useColorModeValue
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '../components/Layout';
import styles from '../styles/pages/Home.module.scss';

export default function Home(props) {
	const profile = props.profile;

	return (
		<Layout home className={styles.container}>
			{profile ? (
				<Box flex={2} flexDirection="row" marginX={10} marginY={14}>
					{profile?.avatar_url && (
						<Image
							width={300}
							height={300}
							src={profile?.avatar_url}
							alt="avatar"
						/>
					)}

					{profile?.name && (
						<Heading size={'lg'} fontSize="50px">
							{profile?.name}
						</Heading>
					)}

					{profile?.location && (
						<Text
							mt={1}
							color={useColorModeValue('gray.500', 'cyan.300')}
							fontSize="sm"
						>
							{profile?.location}
						</Text>
					)}

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

					{profile?.bio && (
						<Text fontSize="xl" mt={12}>
							{profile?.bio}
						</Text>
					)}

					{(profile?.total_private_repos ||
						profile?.public_repos) && (
						<>
							<Divider my={8} />

							<Flex flexDirection="row" alignItems="center">
								<Text
									fontWeight={'bold'}
									color={useColorModeValue(
										'gray.500',
										'cyan.300'
									)}
								>
									Repositories:
								</Text>
								{profile?.total_private_repos && (
									<Flex
										flexDirection="row"
										alignItems="center"
										mx={4}
										bg={useColorModeValue(
											'gray.300',
											'gray.600'
										)}
										px={4}
										py={1}
										rounded="md"
									>
										<Text color={'gray.500'}>Private</Text>
										<HStack spacing={4} ml={2}>
											<Tag
												size={'lg'}
												variant="subtle"
												bg={useColorModeValue(
													'gray.100',
													'gray.800'
												)}
												color={useColorModeValue(
													'gray.500',
													'gray.200'
												)}
												fontSize={20}
											>
												<TagLabel>
													{
														profile?.total_private_repos
													}
												</TagLabel>
											</Tag>
										</HStack>
									</Flex>
								)}

								{profile?.public_repos && (
									<Link href={'/github'}>
										<Button
											bg={useColorModeValue(
												'blue.400',
												'blue.400'
											)}
											mx={4}
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
													color={useColorModeValue(
														'white',
														'white'
													)}
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
															{
																profile?.public_repos
															}
														</TagLabel>
													</Tag>
												</HStack>
											</Flex>
										</Button>
									</Link>
								)}
							</Flex>
						</>
					)}
				</Box>
			) : (
				<Center mt={10}>
					<Text fontSize={20}>No data</Text>
				</Center>
			)}
		</Layout>
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
		const res = await fetch('https://api.github.com/users/endalbe');

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
