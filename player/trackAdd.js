const Discord = require('discord.js')

module.exports = (client, message, queue, track) => {
  const embed = new Discord.MessageEmbed()
.setDescription(`${client.emotes.music} - ${track.title} has been added to the queue `)  
.setColor('060000')
    message.channel.send(embed);
};