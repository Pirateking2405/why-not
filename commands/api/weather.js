const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
	name: 'weather',
	description: 'shows the current weather in a specified location',
	guildOnly: false,

	async execute(message, args) {
		weather.find({ search: args.join(' '), degreeType: 'C' }, function(error, result) {
			if (error) return message.lineReplyNoMention(error);
			if (!args[0]) return message.lineReplyNoMention('Please specify a location!');

			if (result === undefined || result.length === 0) return message.lineReplyNoMention('**invlaid** location!!');

			const current = result[0].current;
			const location = result[0].location;

			const embed = new Discord.MessageEmbed()
				.setColor(0x111111)
				.setAuthor(`Weather forecast for ${current.observationpoint}`)
				.setThumbnail(current.imageUrl)
				.setDescription(`**${current.skytext}**`)
				.addField('TimeZone', `UTC ${location.timezone}`, true)
				.addField('Degree Type', 'Celcius', true)
				.addField('Temperature', `${current.temperature}°`, true)
				.addField('Wind', `${current.winddisplay}`, true)
				.addField('Feels Like', `${current.feelslike}°`, true)
				.addField('Humidity', `${current.humidity}%`, true);

			message.lineReplyNoMention(embed);
		});
	},
};