const {Message , MessageEmbed}= require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'mute',
    category: "Moderation",
    description:'Muting Member',
    memberpermissions: ["MANAGE_ROLES"],
    usage: ' mute <member> + <how long>',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!Member) return message.reply({
            embed: [
              new MessageEmbed()
              .setDescription('Member is not found.')
            ]
        })
        if(!time) return message.reply({
            embeds: [
              new MessageEmbed()
              .setDescription('Please specify a time.')
            ]
        })
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.reply({
                    embeds: [
                      new MessageEmbed()
                      .setDescription('Muted role is not found, attempting to create muted role.')
                    ]
                })

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.reply({
                    embeds: [
                      new MessageEmbed()
                      .setDescription('Muted role has sucessfully been created.')
                    ]
                })
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.reply({
            embeds:[
              new MessageEmbed()
              .setDescription(`<@${Member.id}> has already been muted.`)
            ]
        })
        await Member.roles.add(role2)
        message.reply({ 
            embeds:[
              new MessageEmbed()
              .setDescription(`<@${Member.id}> is now muted For **${time}**.`)
            ]
        })

        setTimeout(async () => {
            await Member.roles.remove(role2)
            Member.send({
              embeds: [
                new MessageEmbed()
                .setDescription(`Hey You Are Unmuted Now In \`${message.guild.name}\``)
              ]
            })
        }, ms(time))
    }
}
