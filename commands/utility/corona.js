const Discord = require('discord.js');
const { NovelCovid } = require('novelcovid');
const track = new NovelCovid();

module.exports = {
	name: 'corona',
	description: 'Get the stats of corona',
	args: true,
	usage: 'all or ,corona <country>',
	aliases: ['covid', 'covid19'],
	async execute(message, args) {
		if (args.join(' ') === 'all') {
			const corona = await track.all();

			const embed = new Discord.MessageEmbed()
				.setTitle('Global Cases')
				.setColor('#ff2050')
				.setDescription('Sometimes cases number may differ from a small amount.')
				.addField('Total Cases', corona.cases, true)
				.addField('Total Deaths', corona.deaths, true)
				.addField('Total Recovered', corona.recovered, true)
				.addField('Today\'s Cases', corona.todayCases, true)
				.addField('Today\'s Deaths', corona.todayDeaths, true)
				.addField('Active Cases', corona.active, true);

			return message.lineReplyNoMention(embed);
		}
		else {
			const corona = await track.countries(args.join(' '));

			const embed = new Discord.MessageEmbed()
				.setTitle(`${corona.country}`)
				.setColor('#ff2050')
				.setDescription('Sometimes cases number may differ from small amount.')
				.addField('Total Cases', corona.cases, true)
				.addField('Total Deaths', corona.deaths, true)
				.addField('Total Recovered', corona.recovered, true)
				.addField('Today\'s Cases', corona.todayCases, true)
				.addField('Today\'s Deaths', corona.todayDeaths, true)
				.addField('Active Cases', corona.active, true);

			return message.lineReplyNoMention(embed);
		}
	},
};
