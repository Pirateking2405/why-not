const date = new Date();

module.exports = {
	name: 'time',
	description: 'time',
	execute(msg) {
		msg.lineReplyNoMention(`${date.toLocaleString('de-DE', { hour12: false, timeZone: 'Asia/Kolkata' })}`);
	},
};