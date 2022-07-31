const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
    await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.highfive())
        .setAuthor(`${message.author.username} highfives${message.mentions.users.first() ? " " + message.mentions.users.first().username : " him-/herself."}`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-highfive";
module.exports.description = "Hooray!";
module.exports.category = "anime";
module.exports.usage = "+a-highfive [optional: @user]";
module.exports.aliases = ["a-hf", "hf", "highfive"];