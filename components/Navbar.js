import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Container,
	Flex,
	HStack,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Stack,
	Text,
	useColorModeValue,
	useDisclosure,
	useMediaQuery
} from '@chakra-ui/react';
import ReactLink from 'next/link';
import { useRouter } from 'next/router';
import content from '../routes/pages';

const Links = content.pages;

const NavLink = ({ path, children }) => (
	<ReactLink key={new Date().getTime()} href={path}>
		<Button px={4} py={1} rounded={'md'}>
			{children}
		</Button>
	</ReactLink>
);

export default function Navbar({ profile }) {
	const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();

	return (
		<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
			<Container maxW={'container.lg'} padding={!isLargerThan1280 && '0'}>
				<Flex
					h={16}
					alignItems={'center'}
					justifyContent={'space-between'}
				>
					<HStack
						spacing={8}
						alignItems={'center'}
						marginRight={'auto'}
					>
						<Menu>
							<MenuButton
								as={Button}
								rounded={profile?.avatar_url ? 'full' : ''}
								variant={'link'}
								cursor={'pointer'}
								style={{
									border: 'none !important',
									outline: 'none !important',
									boxShadow: 'none !important',
									textDecoration: 'none !important'
								}}
								minW={0}
							>
								{profile?.avatar_url ? (
									<ButtonGroup gap="2" alignItems={'center'}>
										<Avatar
											size="md"
											src={profile?.avatar_url || ''}
										/>
										<Text
											style={{
												textDecoration: 'none'
											}}
										>
											Evgeny Agapov
										</Text>
									</ButtonGroup>
								) : (
									<IconButton
										ml={2}
										size={'md'}
										icon={
											isOpen ? (
												<CloseIcon />
											) : (
												<HamburgerIcon />
											)
										}
										aria-label={'Open Menu'}
									/>
								)}
							</MenuButton>
							<MenuList>
								<a
									href={
										profile?.html_url ||
										'https://github.com/endalbe'
									}
									rel="noreferrer"
									target="_blank"
								>
									<MenuItem>
										Github @{profile?.login || 'endalbe'}
									</MenuItem>
								</a>
								<a
									rel="noreferrer"
									target={'_blank'}
									href={'https://t.me/front_endalbe'}
								>
									<MenuItem>Telegram @front_endalbe</MenuItem>
								</a>
							</MenuList>
						</Menu>

						<HStack
							as={'nav'}
							spacing={0}
							display={{ base: 'none', md: 'flex' }}
						>
							{Links.map((link) => (
								<Box
									style={{
										textDecoration: 'none',
										color: 'inherit'
									}}
									key={link.path}
								>
									{link.path !== router.pathname && (
										<NavLink path={link.path}>
											{link.pageName}
										</NavLink>
									)}
								</Box>
							))}
						</HStack>
					</HStack>

					<IconButton
						ml={2}
						size={'md'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={'Open Menu'}
						display={{ md: 'none' }}
						onClick={!isOpen ? onOpen : onClose}
					/>
				</Flex>

				{isOpen && (
					<Box pb={4} display={{ md: 'none' }}>
						<Stack as={'nav'} spacing={4}>
							{Links.map(
								(link) =>
									link.path !== router.pathname && (
										<NavLink
											width={'100%'}
											path={link.path}
										>
											{link.pageName}
										</NavLink>
									)
							)}
						</Stack>
					</Box>
				)}
			</Container>
		</Box>
	);
}
