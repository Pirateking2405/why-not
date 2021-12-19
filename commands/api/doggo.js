const fetch = require('node-fetch');

module.exports = {
	name: 'doggo',
	description: 'doggo',
	async execute(msg) {
		const { message } = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());

		msg.lineReplyNoMention(message);
	},
};