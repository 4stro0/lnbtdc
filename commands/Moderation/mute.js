const {Message , MessageEmbed}= require('discord.js')
const ms = require('ms')
const ee = require('../../botconfig/embed.json')
module.exports = {
    name : 'mute',
    category: "Moderation",
    description:'Muting Member',
    memberpermissions: ["MANAGE_ROLES"],
    usage: ' mute <member> + <how long> + <reason>',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
      message.reply('Use The `Timeout Feature` From Discord , We Still Making The Commands.')
    }
}
