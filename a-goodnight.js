const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.goodnight())
        .setAuthor(`${message.author.username} goes to sleep`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-goodnight";
module.exports.category = "anime";
module.exports.description = "Sleep is essential! I'm looking at you, no life discord fatty.";
module.exports.usage = "+a-goodnight";
module.exports.aliases = ["a-gn", "gn", "goodnight"];