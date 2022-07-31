module.exports.run = async (client, message, args) => {
  if (message.author.permissions.has("MANAGE_SERVER")||
     message.author.permissions.has('ADMINISTRATOR')) {
    bot = guild.me;
    if (!bot.permissions.has('MANAGE_SERVER')||
      !bot.permissions.has('ADMINISTRATOR')){
      let botPermErr = new Discord.MessageEmbed()
        .setTitle("**Bot Permission Error!**")
        .setDescription("**Please enable permission \"MANAGE_SERVER\" or \"ADMINISTRATOR\" for this to work!")
      await message.channel.send({embeds: [botPermErr]});
    }
    var role1 = message.mentions.roles.first().id;
    if(!role1)
    {
      await message.reply("I need a role to roleall!");
    }
    else {
      let roleAll = await message.guild.roles.cache.get(`${role1}`);
      try {
      message.guild.members.cache.forEach(member => member.roles.add(roleAll))
      message.reply("Process running. \nIt will be running in background until finished.")
      }
      catch(err) {
        console.log("An error has occured: "+err)
        message.reply("An error has occured and interrupted the operation. Please try again later!")
      }
    }
  }
}

module.exports.name = "roleall";
module.exports.description = "Automatically assigns roles to save you work!";
module.exports.category = "mod";
module.exports.usage = "+roleall [@role]"
module.exports.aliases = ["ra"];
