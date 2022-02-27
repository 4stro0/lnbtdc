const { Client, Message, MessageEmbed } = require('discord.js');
var ee = require('../../botconfig/embed.json');
var config = require('../../botconfig/config.json');
const db = require('quick.db')

module.exports = {
    name: 'warn',
    category: 'Moderation',
    memberpermissions: ['MANAGE_GUILD'],
    description: 'Warn a User as a Punishment',
    usage: 'warn [@user] + [reason]',
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
                    .setDescription(`\`\` Please Mention a User to Warn \`\``)
                    .setFooter(ee.footertext)
                ]
            })
        }

        // it user is bot
        if (bot) {
            message.reply({
                embeds : [
                    new MessageEmbed()
                    .setColor(ee.color)
                    .setDescription(`\`\`You Can't Warn A Bot \`\``)
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
                    .setDescription(`\`\`You can't Warn YourSelf\`\``)
                    .setFooter(ee.footertext)
                ]
            })
        }

        // if warn guild owner
        if (warnmember.id === message.guild.ownerId) {
            return message.reply({
                embeds : [
                    new MessageEmbed()
                    .setColor(ee.color)
                    .setDescription(`\`\`You can't Warn Guild Owner\`\``)
                    .setFooter(ee.footertext)
                ]
            })
        }

        // define reason
        let reason = args.slice(1).join(" ");

        if (!reason) {
            return message.reply({
                embeds : [
                    new MessageEmbed()
                    .setColor(ee.color)
                    .setDescription(`\`\`You Must Provide Reason for Warn a User\`\``)
                    .setFooter(ee.footertext)
                ]
            })
        }

        // database

        let warnings = db.get(`warnings_${message.guild.id}_${warnmember.id}`);

        if (warnings === null) {
            db.set(`warnings_${message.guild.id}_${warnmember.id}`, 1);
            try {
             warnmember.send({
                 embeds: [
                    new MessageEmbed()
                    .setColor(ee.color)
                    .setDescription(`\`\` You Have Been Warned in **${message.guild.name}** For **${reason}** \`\``)
                    .setFooter(ee.footertext)
                 ]
             })
        } catch (e) {
               console.log(`DM OFF ${warnmember.user.username}`);
            }
            await message.channel.send({
                embeds : [
                    new MessageEmbed()
                    .setColor(ee.color)
                    .setDescription(`<@${warnmember.id}>  Has Been ✅ Warned For ${reason}`)
                    .setFooter(ee.footertext)
                ]
            })
        } else if (warnings !== null) {
            db.add(`warnings_${message.guild.id}_${warnmember.id}`, 1);

            warnmember.send({
                embeds : [
                    new MessageEmbed()
                    .setColor(ee.color)
                    .setThumbnail(warnmember.user.displayAvatarURL({ dynamic: true }))
                    .setDescription(`\`\` You Have Been Warned in **${message.guild.name}** For **${reason}** \`\``)
                    .setFooter(ee.footertext)
                ]
            })
            await message.reply({
                embeds : [
                    new MessageEmbed()
                    .setColor(ee.color)
                    .setDescription(`** <@${warnmember.id}>  Has Been ✅ Warned For ${reason}`)
                    .setFooter(ee.footertext)
                ]
            })
        }

    }
}