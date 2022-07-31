const es = require("./../../config/embed.json");

module.exports.run = async (client, message, args) => {
  const damageEmbed = {
    title: "EMOTIONAL DAMAGE",
    description: "Damaged Irrepairably",
    color: es.colours.fun,
    image: {
      url: "https://c.tenor.com/kM9DjEDqafsAAAAC/emotional-damage.gif",
    },
    thumbnail: {
      url: message.guild.iconURL({dynamic: true}),
    },
  }

  await message.channel.send({embeds: [damageEmbed]});
}

module.exports.name = "emotionaldamage";
module.exports.description = "Emotional Damage";
module.exports.category = "fun";
module.exports.usage = "+emotionaldamage";
module.exports.aliases = ["ed", "edmg"];
