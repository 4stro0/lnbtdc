const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: 'join',
  category: 'music',
  description: 'join a vc',
  run: async (client, message, args) => {
        
      const { color } = client.config;
      if (!message.guild.me.voice.channel) {
         message.member.voice.channel.join();
         
          const guildid = message.guild.id
            db.set(`vc_${guildid}`, message.member.voice.channel.id)
            
           const embed = new MessageEmbed()
                .setColor(color)
                .setDescription("**Join** the voice channel.")
                .setFooter(`Music | \©️${new Date().getFullYear()} ${client.config.foot}`);
            return message.channel.send(embed);
        } else {
            if (message.guild.me.voice.channel !== message.member.voice.channel) {
              const embed = new MessageEmbed()
                    .setColor(color)
                    .setDescription(`You must be in the same channel as ${message.client.user}`);
                return message.channel.send(embed)
            }
        }
    }
}