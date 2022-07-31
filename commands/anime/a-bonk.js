const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.bonk())
        .setAuthor(`${message.author.username} bonks...`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-bonk";
module.exports.category = "anime";
module.exports.description = "You used bonk!";
module.exports.usage = "+a-bonk";
module.exports.aliases = ["bonk"];
