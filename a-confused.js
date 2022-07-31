const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.confused())
        .setAuthor(`${message.author.username} is confused`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-confused";
module.exports.category = "anime";
module.exports.description = "You wot mate?";
module.exports.usage = "+a-confused";
module.exports.aliases = ["what", "a-what"];