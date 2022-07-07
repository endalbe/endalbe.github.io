import {
	Badge,
	Button,
	Heading,
	Stack,
	Text,
	useColorModeValue,
	WrapItem
} from '@chakra-ui/react';

const linkStyle = {
	width: 'auto'
};

export const Project = ({ project }) => {
	const date = new Date(project?.updated_at || project?.created_at)
		.toJSON()
		.slice(0, 10);
	const time = new Date(project?.updated_a || project?.created_at)
		.toJSON()
		.slice(12, 16);

	return (
		<WrapItem pb={6} w={{ base: '100%', md: 'auto' }}>
			<Stack
				borderWidth="1px"
				borderRadius="lg"
				width="100%"
				minH={{
					sm: '476px',
					md: '20rem'
				}}
				direction={{
					base: 'column'
				}}
				bg={useColorModeValue('white', 'gray.900')}
				boxShadow={'md'}
				padding={2}
			>
				<Stack
					flex={1}
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					pt={1}
				>
					<Heading fontSize={'2xl'} fontFamily={'body'}>
						{project?.name}
					</Heading>

					<Text
						fontSize={'12'}
						textAlign={'center'}
						color={useColorModeValue('gray.700', 'gray.400')}
						px={3}
					>
						Latest active: {date + ' ' + time}
					</Text>
				</Stack>

				{(project?.html_url || project?.homepage) && (
					<Stack
						width={'100%'}
						direction={'row'}
						padding={2}
						justifyContent={'center'}
						alignItems={'center'}
					>
						{project?.html_url && (
							<a
								href={project?.html_url}
								target="_blank"
								rel="noreferrer"
								style={linkStyle}
							>
								<Button
									flex={1}
									fontSize={'sm'}
									rounded={'full'}
									bg={'blue.400'}
									color={'white'}
									boxShadow={
										'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
									}
									_hover={{
										bg: 'blue.500'
									}}
									_focus={{
										bg: 'blue.500'
									}}
								>
									Show on GitHub
								</Button>
							</a>
						)}

						{project?.homepage && (
							<a
								href={project?.homepage}
								target="_blank"
								rel="noreferrer"
								style={linkStyle}
							>
								<Button
									flex={1}
									fontSize={'sm'}
									rounded={'full'}
									bg={'green.400'}
									color={'white'}
									boxShadow={
										'0px 1px 25px -5px rgb(56 161 105 / 48%), 0 10px 10px -5px rgb(56 161 105 / 43%)'
									}
									_hover={{
										bg: 'green.500'
									}}
									_focus={{
										bg: 'green.500'
									}}
								>
									Go website
								</Button>
							</a>
						)}
					</Stack>
				)}
				<Stack
					flex={1}
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					p={1}
					pt={2}
				>
					<Badge
						px={2}
						py={1}
						bg={useColorModeValue('gray.50', 'gray.800')}
						fontWeight={'400'}
					>
						{project?.language}
					</Badge>
					<Text
						textAlign={'center'}
						color={useColorModeValue('gray.700', 'gray.400')}
						px={3}
					>
						{project?.description || ''}
					</Text>
				</Stack>
			</Stack>
		</WrapItem>
	);
};

export default Project;
