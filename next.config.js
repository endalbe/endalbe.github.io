const path = require('path');
const prod = process.env.NODE_ENV === 'production';

module.exports = {
	assetPrefix: prod ? 'https://endalbe.github.io' : '',
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};
