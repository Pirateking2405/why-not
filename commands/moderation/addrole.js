module.exports = {
	name: 'addrole',
	guildOnly: true,
	async execute(message) {
		// lets use parameters (optional)
		/**
         * @param {Message} message
         */
		// so firstly we will check whether the author of the message has permissions
		// this line means if the author doesn't have manage roles permission it will stop the process and send the following text
		if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have permission.');
		// next we define some variables
		const target = message.mentions.members.first();
		if (!target) return message.channel.send('No member specified');
		const role = message.mentions.roles.first();
		if (!role) return message.channel.send('No role specified');
		await target.roles.add(role);
		message.channel.send(`${target.user.username} has obtained a role`);
	},
};