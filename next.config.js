const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	assetPrefix: isProd ? '/endalbe/' : '',
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};
