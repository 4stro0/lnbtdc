const {Client,Message , MessageEmbed} = require('discord.js')
const ee =  require('../../botconfig/embed.json')

module.exports = {
    name: "poll",
    category: "Administrator",
    description: "Send A Pool Embed",
    usage: "poll <channel> + <message>",
    memberpermissions: ["ADMINISTRATOR"],
    
    /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */

    run: async(client , message , args) => {
        const channel = message.mentions.channels.first()
        const poll = args[1]

        if (!channel) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                    .setDescription('Mention The Channel')
                ]
            })
            
        }
        if (!poll) {
            return message.reply(
                {
                    embeds: [
                        new MessageEmbed()
                        .setDescription('Enter The Message')
                    ]
                }
            )
            
        }
        
        if (channel) {
            const embed =  new MessageEmbed()
            .setTitle('HighQ Poll')
            .setDescription(poll)
            .setThumbnail(message.guild.iconURL())
            .setColor(ee.color)
            .setFooter(ee.footertext , ee.footericon)
            const pollsend = await channel.send({
                embeds: [embed]
            })
            pollsend.react('👍')
            pollsend.react('👎')
        }
    }
}