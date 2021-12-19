const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'av',
	description: 'avatar',
	execute(msg) {
		const user = msg.mentions.users.first() || msg.author;
		const avatarEmbed = new MessageEmbed()
			.setColor(0x3d9af2)
			.setAuthor(user.username)
			.setImage(user.displayAvatarURL());
		msg.lineReplyNoMention(avatarEmbed);
	},
};