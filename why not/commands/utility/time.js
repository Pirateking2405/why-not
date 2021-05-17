date = new Date();

module.exports = {
	name: 'time',
	description: 'time',
	execute(msg, args) {
		msg.channel.send(`${date.toLocaleString('de-DE', { hour12: false, timeZone: 'Asia/Kolkata' })}`);
	},
};
