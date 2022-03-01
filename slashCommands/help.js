const { SlashCommandStringOption } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const config = require("../botconfig/config.json");
const ee = require("../botconfig/embed.json");
const settings = require('../botconfig/settings.json')

module.exports = {
  name: "help",
  description: "Get Started",
 
    run: async (client, interaction, prefix) => {
      try{
        if (String === "") {
          const embed = new MessageEmbed();
          const cmd = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));
          if (!cmd) {
              return message.reply({embeds: [embed.setColor(ee.wrongcolor).setDescription(`No Information found for command **${args[0].toLowerCase()}**`)]});
          }
          if (cmd.name) embed.addField("**Command name**", `\`${cmd.name}\``);
          if (cmd.name) embed.setTitle(`Detailed Information about:\`${cmd.name}\``);
          if (cmd.description) embed.addField("**Description**", `\`${cmd.description}\``);
          if (cmd.aliases) embed.addField("**Aliases**", `\`${cmd.aliases.map((a) => `${a}`).join("`, `")}\``);
          if (cmd.cooldown) embed.addField("**Cooldown**", `\`${cmd.cooldown} Seconds\``);
          else embed.addField("**Cooldown**", `\`${settings.default_cooldown_in_sec} Second\``);
          if (cmd.usage) {
              embed.addField("**Usage**", `\`${prefix}${cmd.usage}\``);
              embed.setFooter("Syntax: <> = required, [] = optional");
          }
          return interaction.reply({embeds: [embed.setColor(ee.color)]});
        } else {
          const embed = new MessageEmbed()
              .setColor(ee.color)
              .setThumbnail(client.user.displayAvatarURL())
              .setTitle("LN List Command")
              .setFooter(`To see command Descriptions and Information, type: -help [CMD NAME] , To See Music Command Type -helpmusic`, client.user.displayAvatarURL());
          const commands = (category) => {
              return client.commands.filter((cmd) => cmd.category === category).map((cmd) => `\`${cmd.name}\``);
          };
          try {
            for (let i = 0; i < client.categories.length; i += 1) {
              const current = client.categories[i];
              const items = commands(current);
              embed.addField(`**${current.toUpperCase()} [${items.length}]**`, `> ${items.join(", ")}`);
            }
          } catch (e) {
              console.log(String(e.stack).red);
          }
          interaction.reply({embeds: [embed]});
      }
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return interaction.reply({embeds: [new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.message ? String(e.message).substr(0, 2000) : String(e).substr(0, 2000)}\`\`\``)
        ]});
    }
  }
}
    