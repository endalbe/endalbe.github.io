import {
	Center,
	Container,
	Divider,
	Flex,
	Heading,
	HStack,
	Spinner,
	Tag,
	TagLabel,
	useColorModeValue,
	Wrap
} from '@chakra-ui/react';

import { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import Project from '../components/Project';
import useGetDataApi from '../hooks/useGetDataApi';

const Github = () => {
	const { data, isLoadingProjects, isErrorProjects } = useGetDataApi('repos');
	const [projects, setProjects] = useState(data);

	useEffect(() => {
		setProjects(data);
	}, [data]);

	if (isLoadingProjects) return <Spinner />;
	if (isErrorProjects) return <div>Error</div>;

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
								<TagLabel>{projects?.length}</TagLabel>
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
						{projects &&
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

export default Github;
