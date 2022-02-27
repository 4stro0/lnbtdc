const {Message , MessageEmbed} = require('discord.js')
module.exports = {
    name : 'purge',
    aliases : ['clear'],
    description: 'Clear Message',
    usage: 'purge <amount>',
    memberpermissions: ["MANAGE_MESSAGE"],
    category: "Moderation",
    /**
     * @param {Message} message 
     */
    run : async(client, message, args) => {

        if(!args[0]) return message.reply({
            embeds: [
                new MessageEmbed()
                .setDescription('Enter The Amount 0 > 99')
            ]
        })
        if(isNaN(args[0])) return message.reply({
            embeds: [
                new MessageEmbed()
                .setDescription('Enter The Number')
            ]
        })
        if(parseInt(args[0]) > 99) return message.reply({
            embeds: [
                new MessageEmbed()
                .setDescription('The max amount of messages that I can delete is 99')
            ]
        })
        await message.channel.bulkDelete(parseInt(args[0]) + 1)
            .catch(err => console.log(err))
        message.channel.send({
            embeds: [
                new MessageEmbed()
                .setDescription('Deleted ' + args[0]  + " messages.")
            ]
        })
    }
}
    