import '../styles/app.scss';
import theme from '../theme';

import { ChakraProvider } from '@chakra-ui/react';

const PortfolioApp = ({ Component, pageProps }) => (
	<ChakraProvider theme={theme}>
		<Component {...pageProps} />
	</ChakraProvider>
);

export default PortfolioApp;
