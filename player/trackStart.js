const Discord = require('discord.js')



module.exports = (client, message, track) => {
  const embed = new Discord.MessageEmbed()
.setDescription(`${client.emotes.music} - Now playing **${track.title}**  into <#${message.member.voice.channel.id}> `)  
.setColor('060000')

    message.channel.send(embed);
};