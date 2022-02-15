import { IconButton, useColorMode } from '@chakra-ui/react';

import { WiMoonAltWaxingCrescent4 } from '@react-icons/all-files/wi/WiMoonAltWaxingCrescent4';
import { WiMoonAltWaxingGibbous1 } from '@react-icons/all-files/wi/WiMoonAltWaxingGibbous1';

export default function ThemeSwitcher(props) {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton onClick={toggleColorMode}>
			{colorMode === 'dark' ? (
				<WiMoonAltWaxingCrescent4 />
			) : (
				<WiMoonAltWaxingGibbous1 />
			)}
		</IconButton>
	);
}
