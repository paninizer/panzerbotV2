const Discord = require("discord.js");
const f = require("./../../config/fun.json");

module.exports.run = async (client, message, args) => {
  const roastTarget = message.mentions.users.first();

  if (!roastTarget) {
	  await message.reply("You need to tag a user in order to roast them!");
  }
  else if (roastTarget === client.user) {
    await message.reply("Why hatin' on the bot?");
  }
  else if (roastTarget === message.author) {
    await message.reply("You can't roast yourself, dumbo...");
  }
  else {
    let embed = new Discord.MessageEmbed()
    .setTitle("Your Roast, Sir")
    .setDescription(`${f.roasts[Math.floor(Math.random()*roast_list.length)]}\n ${client.users.cache.get(roastTarget.id)}`)
    .setFooter("Get Dunkt on, Nub")
  
    await message.channel.send({embeds: [embed]})
  }

}

module.exports.name = "roast";
module.exports.description = "Roasts a designated user! EMOTIONAL DAMAGE!!!";
module.exports.category = "fun";
module.exports.usage = "+roast [@user]";