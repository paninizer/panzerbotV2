const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.blush())
        .setAuthor(`${message.author.username} blushes...`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-blush";
module.exports.category = "anime";
module.exports.description = "You blushed.";
module.exports.usage = "+a-blush";
module.exports.aliases = ["blush"];