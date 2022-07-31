const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.bully())
        .setAuthor(`${message.author.username} bullies${message.mentions.users.first() ? " " + message.mentions.users.first().username : " him-/herself.."}`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-bully";
module.exports.category = "anime";
module.exports.description = "Bullying? E";
module.exports.usage = "+a-bully [optional: @user]";
module.exports.aliases = ["bully"];
