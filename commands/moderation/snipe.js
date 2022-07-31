const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  if (message.member.permissions.has("MANAGE_MESSAGES")||
      message.member.permissions.has("ADMINISTRATOR")) {
    let deletedMessage = client.snipe.get(message.channel.id);
    if (!deletedMessage) return message.reply("There's nothing to snipe!");
    let content = deletedMessage.content || "No content";
    const embed = new Discord.MessageEmbed()
    .setTitle(`${client.users.fetch(deletedMessage.authorid).tag}`)
    .setDescription(content)
    if (deletedMessage.attachment) embed.setImage(deletedMessage.attachments[0]);
    await message.channel.send({embeds: [embed]});
  }
}

module.exports.name = "snipe";
module.exports.description = "Lets you see deleted messages!";
module.exports.category = "mod";
module.exports.usage = "+snipe";
