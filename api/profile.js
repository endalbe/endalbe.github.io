import { Octokit } from '@octokit/core';

export default async function handler(req, res) {
	const octokit = new Octokit({
		auth: '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'
	});

	try {
		const { data } = await octokit.request('GET /users/{username}', {
			username: 'endalbe'
		});

		const response = await data;
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.setHeader('Cache-Control', 'max-age=180000');
		res.end(JSON.stringify(response));

		return res;
	} catch (error) {
		res.json(error);
		res.status(405).end();
	}
}
