module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log("I'm in");
        console.log(client.user.username);
        client.user.setActivity(`on ${client.guilds.cache.size} servers`);
	},
};