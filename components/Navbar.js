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
import { useState, useEffect } from 'react';

const Links = content.pages;

const NavLink = ({ path, children }) => (
	<ReactLink key={new Date().getTime()} href={path}>
		<Button px={4} py={1} rounded={'md'}>
			{children}
		</Button>
	</ReactLink>
);

export default function Navbar({ home, data }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		if (!profile) {
			setTimeout(async () => {
				const res = await fetch('https://api.github.com/users/endalbe');

				const data = await res.json();

				if (typeof window !== 'undefined') {
					localStorage.setItem('profileData', data);
				}

				setProfile(data);
			});
		}
	}, [profile]);

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
								rounded={profile?.avatar_url ? 'full' : ''}
								variant={'link'}
								cursor={'pointer'}
								minW={0}
							>
								{profile?.avatar_url ? (
									<Avatar
										size="md"
										src={
											profile?.avatar_url ||
											'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/272182244_708371740568035_2131386680590510043_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=8BjCnarGTngAX_qRMdL&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_HEcgKz7JdIeNbMlaPKWuCxVGge_uAPndkn5cr5GNGTA&oe=62129859&_nc_sid=7bff83'
										}
									/>
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
								href={
									profile?.html_url ||
									'https://github.com/endalbe'
								}
								rel="noreferrer"
								target="_blank"
							>
								Github @{profile?.login || 'endalbe'}
							</a>
						</Box>

						<HStack
							as={'nav'}
							spacing={4}
							display={{ base: 'none', md: 'flex' }}
						>
							{Links.map((link) => (
								<div key={link.path}>
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
								</div>
							))}
						</HStack>
					</HStack>
					<ThemeSwitcher />
					<IconButton
						ml={2}
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
								<Box key={link.path}>
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
								</Box>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</Box>
	);
}
