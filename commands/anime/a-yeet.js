const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
    await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.yeet())
        .setAuthor(`${message.author.username} yeets${message.mentions.users.first() ? " " + message.mentions.users.first().username : " him-/herself."}`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-yeet";
module.exports.description = "YEET!!!";
module.exports.category = "anime";
module.exports.usage = "+a-yeet [optional: @user]";
module.exports.aliases = ["yeet", "a-throw", "throw"];
