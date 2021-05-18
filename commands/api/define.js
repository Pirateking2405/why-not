const { Client, MessageEmbed, MessageAttachment, ZlibSync, Collection } = require('discord.js');
const fetch = require('node-fetch');
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

module.exports = {
	name: 'define',
	description: 'define',
	async execute(msg, args) {
    const querystring = require('querystring');
    if (!args.length) {
			return msg.channel.send('You need to supply a search term!');
		}

		const query = querystring.stringify({ term: args.join(' ') });

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

		if (!list.length) {
			return msg.channel.send(`No results found for **${args.join(' ')}**.`);
		}

		const [answer] = list;

		const embed = new MessageEmbed()
			.setColor('#9a47ed')
			.setTitle(answer.word.replace(/^\w/, function (c) {
          return c.toUpperCase();
        }))
      .setThumbnail('https://cdn.discordapp.com/attachments/835571066280738866/837256920272076830/f2aa3712516cfd0cf6f215301d87a7c2.png')
			.setURL(answer.permalink)
			.addFields(
				{ name: 'Definition', value: trim(answer.definition, 1024) },
				{ name: 'Example', value: trim(answer.example, 1024) },
			);
		msg.lineReplyNoMention(embed);
	},
};
