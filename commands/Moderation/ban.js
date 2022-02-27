const { Client, Message, MessageEmbed } = require('discord.js');
var ee = require('../../botconfig/embed.json');
var config = require('../../botconfig/config.json');
const ms = require('ms')
module.exports = {
    name: 'ban',
    memberpermissions: ['BAN_MEMBERS'],
    category: "Moderation",
    description: 'Ban a User From Guild',
    usage: 'ban + <@user> + <how long> + <reason>',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, prefix) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const time = args[1]

        
        // if not a member
        if (!member) {
            return message.reply({embeds: [
                new MessageEmbed()
                    .setColor(ee.color)
                    .setTitle(`**Please Mention a User to Ban**`)
                    .setDescription(`> Usage =  ${prefix}ban + <@user> + <reason>`)
                    .setFooter(ee.footertext)
            ]})
        }
        if (!time) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                    .setDescription('Enter A Specify Time')
                ]
            })
        }

        const reason = args[2]

        if (!reason) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                    .setDescription(`Enter The Reason`)
                ]
            })
        }

        // if member role not high
        if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) {
            message.reply({embeds: [
                new MessageEmbed()
                    .setColor(ee.color)
                    .setDescription(` Your Role is Not High To Ban this User`)
                    .setFooter(ee.footertext)
            ]})
        }
        // add role to user
        if (member) {
            await member.ban()
            message.reply({embeds: [
                new MessageEmbed()
                    .setColor(ee.colour)
                    .setDescription(`<@${member.user.id}> Banned From Guild For **${time}** \n Moderator : <@${message.author.id}>\n Reason : \`${reason}\``)
            ]})
        } setTimeout(async () => {
            await message.guild.members.unban(member)
            },ms(time))
        }


    }