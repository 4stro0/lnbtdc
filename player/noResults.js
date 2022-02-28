const Discord = require('discord.js')

module.exports = (client, message, query) => {
  const embed = new Discord.MessageEmbed()
.setDescription(`${client.emotes.error} - No results found on YouTube for ${query} `)  
.setColor('060000')
    message.channel.send(embed);
};