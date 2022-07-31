const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.hug())
        .setAuthor(`${message.author.username} hugs${message.mentions.users.first() ? " " + message.mentions.users.first().username : " him-/herself.."}`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-hug";
module.exports.category = "anime";
module.exports.description = "Hugging";
module.exports.usage = "+a-hug [optional: @user]";
module.exports.aliases = ["hug"];