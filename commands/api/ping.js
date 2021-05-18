const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'ping',
	description: 'ping',
	async execute(msg, args) {
		const message = await msg.lineReplyNoMention(`🏓 Pinging....`);

		message.edit(`🏓 Pong!`);
	},
};

//Latency is ${Math.floor(message.createdTimestap - message.createdTimestap)}ms
//API Latency is ${Math.round(client.ping)}ms
