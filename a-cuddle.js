const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.cuddle())
        .setAuthor(`${message.author.username} cuddles${message.mentions.users.first() ? " " + message.mentions.users.first().username : " him-/herself.."}`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-cuddle";
module.exports.category = "anime";
module.exports.description = "Cuddling people sure feels good!";
module.exports.usage = "+a-cuddle [optional: @user]";
module.exports.aliases = ["cuddle"];