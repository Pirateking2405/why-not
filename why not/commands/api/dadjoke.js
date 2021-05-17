module.exports = {
	name: 'dadjoke',
	description: 'Get a very punny joke.',
	execute(message, args) {
		const Discord = require('discord.js');
		var curlcommand = 'curl -H "Accept: application/json" https://icanhazdadjoke.com/';
		var exec = require('child_process').exec;

		child = exec(curlcommand, function (error, stdout, stderr) {
      var dadjoke = JSON.parse(stdout)
      const jokeEmbed = new Discord.MessageEmbed()
        .setColor('#9a47ed')
        .setTitle(`Dad Joke`)
        .setURL(`https://icanhazdadjoke.com/j/${dadjoke.id}`)
        .addFields(
          { name: `${dadjoke.joke}`, value: '\u200B' },
        )
        .setTimestamp()
        .setFooter('Joke sourced from https://icanhazdadjoke.com/');
      message.channel.send(jokeEmbed)
    });
}};
