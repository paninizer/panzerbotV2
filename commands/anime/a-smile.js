const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.smile())
        .setAuthor(`${message.author.username} smiles`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-smile";
module.exports.category = "anime";
module.exports.description = "Smiling. Been a long time since I've done that.";
module.exports.usage = "+a-smile";
module.exports.aliases = ["smile", "a-smil", "smil"];
