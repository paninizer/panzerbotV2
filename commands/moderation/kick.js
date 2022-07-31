module.exports.run = async (client, message, args) => {
  const tag = `<@${message.author.id}>`;
  let target = message.guild.members.cache.get(message.mentions.members.first().id) || message.guild.members.cache.get(args[0]);

  
  if (
    message.member.permissions.has('KICK_MEMBERS') ||
    message.member.permissions.has('ADMINISTRATOR')
  ) {
    if (!guild.me.permissions.has("ADMINISTRATOR")&&!guild.me.permissions.has("KICK_MEMBERS")){
      let botPermErr = new Discord.MessageEmbed()
        .setTitle("**Bot Permission Error!**")
        .setDescription("**Please enable permission \"KICK_MEMBERS\" or \"ADMINISTRATOR\" for this to work!")
      await message.channel.send({embeds: [botPermErr]});
    }
    else {
      if (!target) {
        await message.reply("There's no target to kick or your input is invalid...")
      }
      else if (target === message.member) {
        await message.reply(`${tag}, You can't kick yourself!!!`)
      }
      else if (target === guild.me){
        await message.reply(`${tag}, You can't kick the bot!!!`)
      }
      else if (target.roles.highest.comparePositionTo(member.roles.highest) >= 0) {
        await message.reply(`${tag}, cannot kick the user because they have a role equal to/higher than you!`)
      }
      else {
        let reason;
        if (args[1]) {
          if (args[0].toString().startsWith("<")) {
            reason = args.slice(22);
          } else {
            reason = args.slice(20);
          }
        } 
        else reason = "None";
        
        const kickEmbed = new Discord.MessageEmbed()
        .setTitle("Alpha Mike Foxtrot")
        .setDescription("You have been kicked in "+message.guild.name+" for "+reason+".")
        .setFooter("Goodbye for a long time.")
      
        try {
          target.createDM();
          target.send({embeds: [kickEmbed]});
          target.kick({reason: reason});
        } catch(err){
          console.log("An error has occured! "+err)
          message.channel.send(`${tag} Please Specify a valid user to kick!`)
        }
        message.channel.send(`${tag} <@${memberTarget.user.id}> has been kicked!`);
      }
    }
  }
}

module.exports.name = "kick";
module.exports.description = "Kicks someone from the server!";
module.exports.category = "mod";
module.exports.usage = "+kick [@user] [optional: reason]";
