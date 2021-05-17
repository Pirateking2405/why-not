const fs = require('fs');
const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')

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


 if (command === 'holy watah') {
    msg.channel.send('*launching holy water canons in 3... 2... 1... **LAUNCH***');
  }



  else if (command === 'revive chat') {
    msg.channel.send('Dead chat reported... 1...2...3... cleared! shit its still ded');
  }


  else if (command === 'kill chat') {
    msg.channel.send('shut up and die');
  }

};
client.login(process.env.DISCORD_BOT_SECRET);
