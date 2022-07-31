const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.kiss())
        .setAuthor(`${message.author.username} kisses${message.mentions.users.first() ? " " + message.mentions.users.first().username : " him-/herself.."}`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-kiss";
module.exports.category = "anime";
module.exports.description = "Romantic stuff.";
module.exports.usage = "+a-kiss [optional: @user]";
module.exports.aliases = ["kiss"];