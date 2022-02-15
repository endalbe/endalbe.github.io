import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
	Avatar,
	Box,
	Button,
	Flex,
	HStack,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Stack,
	useColorModeValue,
	useDisclosure
} from '@chakra-ui/react';
import ReactLink from 'next/link';

import content from '../routes/pages';
import ThemeSwitcher from './ThemeSwitcher';

const Links = content.pages;

const NavLink = ({ path, children }) => (
	<ReactLink key={new Date().getTime()} href={path}>
		<Button px={4} py={1} rounded={'md'}>
			{children}
		</Button>
	</ReactLink>
);

export default function Navbar({ home, profile }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
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
								rounded={'full'}
								variant={'link'}
								cursor={'pointer'}
								minW={0}
							>
								<Avatar size="md" src={profile?.avatar_url} />
							</MenuButton>
							<MenuList>
								<a
									rel="noreferrer"
									target={'_blank'}
									href={'https://t.me/endalbe'}
								>
									<MenuItem>Telegram</MenuItem>
								</a>
								<a
									rel="noreferrer"
									target={'_blank'}
									href={'https://instagram.com/endalbe'}
								>
									<MenuItem>Instagram</MenuItem>
								</a>
								<a
									rel="noreferrer"
									target={'_blank'}
									href={'https://vk.com/endalbe'}
								>
									<MenuItem>VK</MenuItem>
								</a>
							</MenuList>
						</Menu>
						<Box>
							<a
								href={profile?.html_url}
								rel="noreferrer"
								target="_blank"
							>
								{profile?.login}
							</a>
						</Box>

						<HStack
							as={'nav'}
							spacing={4}
							display={{ base: 'none', md: 'flex' }}
						>
							{Links.map((link) => (
								<>
									{link.path === '/' ? (
										!home ? (
											<NavLink path={link.path}>
												{link.pageName}
											</NavLink>
										) : (
											''
										)
									) : (
										<NavLink path={link.path}>
											{link.pageName}
										</NavLink>
									)}
								</>
							))}
						</HStack>
					</HStack>
					<ThemeSwitcher />
					<IconButton
						size={'md'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={'Open Menu'}
						display={{ md: 'none' }}
						onClick={!isOpen ? onOpen : onClose}
					/>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: 'none' }}>
						<Stack as={'nav'} spacing={4}>
							{Links.map((link) => (
								<NavLink key={link?.path} path={link.path}>
									{link.pageName}
								</NavLink>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</Box>
	);
}
