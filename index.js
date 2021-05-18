const fs = require('fs');
const Discord = require('discord.js');
const keepAlive = require("./server")
require('discord-reply');
const db = require('quick.db')
const {
	prefix
} = require('./config.json');
const { Client, MessageEmbed, MessageAttachment, ZlibSync, Collection } = require('discord.js');
const axios = require('axios')
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Collection();
require('dotenv').config()
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}
const token = process.env.DISCORD_BOT_SECRET;

client.on('ready', () => {
  console.log("I'm in");
  console.log(client.user.username);
  client.user.setActivity(`on ${client.guilds.cache.size} servers`);
});

client.on("message", gotMessage);
async function gotMessage(msg) {
	let afk  = new db.table("AFKs");
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
	}

  if (msg.author.bot) return
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	const args = msg.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

		if (!client.commands.has(commandName)) return;

   const command = client.commands.get(commandName);
try {
	command.execute(msg, args);
} catch (error) {
	console.error(error);
	msg.reply('there was an error trying to execute that command!');
}
};
keepAlive()
client.login(token);
