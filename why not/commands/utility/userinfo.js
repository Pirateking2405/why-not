const { Client, MessageEmbed, MessageAttachment, ZlibSync, Collection, Discord } = require('discord.js');
const moment = require('moment');

module.exports = {
	name: 'userinfo',
	description: 'userinfo',
	async execute(msg, args) {
		let userArray = msg.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = msg.mentions.members.first() || msg.guild.members.cache.get(userArgs[0]) || msg.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || msg.member;

    if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
    if (member.presence.status === 'online') member.presence.status = 'Online';
    if (member.presence.status === 'idle') member.presence.status = 'Idle';
    if (member.presence.status === 'offline') member.presence.status = 'offline';

		const user = msg.mentions.users.first() || msg.member.user

    let x = Date.now() - member.createdAt;
    let y = Date.now() - msg.guild.members.cache.get(member.id).joinedAt;
    const joined = Math.floor(y / 86400000);

    const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
    let status = member.presence.status;

    const userEmbed = new MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTimestamp()
    .setColor('BLUE')
    .setImage(member.user.displayAvatarURL())
    .addFields(
			{
				name: 'User tag',
				value: user.tag,
				inline: true
			},
			{
				name: 'Nickname',
				value: member.nickname || 'None',
				inline: true
			},
			{
				name: 'Status',
				value: status,
				inline: true
			},
			{
				name: 'Joined Server',
				value: new Date(member.joinedTimestamp).toLocaleDateString(),
				inline: true
			},
			{
				name: 'Joined Discord',
				value: new Date(user.createdTimestamp).toLocaleDateString(),
				inline: true
			},
			{
				name: 'Roles',
				value: member.roles.cache.size - 1,
				inline: true
			},
		)
    .addField('Roles', `<@&${member._roles.join('> <@&')}>`)
    msg.lineReplyNoMention(userEmbed);
	},
};

