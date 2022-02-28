const Discord = require("discord.js")

module.exports = (client, message, queue) => {
  const embed = new Discord.MessageEmbed()
.setDescription(`${client.emotes.success} - Disconnected  `)  
.setColor('060000')
    message.channel.send(embed);
};