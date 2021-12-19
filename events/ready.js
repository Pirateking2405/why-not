module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log('I\'m in');
		console.log(client.user.username);
		client.user.setPresence({ activity: { name: `on ${client.guilds.cache.size} servers` }, status: 'idle' });
	},
};