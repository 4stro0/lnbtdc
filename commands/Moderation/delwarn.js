const { Client, Message, MessageEmbed } = require('discord.js');
var ee = require('../../botconfig/embed.json');
var config = require('../../botconfig/config.json');
const db = require('quick.db')

module.exports = {
    name: 'delwarn',
    category: 'Moderation',
    memberpermissions: ['MANAGE_GUILD'],
    description: 'Delete Warnings From a User',
    usage: 'delwarn [@user]',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, prefix) => {

        const warnmember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const bot = message.mentions.users.first().bot

        // if not member
        if (!warnmember) {
            message.reply({
                embeds: [
                    new MessageEmbed()
                    .setColor(ee.color)
                    .setDescription(`\`\` Please Mention a User to Delete warnings \`\``)
                    .setFooter(ee.footertext)
                ]
            })
        }

        // it user is bot
        if (bot) {
            message.reply({
                embeds: [
                    new MessageEmbed()
                    .setColor(ee.color)
                    .setDescription(`\`\`You Can't Delete warnings of a Bot \`\``)
                    .setFooter(ee.footertext)
                ]
            })
        }

        // if user is message author
        if (message.author.id === warnmember.id) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                    .setColor(ee.color)
                    .setDescription(`\`\`You can't Delete Your Own warnings\`\``)
                    .setFooter(ee.footertext)
                ]
            })
        }

        // if warn guild owner
        if (warnmember.id === message.guild.ownerId) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                    .setColor(ee.color)
                    .setDescription(`\`\`You can't Delete warnings Of Guild Owner\`\``)
                    .setFooter(ee.footertext)
                ]
            })
        }

        // database

        let warnings = db.get(`warnings_${message.guild.id}_${warnmember.id}`);

        if (!warnings) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                    .setDescription('He Dont Have Any Warn')
                ]
            })
        } if (warnings){
            db.delete(`warnings_${message.guild.id}_${warnmember.id}`);
        await message.reply({
            embeds: [
                new MessageEmbed()
                .setColor(ee.color)
                .setDescription(`<@${warnmember.id}> Warnings Deleted By  <@${message.author.id}> in  \`${message.guild.name}\` `)
                .setFooter(ee.footertext)
            ]
        })
        }


    }
}