

module.exports.run = async (client, message, args, Warnings) => {

  const guild = message.guild;
  const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (message.member.permissions.has("ADMINISTRATOR")||message.member.permissions.has("MODERATE_MEMBERS")) {
    if (!target) {
      await message.channel.send("Cannot find member! Please try again!");
    }
    else {
      if (target === message.member) {
        await message.reply(`${message.member}, You can't warn yourself!!!`)
      }
      else if (target === guild.me){
        await message.reply(`${message.member}, You can't warn the bot!!!`)
      }
      else if (target.roles.highest.comparePositionTo(message.member.roles.highest) >= 0) {
        await message.reply(`${message.member}, cannot warn the user because they have a role equal to/higher than you!`)
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
        const warn = await Warnings.create({
          userid: target.id,
          reason: reason,
          date: new Date().toString(),
          modid: message.member.id,
        })
        await message.channel.send(`${client.users.cache.get(warn.id).tag} has been warned of ${reason}`);
      }
    }
  }
}

module.exports.name = "warn";
module.exports.description = "Adds a warning!";
module.exports.category = "mod";
module.exports.usage = "+warn [@member] [optional: reason]";
