module.exports = {
	name: 'skip',
	aliases: ['s'],
	async execute(client, message) {
		if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

		const queue = await client.distube.getQueue(message);

		if (queue) {
			client.distube.skip(message);

			message.channel.send('DONE!');
		}
		else if (!queue) {
			return;
		}
	},
};
