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
        .setDescription('**Patch Note 1.0**\n-Added Command Music\n-Added Slash Command\n-Added Argument In Help Command `-help ban`\n\n**Patch Note 2.0**(In Procces)\n-Redesigned Help Command\n-Lyrics Command\n-Added Button In some commands\n-Captcha System\n-Timeout Member\n**will be finished in 2 days**\nContributor: `naughtysd#4680`,`Yudd#5830`')
        .setColor(ee.color)
    ]})
    }
}