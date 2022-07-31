const anime = require('anime-actions');
const Discord = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new Discord.MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.baka())
        .setAuthor(`${message.author.username} bakas...`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-baka";
module.exports.category = "anime";
module.exports.description = "Baka!";
module.exports.usage = "+a-baka";
module.exports.aliases = ["dumb", "baka"];
