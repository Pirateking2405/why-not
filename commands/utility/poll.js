const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "poll",
    description: "starts a poll",

    async execute(message, args) {
        let theDescription = args.slice(0).join(" ")
        if(!theDescription) return message.reply("Please specify a description/question for the poll!")
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
        const user = message.mentions.users.first() || message.member.user
        const embed = new MessageEmbed()
        .setColor(0x3d9af2)
        .setTitle("Poll")
        .setDescription(theDescription)
        .setFooter("Poll started by: "+ message.author.username +'#'+ message.author.discriminator, member.user.displayAvatarURL()) //optional

        let msgEmbed = await message.lineReplyNoMention(embed)
        await msgEmbed.react('✅') //👎👍
        await msgEmbed.react('❌')
    }
}