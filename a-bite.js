const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.bite())
        .setAuthor(`${message.author.username} bites${message.mentions.users.first() ? " " + message.mentions.users.first().username : " him-/herself.."}`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-bite";
module.exports.category = "anime";
module.exports.description = "You bite someone. Such an underhanded way of fighting!";
module.exports.usage = "+a-bite [optional: @user]";
module.exports.aliases = ["a-chomp", "chomp", "bite"];