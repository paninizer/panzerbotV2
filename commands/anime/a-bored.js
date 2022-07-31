const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.bored())
        .setAuthor(`${message.author.username} is bored`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-bored";
module.exports.category = "anime";
module.exports.description = "Board eh?";
module.exports.usage = "+a-bored";
module.exports.aliases = ["bored", "a-boring", "boring"];
