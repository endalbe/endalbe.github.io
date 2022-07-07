import { extendTheme } from '@chakra-ui/react';

const config = {
	cssVarPrefix: 'endalbe-ui',
	useSystemColorMode: true
};

const theme = extendTheme({ config });

export default theme;
