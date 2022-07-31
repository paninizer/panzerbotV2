const prefix = require("discord-prefix");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) {
    await message.reply(`You don't have the correct permission \`ADMINISTRATOR\` to use this command!`);
    return;
  }
  else {
    if (!args[0]) {
      await message.reply(`Please provide a non-empty string!`);
      return;
    }
    await prefix.setPrefix(args[0], message.guild.id);
    await message.channel.send({embeds: [
      new Discord.MessageEmbed()
      .setTitle(`Prefix Settings`)
      .setDescription(`Prefix has been changed to ${prefix.getPrefix(message.guild.id)}`)
      .setThumbnail(message.guild.iconURL({dynamic: true}))
    ]});
  }
}

module.exports.name = "prefix";
module.exports.description = "Sets the prefix for this server.";
module.exports.category = "Moderation";
module.exports.aliases = ["p"];