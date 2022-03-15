const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: 'cat',
	description: 'cat',
	async execute(message) {
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		const embed = new Discord.MessageEmbed()
			.setTitle('Cat')
			.setColor('#595AB6')
			.setImage(file);
		return message.lineReplyNoMention(embed);
	},
};
