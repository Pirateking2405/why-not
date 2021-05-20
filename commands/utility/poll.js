const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "poll",
    description: "starts a poll",

    async execute(message, args) {
        let theDescription = args.slice(1).join(" ")
        if(!theDescription) return message.reply("Please specify a description/question for the poll!")

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("POLL TIME")
        .setDescription(theDescription)
        .setFooter("Poll started by: "+ message.author.username +'#'+ message.author.discriminator) //optional

        let msgEmbed = await message.lineReplyNoMention(embed)
        await msgEmbed.react('✅') //👎👍
        await msgEmbed.react('❌')
    }
}