const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const tag = `<@${message.author.id}>`;
  
  let target = message.guild.members.cache.get(message.mentions.members.first().id) || message.guild.members.cache.get(args[0]);

  if (
    message.member.permissions.has('BAN_MEMBERS') ||
    message.member.permissions.has('ADMINISTRATOR')
  ) {
    if (!guild.me.permissions.has("ADMINISTRATOR")&&!guild.me.permissions.has("BAN_MEMBERS")) {
      let botPermErr = new Discord.MessageEmbed()
        .setTitle("**Bot Permission Error!**")
        .setDescription("**Please enable permission \"BAN_MEMBERS\" or \"ADMINISTRATOR\" for this to work!")
      await message.channel.send({embeds: [botPermErr]});
    }
    else {
      if (!target){
        await message.reply("There's no target to ban or your input is invalid...")
      }
      else if (target === message.member) {
        await message.reply(`${tag}, You can't ban yourself!!!`)
      }
      else if (target === guild.me){
        await message.reply(`${tag}, You can't ban the bot!!!`)
      }
      else if (target.roles.highest.comparePositionTo(message.member.roles.highest) >= 0) {
        await message.reply(`${tag}, cannot ban the user because they have a role equal to/higher than you!`)
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
        const banEmbed = new Discord.MessageEmbed()
          .setTitle("Alpha Mike Foxtrot, the Ban Hammer has Sounded")
          .setDescription("You have been banned in "+message.guild.name+" for "+reason+".")
          .setFooter("Goodbye FOREVER!")
        try {
          const bandm = await target.createDM();
          await bandm.send({embeds: [banEmbed]});
          await message.channel.send(`${tag}, <@${target.user.id}> has been banned!`);
        }
        catch(err) {
          await message.channel.send("An error has occured while trying to send DM. "+err)
        }
        await target.ban({reason: reason});
      }      
    }
  }
}

module.exports.name = "ban";
module.exports.description = "Bans someone from the server!";
module.exports.category = "mod";
module.exports.usage = "+ban [@user] [optional: reason]";
