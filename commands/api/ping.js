const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const client = new Discord.Client();

module.exports = {
	name: 'ping',
	description: 'ping',
	async execute(message, args) {
		const msg = await message.lineReplyNoMention(`🏓 Pinging...`)
            msg.edit(`🏓 Pong!\nMessage edit ping is ${Math.floor(msg.createdAt - message.createdAt)}MS!`)
	},
};
