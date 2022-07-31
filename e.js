const Discord = require('discord.js')
const es = require("./../../config/embed.json");

module.exports.run = async (client, message, args) => {

  const eEmbed = {
    title: "E",
    image: {
      url: "https://i.kym-cdn.com/entries/icons/original/000/026/008/Screen_Shot_2018-04-25_at_12.24.22_PM.png",
    },
    footer: {
      text: "E",
    },
    color: es.colours.fun
  }

  await message.channel.send({embeds: [eEmbed]});
}

module.exports.name = "e";
module.exports.description = "Markiplier E...";
module.exports.category = "fun";
module.exports.usage = "+e";