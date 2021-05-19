const Discord = require('discord.js')

module.exports = {
    name: "howgae",
    description: "a howgae command",

    async execute(message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howgayembed = new Discord.MessageEmbed()
        .setTitle(`Gay Machine Calculator`)
        .setDescription(`${member.username} is ` + rng + "% Gae🌈")
        .setColor("GREEN")

        message.channel.send(howgayembed);
    }
}