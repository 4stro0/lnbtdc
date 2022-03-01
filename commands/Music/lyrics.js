const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'lyrics',
    aliases: ["ly"],
    description: 'Show The Lyrics Music',
   category: 'Music',
  run: async (client, message, args) => {
    
    const { color } = client.config;
    const queue = message.client.distube.getQueue(message);

        if(!queue) {
            let thing = new MessageEmbed()
                .setColor(color)
                .setDescription(`There is no music playing.`);
            return message.channel.send(thing);
        }

        let song = args.join(" ");
        if (!song && queue.song[0]) song = queue.song[0].name;

        let lyrics = null;

        try {
            lyrics = await lyricsFinder(song, "");
            if (!lyrics) lyrics = `No lyrics found.`;
        } catch (error) {
            console.error(error)
            lyrics = `Usage: ${message.client.prefix}ly <Song Name>`;
        }

        let lyricsEmbed = new MessageEmbed()
            .setColor(color)
            .setDescription(`**Lyrics** of **${song}**\n${lyrics}`)
            .setFooter(`Music | \©️${new Date().getFullYear()} ${client.config.foot}`);

        if (lyricsEmbed.description.length >= 2048)
        lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
        return message.channel.send(lyricsEmbed);
    }
}