module.exports = {
	name: 'dadjoke',
	description: 'Get a very punny joke.',
	execute(message) {
		const Discord = require('discord.js');
		const curlcommand = 'curl -H "Accept: application/json" https://icanhazdadjoke.com/';
		const exec = require('child_process').exec;

		exec(curlcommand, function(error, stdout) {
			const dadjoke = JSON.parse(stdout);
			const jokeEmbed = new Discord.MessageEmbed()
				.setColor('#9a47ed')
				.setTitle('Dad Joke')
				.setURL(`https://icanhazdadjoke.com/j/${dadjoke.id}`)
				.addFields(
					{ name: `${dadjoke.joke}`, value: '\u200B' },
				)
				.setTimestamp()
				.setFooter('Joke sourced from https://icanhazdadjoke.com/');
			message.lineReplyNoMention(jokeEmbed);
		});
	} };