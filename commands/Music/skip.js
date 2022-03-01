const { MessageEmbed } = require("discord.js");
module.exports = {
  name: 'skip',
  aliases: ["s"],
  description: 'skip music',
 category: 'Music',
  run: async (client, message, args) => {
    const { color } = client.config;
      const queue = message.client.distube.getQueue(message);

        if(!queue) {
            const embed = new MessageEmbed()
             .setColor(color)
             .setDescription(`There is no music playing.`);
            return message.channel.send(embed);
        }

        message.client.distube.skip(message);
    }
}