const { Client,Message , MessageEmbed} = require('discord.js')
const ee = require('../../botconfig/embed.json')
module.exports = {
    name: "update",
    description: "Shpw The Updates Bots",
    category: "Information",
    /**
     * @param {Message} message
     * @param {Client} client
     */
    run: async(client , message , args) => {
        message.reply({embeds : [new MessageEmbed()
        .setDescription('New Command `-helpmusic` , And Added The Music Command Check It Now! ')
        .setColor(ee.color)
    ]})
    }
}