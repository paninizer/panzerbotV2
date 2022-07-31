const anime = require('anime-actions');
const {MessageEmbed} = require("discord.js");
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  await message.reply({embeds: [
        new MessageEmbed()
        .setColor(es.colours.anime)
        .setImage(await anime.happy())
        .setAuthor(`${message.author.username} is happy`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => null)
}

module.exports.name = "a-happy";
module.exports.category = "anime";
module.exports.description = "Happy isn't available on discord. Go get a life!";
module.exports.usage = "+a-happy";
module.exports.aliases = ["happy"];