const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'serverinfo',
	guildOnly: true,
	description: 'serverinfo',
	execute(msg) {
		const { guild } = msg;
		const { name, region, memberCount, afkTimeout, rulesChannel } = guild;
		const icon = guild.iconURL();
		const embed = new MessageEmbed()
			.setColor(0x3d9af2)
			.setTitle(`Server info for ${name}`)
			.setThumbnail(icon)
			.addFields(
				{
					name: 'Members',
					value: memberCount,
				},
				{
					name: 'Region',
					value: region,
				},
				{
					name: 'AFK Timeout',
					value: afkTimeout / 60,
				},
				{
					name: 'Rules Channel',
					value: rulesChannel,
				},
			);

		msg.lineReplyNoMention(embed);
	},
};
