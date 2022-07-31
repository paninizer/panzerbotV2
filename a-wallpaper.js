const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.wallpaper())
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-wallpaper";
module.exports.category = "anime";
module.exports.description = "Generates an anime wallpaper!";
module.exports.usage = "+a-wallpaper";
module.exports.aliases = ["a-wp"];