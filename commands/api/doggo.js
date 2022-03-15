const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: 'doggo',
	description: 'doggo',
	aliases: ['dog'],
	async execute(message) {
		const { file } = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());
		const embed = new Discord.MessageEmbed()
			.setTitle('dog')
			.setColor('#595AB6')
			.setImage(file);
		return message.lineReplyNoMention(embed);
	},
};
