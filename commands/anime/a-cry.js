const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.cry())
        .setAuthor(`${message.author.username} cries...`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-cry";
module.exports.category = "anime";
module.exports.description = "You cried. What a child (jk).";
module.exports.usage = "+a-cry";
module.exports.aliases = ["cry"];
