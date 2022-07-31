const Discord = require("discord.js");
const es = require("./../../config/embed.json")
const uewcd = new Map();

module.exports.run = async (client, message, args) => {
  if (uewcd.has(message.member.id)) {
    const cd = mcd.get(message.member.id)-Date.now();
    if (cd > 0) {
      await message.reply(`Please wait ${prettyMS(cd, {verbose: true})}!`);
      return;
    }
  }
  await message.channel.send({embeds: [
    new Discord.MessageEmbed()
      .setColor(es.colours.fun)
      .setImage("https://i.kym-cdn.com/photos/images/newsfeed/001/015/390/0b0.jpg")
      .setTitle("UNLIMITED ESSAY WORKS!")
      .setThumbnail(message.guild.iconURL({dynamic: true}))
  ]});
  uewcd.set(message.member.id, Date.now()+3000);
}

module.exports.name = "unlimited-essay-works";
module.exports.description = "IS THIS ANOTHER FATE REFERENCE?!!!";
module.exports.category = "fun";
module.exports.usage = "+unlimited-essay-works";
module.exports.aliases = ["uew", "essay"];
