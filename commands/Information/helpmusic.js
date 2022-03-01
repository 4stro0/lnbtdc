const { Client,Message , MessageEmbed} = require('discord.js')
const ee = require('../../botconfig/embed.json')
module.exports = {
    name: "helpmusic",
    description: "Showing Music List Command",
    category: "Information",
    /**
     * @param {Message} message
     * @param {Client} client
     */
    run: async(client , message , args) => {
        if (args[0] === "cq") {
            message.reply({
                embeds: [
                    new MessageEmbed()
                    .addField('Name','`cq`')
                    .addField('Aliases','`clear-queue`')
                    .addField('Description', '`Clearing Queue`')
                    .addField('Usage','`-cq`')
                    .setFooter(ee.footertext , ee.footericon)
                    .setColor(ee.color)
                ]
             })
             
        
            } else if (args[0] === "filter") {
                message.reply({
                    embeds: [
                        new MessageEmbed()
                        .addField('Name','`filter`')
                        .addField('Aliases','`No Aliases`')
                        .addField('Description', '`Add Filter To The Music`')
                        .addField('Usage','`-filter <name filter>`')
                        .setFooter(ee.footertext , ee.footericon)
                        .setColor(ee.color)
                    ]
                 })
            } else if (args[0] === "loop") {
                message.reply({
                    embeds: [
                        new MessageEmbed()
                        .addField('Name','`loop`')
                        .addField('Aliases','`No Aliases`')
                        .addField('Description', '`Looping Music`')
                        .addField('Usage','`-loop [queue] \ -loop`')
                        .setFooter(ee.footertext , ee.footericon)
                        .setColor(ee.color)
                    ]
                 })
            } else if (args[0] === "nowplaying") {
                message.reply({
                    embeds: [
                        new MessageEmbed()
                        .addField('Name','`nowplaying`')
                        .addField('Aliases','`np`')
                        .addField('Description', '`Tell Now Play What`')
                        .addField('Usage','`-nowplaying`')
                        .setFooter(ee.footertext , ee.footericon)
                        .setColor(ee.color)
                    ]
                 })
                } else if (args[0] === "pause") {
                    message.reply({
                        embeds: [
                            new MessageEmbed()
                            .addField('Name','`pause`')
                            .addField('Aliases','`No Aliases`')
                            .addField('Description', '`Pause Music`')
                            .addField('Usage','`-pause`')
                            .setFooter(ee.footertext , ee.footericon)
                            .setColor(ee.color)
                        ]
                     })
                    } else if (args[0] === "play") {
                        message.reply({
                            embeds: [
                                new MessageEmbed()
                                .addField('Name','`play`')
                                .addField('Aliases','`p`')
                                .addField('Description', '`Playing Music`')
                                .addField('Usage','`-play <song title/youtube urls>`')
                                .setFooter(ee.footertext , ee.footericon)
                                .setColor(ee.color)
                            ]
                         })
                        } else if (args[0] === "queue") {
                            message.reply({
                                embeds: [
                                    new MessageEmbed()
                                    .addField('Name','`queue`')
                                    .addField('Aliases','`q`')
                                    .addField('Description', '`Showing Queue Music`')
                                    .addField('Usage','`-queue`')
                                    .setFooter(ee.footertext , ee.footericon)
                                    .setColor(ee.color)
                                ]
                             })
                            } else if (args[0] === "resume") {
                                message.reply({
                                    embeds: [
                                        new MessageEmbed()
                                        .addField('Name','`resume`')
                                        .addField('Aliases','`No Aliases`')
                                        .addField('Description', '`Resume Music`')
                                        .addField('Usage','`-resume`')
                                        .setFooter(ee.footertext , ee.footericon)
                                        .setColor(ee.color)
                                    ]
                                 })
                                }else if (args[0] === "search") {
                                    message.reply({
                                        embeds: [
                                            new MessageEmbed()
                                            .addField('Name','`search`')
                                            .addField('Aliases','`No Aliases`')
                                            .addField('Description', '`Search And Play Music`')
                                            .addField('Usage','`-nowplaying`')
                                            .setFooter(ee.footertext , ee.footericon)
                                            .setColor(ee.color)
                                        ]
                                     })
                                    } else if (args[0] === "shuffle") {
                                        message.reply({
                                            embeds: [
                                                new MessageEmbed()
                                                .addField('Name','`shuffle`')
                                                .addField('Aliases','`No Aliases`')
                                                .addField('Description', '`Shuffle The Queue`')
                                                .addField('Usage','`-shuffle`')
                                                .setFooter(ee.footertext , ee.footericon)
                                                .setColor(ee.color)
                                            ]
                                         })
                                        } else if (args[0] === "skip") {
                                            message.reply({
                                                embeds: [
                                                    new MessageEmbed()
                                                    .addField('Name','`skip`')
                                                    .addField('Aliases','`s`')
                                                    .addField('Description', '`Skip Music`')
                                                    .addField('Usage','`-skip`')
                                                    .setFooter(ee.footertext , ee.footericon)
                                                    .setColor(ee.color)
                                                ]
                                             })
                                            } else if (args[0] === "dc") {
                                                message.reply({
                                                    embeds: [
                                                        new MessageEmbed()
                                                        .addField('Name','`dc`')
                                                        .addField('Aliases','`No Aliases`')
                                                        .addField('Description', '`Disconnecting Bot`')
                                                        .addField('Usage','`-dc`')
                                                        .setFooter(ee.footertext , ee.footericon)
                                                        .setColor(ee.color)
                                                    ]
                                                 })
                                                } else if (args[0] === "volume") {
                                                    message.reply({
                                                        embeds: [
                                                            new MessageEmbed()
                                                            .addField('Name','`volume`')
                                                            .addField('Aliases','`No Aliases`')
                                                            .addField('Description', '`Set The Volume Music (Default : 75)`')
                                                            .addField('Usage','`-volume <1-100>`')
                                                            .setFooter(ee.footertext , ee.footericon)
                                                            .setColor(ee.color)
                                                        ]
                                                     })
                                                    }else if (args[0] === "w-filters") {
                                                        message.reply({
                                                            embeds: [
                                                                new MessageEmbed()
                                                                .addField('Name','`w-filters`')
                                                                .addField('Aliases','`filters`')
                                                                .addField('Description', '`Showing Enabled And Disabled Filter`')
                                                                .addField('Usage','`-w-filters`')
                                                                .setFooter(ee.footertext , ee.footericon)
                                                                .setColor(ee.color)
                                                            ]
                                                         })
                                                        } else {
                                                            message.reply({
                                                                embeds: [
                                                                    new MessageEmbed()
                                                                    .setTitle('List Music Command')
                                                                    .setDescription('`cq`,`filter`,`loop`,`nowplaying`,`pause`,`play`,`queue`,`resume`,`search`,`shuffle`,`skip`,`dc`,`volume`,`w-filters`\n\n**Type** `-helpmusic [music commands]` **to see information**')
                                                                    .setFooter(ee.footertext , ee.footericon)
                                                                    .setColor(ee.color)
                                                                    .setThumbnail(client.user.displayAvatarURL())
                                                                ]
                                                    
                                                                })
                                                        }
        }
    }