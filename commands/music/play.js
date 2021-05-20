module.exports = {
    name: "play",
    aliases: ['p'],
    async execute(client, message, args) {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    
    const music = args.join(" ");

    client.distube.play(message, music)
    }
}