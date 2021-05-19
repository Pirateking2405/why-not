module.exports = {
	name: 'kick',
        guildOnly: true,
	description: 'kick',
        permissions: 'KICK_MEMBERS',
	async execute(message, args) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //.kick <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "No reason given";

        const kickembed = new Discord.MessageEmbed()
        .setTitle(`You were kicked from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason}`)
        .setColor("RANDOM")
        .setTimestamp()
        //.setFooter(client.user.tag, client.user.displayAvatarURL())

        if (!args[0]) return message.lineReplyNoMention("You need to specify a user to kick");

        if(!mentionMember) return message.lineReplyNoMention("This user is not a valid user / is no longer in the server!");

        if(!mentionMember.kickable) return message.lineReplyNoMention("I was unable to kick this user!");


        try {
            await mentionMember.send(kickembed);
        } catch (err) {

        }

        try {
            await mentionMember.kick(reason);
            console.log(mentionMember)
            //message.lineReplyNoMention(`Kicked ${mentionMember}`)
        } catch (err) {
            return message.lineReplyNoMention("I was unabe to kick this user! Sorry...")
        }
	},
};