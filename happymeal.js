const Discord = require("discord.js")
const es = require("./../../config/embed.json")

module.exports.run = async (client, message, args) => {
  const happymeal = new Discord.MessageEmbed()
  .setTitle("HappyMeal™")
  .setDescription(`Your HappyMeal™, ${message.author.username}`)
  .setImage("https://i.kym-cdn.com/photos/images/facebook/001/879/458/f53.png")
  .setColor(es.colours.fun)
  await message.reply({embeds: [happymeal]});
}

module.exports.name = "happymeal"
module.exports.description = "Gives you a happy meal!";
module.exports.category = "fun";
module.exports.usage = "+happymeal";
module.exports.aliases = ["hm", "mcdonalds", "meal"];