const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.sad())
        .setAuthor(`${message.author.username} is sad`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-sad";
module.exports.category = "anime";
module.exports.description = "You cried. What a child (jk).";
module.exports.usage = "+a-sad";
module.exports.aliases = ["sad"];
