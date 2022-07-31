

module.exports.run = async (client, message, args) => {
  let toSudo = args.join(" ").slice(22);

  let member = message.mentions.members.first() || message.member;
  if (!member) {
    await message.reply("No members to use command.");
  } else {
    await message.channel.createWebhook(`${member.displayName}`, {
      avatar: member.displayAvatarURL({dynamic: true})
    }).then(webhook => {
      webhook.send({content: toSudo});
      webhook.delete({reason: `Finished SUDO Command by ${message.author.tag}`});
    }).catch(console.error);
  }
}

module.exports.name = "sudo";
module.exports.description = "Not the Linux super user...";
module.exports.category = "fun";
module.exports.usage = "+sudo [optional: @user] [something to say]";