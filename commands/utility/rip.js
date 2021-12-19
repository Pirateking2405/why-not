const { MessageAttachment } = require('discord.js');

module.exports = {
	name: 'rip',
	description: 'rip',
	execute(msg) {
		const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
		// Send the attachment in the message channel
		msg.lineReplyNoMention(attachment);
	},
};