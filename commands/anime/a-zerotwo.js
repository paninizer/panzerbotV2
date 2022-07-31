const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js")
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.zerotwo())
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-zerotwo";
module.exports.description = "Gets you an image.";
module.exports.category = "anime";
module.exports.usage = "+a-zerotwo";
module.exports.aliases = ["zt", "a-zt", "zerotwo", "a-02", "02"];
