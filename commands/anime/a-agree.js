const anime = require('anime-actions');
const Discord = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new Discord.MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.yes())
        .setAuthor(`${message.author.username} agrees...`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-agree";
module.exports.category = "anime";
module.exports.description = "You agree to something.";
module.exports.usage = "+a-agree";
module.exports.aliases = ["a-yes", "yes", "agree"];
