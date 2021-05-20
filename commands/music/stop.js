const { execute } = require("../../events/ready")

module.exports = {
async execute(client, message, args) {
if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

    let queue = await client.distube.getQueue(message);

    if(queue) {
        client.distube.skip(message)

        message.channel.send('DONE!')
    } else if (!queue) {
        return
    };
    }
}