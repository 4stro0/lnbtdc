const { MessageEmbed } = require("discord.js");
module.exports = {
  name: 'stop',
  aliases: ["sp"],
  description: 'stop music',
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

        message.client.distube.stop(message);
         const embed = new MessageEmbed()
            .setColor(color)
            .setDescription(`**Stopped** the music.`)
            .setFooter(`Music | \©️${new Date().getFullYear()} ${client.config.foot}`);
        message.channel.send(embed);
    }
}