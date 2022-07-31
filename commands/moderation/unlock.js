const Discord = require("discord.js");
const es = require("./../../config/embed.json");

module.exports.run = async (client, message, args) => {
  if (!message.member.permissions.has('MANAGE_SERVER')||!message.member.permissions.has('ADMINISTRATOR')) {
    await message.channel.send("You don't have enough Permissions to run this Command!");
  }
  else if (!guild.me.permissions.has("ADMINISTRATOR")&&!guild.me.permissions.has("MANAGE_CHANNELS")) {
    let botPermErr = new Discord.MessageEmbed()
      .setTitle("**Bot Permission Error!**")
      .setDescription("**Please enable permission \"BAN_MEMBERS\" or \"ADMINISTRATOR\" for this to work!")
    await message.channel.send({embeds: [botPermErr]}); 
  }
  else {
    message.channel.overwritePermissions(
      [
        {
          id: message.guild.id,
          null : ['SEND_MESSAGES'],
        },
      ],
    );
    const embed = new Discord.MessageEmbed()
      .setTitle("Channel Updates")
      .setDescription(`🔓 ${message.channel}  has been Unlocked`)
      .setColor("#53504e")
    const msg = message.channel.send({embeds: [embed]})
    setTimeout(msg.delete(), 3000);
  }
}

module.exports.name = "unlock";
module.exports.description = "Unlocks the channel when you have dealt with the raiders.";
module.exports.category = "mod";
module.exports.usage = "+unlock";
