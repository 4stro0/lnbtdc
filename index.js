const Discord = require("discord.js");
const DisTube = require('distube')
const config = require(`./botconfig/config.json`);
const settings = require(`./botconfig/settings.json`);
const colors = require("colors");
const db = require("quick.db")
const client = new Discord.Client({
    //fetchAllMembers: false,
    //restTimeOffset: 0,
    //restWsBridgetimeout: 100,
    
    allowedMentions: {
      parse: [ ],
      repliedUser: false,
    },
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [ 
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_BANS,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
        Discord.Intents.FLAGS.GUILD_WEBHOOKS,
        Discord.Intents.FLAGS.GUILD_INVITES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ],
    presence: {
      activity: {
        name: `Music`, 
        type: "LISTENING", 
      },
      status: "online"
    }
});
client.distube = new DisTube(client, {
  youtubeCookie: process.env.COOKIE,
  searchSongs: true,
  emitNewSongOnly: true,
  highWaterMark: 1024 * 1024 * 64,
  leaveOnEmpty: false,
  leaveOnFinish: false,
  leaveOnStop: false,
  searchSongs: false,
  youtubeDL: true,
  updateYouTubeDL: false,
})

client.distube
    .on("addList", (message, queue, playlist) => {
        const embed = new MessageEmbed()
            
            .setDescription(`Added **${playlist.title}** playlist (${playlist.total_items} songs) to the queue - [${song.user}]`)
            .setThumbnail(playlist.thumbnail)
            .setFooter(`Request by: ${message.author.tag}`, message.client.user.displayAvatarURL());
        message.channel.send({embeds : [embed]});
    })
    .on("addSong", (message, queue, song) => {
        const embed = new MessageEmbed()
            
            .setDescription(`Added **[${song.name}](${song.url})** - [${song.user}] \`[${song.formattedDuration}]\` to the queue`)
            .setThumbnail(song.thumbnail)
            .setFooter(`Music | \©️${new Date().getFullYear()} ${client.config.foot}`);
            message.channel.send({embeds : [embed]});
    })
    .on("empty", message => {
        let thing = new MessageEmbed()
             
             .setDescription(`Channel is empty. Leaving the channel`)
             message.channel.send({embeds : [thing]});
    })
    .on("error", (message, err) => {
        const embed = new MessageEmbed()
           
           .setDescription(`An error encountered: ${err}`)
           message.channel.send({embeds : [embed]});
    })
    .on("finish", message => {
        const embed = new MessageEmbed()
            
            .setDescription(`No more song in queue`)
            message.channel.send({embeds : [embed]});
    })
    .on("initQueue", queue => {
        queue.autoplay = false;
    })
    .on("noRelated", message => {
        const embed = new MessageEmbed()
            
            .setDescription(`Can't find related video to play. Stop playing music.`)
            message.channel.send({embeds : [embed]});
    })
    .on("playList", (message, queue, playlist, song) => {
        const embed = new MessageEmbed()
            
            .setDescription(`Play **${playlist.name}** playlist (${playlist.songs.length} songs)\nNow playing **[${song.name}](${song.url})** [${song.user}] - \`[${song.formattedDuration}]\``)
            .setThumbnail(playlist.thumbnail)
            .setFooter(`Music | \©️${new Date().getFullYear()} ${client.config.foot}`);
            message.channel.send({embeds : [embed]});
    })
    .on("playSong", (message, queue, song) => {
        const embed = new MessageEmbed()
            
            .setDescription(`Started Playing **[${song.name}](${song.url})** - [${song.user}] \`[${song.formattedDuration}]\``)
            .setThumbnail(song.thumbnail)
            .setFooter(`Music | \©️${new Date().getFullYear()} ${client.config.foot}`);
            message.channel.send({embeds : [embed]});
    })
    // DisTubeOptions.searchSongs = true
    .on("searchCancel", message => {
        const embed = new MessageEmbed()
            
            .setDescription(`Searching canceled!`)
            message.channel.send({embeds : [embed]});
    })
    // DisTubeOptions.searchSongs = true
    .on("searchResult", (message, result) => {
        let i = 0
        const embed = new MessageEmbed()
            
            .setAuthor(message.client.user.username, message.client.user.displayAvatarURL())
            .setDescription(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}`)
            .setFooter(`Enter anything else or wait 60 seconds to cancel`);
            message.channel.send({embeds : [embed]});
    });
//Define some Global Collections
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = require("fs").readdirSync(`./commands`);
//Require the Handlers                  Add the antiCrash file too, if its enabled
["events", "commands", "slashCommands", settings.antiCrash ? "antiCrash" : null]
    .filter(Boolean)
    .forEach(h => {
        require(`./handlers/${h}`)(client);
    })
    
//Start the Bot
client.login(config.token)

/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://discord.gg/milrato
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
