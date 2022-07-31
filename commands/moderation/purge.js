module.exports.run = async (client, message, args) => {        
  if (!message.member.permissions.has("MANAGE_MESSAGES")&&!message.member.permissions.has("ADMINISTRATOR")) await message.channel.send("You Don't Have Sufficient Permissions!- [MANAGE_MESSAGES]");
  else if (!message.guild.me.permissions.has("MANAGE_MESSAGES")&&!message.guild.me.permissions.has("ADMINISTRATOR")) {
    let botPermErr = new Discord.MessageEmbed()
        .setTitle("**Bot Permission Error!**")
        .setDescription("**Please enable permission \"MANAGE_MESSAGES\" or \"ADMINISTRATOR\" for this to work!")
    await message.channel.send({embeds: [botPermErr]});
    return;
  }
  else if (isNaN(args[0])){
    await message.channel.send('**Please Supply A Valid Amount To Delete Messages!**');
    return;
  }
  else if (args[0] >= 100) {
    await message.channel.send("**Please Supply A Number Less Than 100!**");
    return;
  }
  else if (args[0] < 1) {
    await message.channel.send("**Please Supply A Number More Than 1!**");
    return;
  }
  else {
    try {
      message.channel.bulkDelete(parseInt(args[0])+1).then(messages => message.channel.send(`**Succesfully deleted \`${messages.size}\` messages**`).then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 3*1000);
      }
    ));
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports.name = "purge";
module.exports.description = "Purges spam!";
module.exports.category = "mod";
module.exports.usage = "+purge [amount]";
