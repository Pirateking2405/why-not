//const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

 /* let afk  = new db.table("AFKs");
    authorStatus = await afk.fetch(msg.author.id),
    mentioned = msg.mentions.members.first();

	if (mentioned) {
    let status = await afk.fetch(mentioned.id);

    if (status) {
        const embed = new MessageEmbed()
        .setColor(0xffffff)
        .setDescription(`This user (${mentioned.user.tag}) is AFK: **${status}**`)
        msg.lineReplyNoMention(embed).then(i => i.delete({timeout: 5000}));
    }
}
	if (authorStatus) {
		const embed = new MessageEmbed()
		.setColor(0xffffff)
		.setDescription(`**${msg.author.tag}** is no longer AFK`)
		msg.lineReplyNoMention(embed).then(i => i.delete({timeout: 5000}));
		afk.delete(msg.author.id);
	} */

module.exports = {
    name: 'afk',
    async execute(message, args) { 
        const status = new db.table("AFKs");
        let afk = await status.fetch(message.author.id);
        const content = args.join(" ")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        
        const embed = new MessageEmbed().setColor(0xffffff)

        if(!afk) {
        embed.setDescription(`**${message.author.tag}** is now AFK`)
        embed.setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        embed.setFooter(`Reason: ${args.join(" ") ? args.join(" ") : AFK}`)
        status.set(message.author.id, args.join(" ") || `AFK`);  
        } 
        else {
            embed.setDescription("You are no longer AFK.");
            status.delete(message.author.id);
        }
        message.lineReplyNoMention(embed);   
    }
}