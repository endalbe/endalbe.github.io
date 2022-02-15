import { extendTheme } from '@chakra-ui/react';

const config = {
	cssVarPrefix: 'stl',
	useSystemColorMode: true
};

const theme = extendTheme({ config });

export default theme;
