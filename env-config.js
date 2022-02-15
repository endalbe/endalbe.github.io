const prod = process.env.NODE_ENV === 'production';

module.exports = {
	'process.env.BACKEND_URL': prod ? 'https://endalbe.github.io' : ''
};
