const Discord = require('discord.js')

module.exports = (client, message, queue, playlist) => {
  const embed = new Discord.MessageEmbed()
.setDescription(`${client.emotes.music} - ${playlist.title} has been added to the queue (**${playlist.tracks.length}** songs)`)  
.setColor('060000')
    message.channel.send(embed);
};