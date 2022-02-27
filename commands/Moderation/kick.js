const ee = require('../../botconfig/embed.json')
const {Message , MessageEmbed} = require('discord.js')
module.exports = {
    name: "kick",
    description: "Kick Member",
    usage: "kick <user> + <reason>",
    memberpermissions: ["KICK_MEMBERS"],
    category: "Moderation",
    /**
     * @param {Message} message
     */
    run: async(client , message , args) => {
        const Member = message.mentions.members.first()
        const reason = args[1]

        if (!Member) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                    .setDescription('Enter The User To Kick')
                ]
            })
        }

        if (Member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) {
            message.reply({embeds: [
                new MessageEmbed()
                    .setColor(ee.color)
                    .setDescription(`Your Role is Not High To Kick this User`)
                    .setFooter(ee.footertext)
            ]})
        }

        if (!reason) {
            return message.reply({
                embeds : [
                    new MessageEmbed()
                    .setDescription('Enter The Reason')
                ]
            })
        }

        if (Member) {
            await Member.kick()
            message.reply({
                embeds: [
                    new MessageEmbed()
                    .setDescription(`<@${Member.id}> Has Been Kicked \n Moderator : <@${message.author.id}> \n Reason : \`${reason}\``)
                ]
            })
        }
    }
}