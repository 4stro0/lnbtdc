const Discord = require('discord.js')

module.exports = (client, message, queue) => {
  const embed = new Discord.MessageEmbed()
.setDescription(`${client.emotes.error} - Music stopped as there is no more music in the queue`)  
.setColor('060000')
    message.channel.send(embed);
};