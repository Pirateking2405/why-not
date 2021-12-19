const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'poll',
	description: 'starts a poll',

	async execute(message, args) {
		const theDescription = args.slice(0).join(' ');
		if (!theDescription) return message.reply('Please specify a description/question for the poll!');
		const userArray = message.content.split(' ');
		const userArgs = userArray.slice(1);
		const member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(' ') || x.user.username === userArgs[0]) || message.member;
		const embed = new MessageEmbed()
			.setColor(0x3d9af2)
			.setTitle('Poll')
			.setDescription(theDescription)
			.setFooter('Poll started by: ' + message.author.username + '#' + message.author.discriminator, member.user.displayAvatarURL());

		const msgEmbed = await message.lineReplyNoMention(embed);
		await msgEmbed.react('✅');
		await msgEmbed.react('❌');
	},
};
