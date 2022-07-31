const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.dance())
        .setAuthor(`${message.author.username} dances${message.mentions.users.first() ? " with" + message.mentions.users.first().username : " with him-/herself.."}`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-cuddle";
module.exports.category = "anime";
module.exports.description = "May I have this dance?";
module.exports.usage = "+a-dance [optional: @user]";
module.exports.aliases = ["dance"];