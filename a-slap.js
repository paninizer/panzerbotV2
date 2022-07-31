const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
    await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.slap())
        .setAuthor(`${message.author.username} slaps${message.mentions.users.first() ? " " + message.mentions.users.first().username : " him-/herself."}`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-slap";
module.exports.description = "Ouch!!!";
module.exports.category = "anime";
module.exports.usage = "+a-slap [optional: @user]";
module.exports.aliases = ["slap"];