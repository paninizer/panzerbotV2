const Discord = require("discord.js")
const zcd = new Map();

module.exports.run = async (client, message, args) => {
  if (zcd.has(message.member.id)) {
    const cd = mcd.get(message.member.id)-Date.now();
    if (cd > 0) {
      return message.reply(`Please wait ${prettyMS(cd, {verbose: true})}!`)
    }
  }
  const zuckEmbed = new Discord.MessageEmbed()
  .setTitle("Mark Zuckerburg")
  .setDescription("CEO of META or whatever...")
  .setImage("https://repl.it/public/images/blog/website_workshop/zucc.png")
  .addField("Fun Facts:", "META was once called Facebook, but they steal your data the same way; ruthlessly.")
  .setThumbnail(message.guild.iconURL({dynamic: true}))

  await message.channel.send({embeds: [zuckEmbed]});
  zcd.set(message.member.id, Date.now() + 3000);
}

module.exports.name = "zuck";
module.exports.description = "Fun facts of Zuck!";
module.exports.category = "fun";
module.exports.usage = "+zuck";