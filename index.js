const fs = require('fs');
const Discord = require('discord.js');
const keepAlive = require("./server")
require('discord-reply');
const { prefix } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
require('dotenv').config()
const token = process.env.DISCORD_BOT_SECRET;

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.on('ready', () => {
  console.log("I'm in");
  console.log(client.user.username);
  client.user.setActivity(`on ${client.guilds.cache.size} servers`);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
    if (!client.commands.has(commandName)) return;
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if(!command) return;

	try {
		client.commands.get(commandName).execute(message, args);
		console.log(`${message.author.username}#${message.author.discriminator} ran \'${commandName}\' command.`);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});
keepAlive()
client.login(token);
