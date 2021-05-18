const db = require('quick.db')
const { MessageEmbed } = require('discord.js')



module.exports = {
    name : 'afk',
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