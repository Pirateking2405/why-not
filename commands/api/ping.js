module.exports = {
	name: 'ping',
	description: 'ping',
	async execute(message) {
		const msg = await message.lineReplyNoMention('🏓 Pinging...');
		msg.edit(`🏓 Pong!\nMessage edit ping is ${Math.floor(msg.createdAt - message.createdAt)}MS!`);
	},
};