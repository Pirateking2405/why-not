const Discord = require('discord.js')

module.exports = {
	name: 'av',
	description: 'avatar',
	execute(msg, args) {
    const user = msg.mentions.users.first() || msg.author;
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor(0x3d9af2)
        .setAuthor(user.username)
        .setImage(user.displayAvatarURL());
    msg.lineReplyNoMention(avatarEmbed);
  },
};
