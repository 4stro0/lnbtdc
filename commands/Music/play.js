const { MessageEmbed } = require("discord.js");
module.exports = {
  name: 'play',
  aliases: ["p"],
  description: 'play music',
 category: 'Music',
  run: async (client, message, args) => {
        
       const { color } = client.config;
   
        if (!message.guild.me.voice.channel) {
            message.member.voice.channel.join();
        } else {
            if (message.guild.me.voice.channel !== message.member.voice.channel) {
         const embed = new MessageEmbed()
             .setColor(color)
             .setDescription(`You must be in the same channel as ${message.client.user}`);
                return message.channel.send(embed)
            }
        }
        
        try {
            message.client.distube.play(message, args.join(' '))
        } catch (e) {
           const embed = new MessageEmbed()
              .setColor(color)
              .setDescription(`Error: \`${e}\``);
            return message.channel.send(embed);
        }
    }
}