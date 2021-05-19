module.exports = {
        name: 'ban',
        guildOnly: true, 
	description: 'ban',
        permissions: 'BAN_MEMBERS',
	async execute(message, args) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //.ban <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "No reason given";
        
        const embed = new Discord.MessageEmbed()
        .setTitle(`You were banned from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason}`)
        .setColor("RANDOM")
        .setTimestamp()
        //.setFooter(bot.user.tag, bot.user.displayAvatarURL())
        
        if (!args[0]) return message.lineReplyNoMention("You need to specify a user to ban");
        
        if(!mentionMember) return message.lineReplyNoMention("This user is not a valid user / is no-longer in the server!");
        
        if(!mentionMember.bannable) return message.lineReplyNoMention("I was unable to ban this user!");
        
        await mentionMember.send(embed);
        await mentionMember.ban({
        reason: reason
        }).then(() => message.lineReplyNoMention("Successfully banned: " + mentionMember.user.tag));
        }
};