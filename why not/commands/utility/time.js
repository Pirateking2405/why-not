date = new Date();

module.exports = {
	name: 'time',
	description: 'time',
	execute(msg, args) {
		msg.lineReplyNoMention(`${date.toLocaleString('de-DE', { hour12: false, timeZone: 'Asia/Kolkata' })}`);
	},
};
