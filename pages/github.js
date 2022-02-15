import {
	Center,
	Container,
	Divider,
	Flex,
	Heading,
	HStack,
	Tag,
	TagLabel,
	useColorModeValue,
	Wrap
} from '@chakra-ui/react';

import Layout from '../components/Layout';
import Project from '../components/Project';

const Github = (props) => {
	const projects = props.projects;

	return (
		<Layout>
			<Container maxW="container.lg">
				<Center>
					<Flex
						flexDirection="row"
						justifyContent="center"
						alignItems="center"
						mt={8}
						mb={4}
					>
						<Heading
							color={useColorModeValue('gray.500', 'cyan.300')}
							size="lg"
						>
							Github Repositories
						</Heading>
						<HStack spacing={4} ml={2}>
							<Tag
								size={'lg'}
								variant="subtle"
								colorScheme="cyan"
								fontWeight="bold"
								fontSize={20}
							>
								<TagLabel>{projects?.length || 0}</TagLabel>
							</Tag>
						</HStack>
					</Flex>
				</Center>

				<Divider />

				<Center>
					<Wrap
						spacing={{ base: '20px', md: '40px' }}
						align="center"
						mb={14}
						mt={4}
					>
						{projects?.length &&
							projects.map((project) => (
								<Project
									key={project?.id}
									project={project}
								></Project>
							))}
					</Wrap>
				</Center>
			</Container>
		</Layout>
	);
};

export const getStaticProps = async () => {
	if (process.browser) {
		if (localStorage.getItem('projectsData')) {
			const projects = localStorage.getItem('projectsData');
			return {
				props: {
					projects
				}
			};
		}
	}

	try {
		const res = await fetch('https://api.github.com/users/endalbe/repos', {
			auth: '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'
		});

		const projects = await res.json();
		if (process.browser) {
			localStorage.setItem('projectsData', projects);
		}

		return {
			props: {
				projects
			}
		};
	} catch (error) {
		return { projects: null };
	}
};

export default Github;
