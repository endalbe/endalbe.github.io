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

const Github = ({ projects }) => {
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
						justify="space-around"
						mb={14}
						mt={4}
					>
						{projects.map((project) => (
							<Project key={project?.id} project={project} />
						))}
					</Wrap>
				</Center>
			</Container>
		</Layout>
	);
};

export default Github;
