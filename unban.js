

module.exports.run = async (client, message, args) => {
  const target = args[0];

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
      if (target===message.author.id) {
        await message.channel.send(`<@${message.member.id}> You can't unban yourself!`);
      }
      else if (target===guild.me.id) {
        await message.channel.send(`<@${message.member.id}> You can't unban the bot!`);
      }
      else {
        await message.guild.members.unban(target).catch(message.reply(`<@${message.member.id}> Invalid member!`));
        await message.channel.send(`Done! | <@${target}> is unbanned!`);
      }
    }
  }
}

module.exports.name = "unban";
module.exports.description = "Unbans someone using their ID!";
module.exports.category = "mod";
module.exports.usage = "+unban [user **Discord** id]";