const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.wink())
        .setAuthor(`${message.author.username} winks`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-wink";
module.exports.description = "Winking";
module.exports.category = "anime";
module.exports.usage = "+a-wink";
module.exports.aliases = ["wink"];
