const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  let lockPermErr = new Discord.MessageEmbed()
    .setTitle("**User Permission Error!**")
    .setDescription("**Sorry, you don't have permissions to use this!**")

  let botPermErr = new Discord.MessageEmbed()
    .setTitle("**Bot Permission Error!**")
    .setDescription("**Please enable permission \"MANAGE_CHANNELS\" or \"ADMINISTRATOR\" for this to work!")

  if (!message.member.permissions.has("ADMINISTRATOR")||!message.member.permissions.has("MANAGE_SERVER")) {
    await message.channel.send({embeds: [lockPermErr]});
  }
  else if (!guild.me.permissions.has("MANAGE_CHANNELS")&&!guild.me.permissions.has("ADMINISTRATOR")) {
    await message.channel.send({embeds: [botPermErr]});  
  }
  else {
    let channel = message.channel;
    try {
      message.guild.roles.cache.forEach(async role => {
        await channel.createOverwrite(role, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      await message.channel.send(`Cannot override role for a role!`);
    }
    await message.channel.send(`Done | Channel Locked!`);
  }
}

module.exports.name = "lock";
module.exports.description = "Locks a channel to stop these pesky raiders!";
module.exports.category = "mod";
module.exports.usage = "+lock [optional: #channel]";
