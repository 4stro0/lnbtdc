const { Client, Message, MessageEmbed } = require('discord.js');
var ee = require('../../botconfig/embed.json');
var config = require('../../botconfig/config.json');

module.exports = {
    name: 'role',
    category: "Role Manager",
    memberpermissions: ['MANAGE_ROLES'],
    description: 'Add / Remove role a user',
    usage: 'role + <@user> + <@role>',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, prefix) => {

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

         
        // if not a member
        if (!member) {
            return message.reply({embeds: [new MessageEmbed()
                .setColor(ee.color)
                .setDescription(`> Usage =  ${prefix}role + <@user> + <@role>`)
                .setFooter(ee.footertext)]})
        }

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

        
        // if not a Role
        if (!role) {
            return message.reply({ embeds: [new MessageEmbed()
                .setColor(ee.colour)
                .setDescription(`**Please Mention a Role **`)
                .setFooter(ee.footertext)] })
        }

        
        // add role to user
        if (!member.roles.cache.has(role.id)) {
            await member.roles.add(role.id);
            message.reply({ embeds: [new MessageEmbed()
                .setColor(ee.colour)
                .setDescription(`${role} Role Has Been Added to <@${member.user.id}>`)
                .setFooter(`Role added by ${message.author.username}`)] })

                
            } else if  (member.roles.cache.has(role.id)) {
               await member.roles.remove(role.id)
               message.reply({embeds: [
                   new MessageEmbed()
                   .setDescription(`${role} Role Has Been Removed In <@${member.user.id}>`)
               ]})
            
        }
        
        
    }
}
