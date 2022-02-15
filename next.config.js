const path = require('path');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
	assetPrefix: !debug ? '/endalbe.github.io' : '',
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};
