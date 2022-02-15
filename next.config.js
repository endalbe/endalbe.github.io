const path = require('path');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
	assetPrefix: !debug
		? 'https://endalbe.github.io'
		: 'https://endalbe.github.io',
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};
