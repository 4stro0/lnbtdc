const {Message , MessageEmbed} = require('discord.js')
const ee = require('../../botconfig/embed.json')
module.exports = {
    name : "unban",
    aliases: ["uba"],
    description: "Unbanning Members",
    usage: "unban <memberid>",
    memberpermissions: ["BAN_MEMBERS"],
    /**
     * @param {Message} message
     * @param {String[]} args
     */
    run : async(client , message , args) => {
        if (!args[0]) return message.channel.send("Provide me a valid USER ID.");
        //This if() checks if we typed anything after "!unban"

        let bannedMember;
        //This try...catch solves the problem with the await
        try {
            bannedMember = await bot.users.cache.fetch(args[0])
        } catch (e) {
            if (!bannedMember) return message.channel.send("That's not a valid USER ID.")
        }

        //Check if the user is not banned
        try {
            await message.guild.fetchBan(args[0])
        } catch (e) {
            message.channel.send('This user is not banned.');
            return;
        }

        let reason = args.slice(1).join(" ")
        if (!reason) reason = "No reason provided."
        try {
            message.guild.members.unban(bannedMember, { reason: reason })
            message.reply({
                embeds: [
                    new MessageEmbed()
                    .setDescription(`${bannedMember.tag} has been unbanned.\n\nModerator: <@${message.author.id}>`)
                    .setFooter(ee.footertext , ee.footericon)
                ]
            })
        } catch (e) {
            console.log(e.message)
        }
    }
}