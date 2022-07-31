const Discord = require("discord.js");

module.exports.run = async (client, message, args, Warnings) => {
  if (message.member.permissions.has("ADMINISTRATOR")||message.member.permissions.has("MODERATE_MEMBERS")){  
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return message.channel.send(`Invalid member input! Please try again.`);
    var embed = new Discord.MessageEmbed().setTitle(`Warnings of ${member.user.tag}`)
    const warninglist = await Warnings.findAll({where: {userid: member.id}})
    console.log(warninglist.toString());
    if (warninglist!=undefined) {
      let id = 0;
      let page = 2;
      warninglist.forEach(async warn => {
        if (id==24) {
          await message.channel.send({embeds: [embed]});
          return message.channel.send(`Too many warnings to display in 1 embed.`);
        }
        embed.addFields([{name: `ID: \`${id}\``, value: `Reason: \`${warn.reason}\`\nModerator: \`${client.users.cache.get(warn.modid).tag}\`\nDate: ${warn.date}`}])
        id++;
      })
    }
    else {
      embed.addFields([{name: "No warns", value: "\u200B"}]);
    }
    await message.channel.send({embeds: [embed]});
  }
}

module.exports.name = "warnings";
module.exports.description = "Lists all warnings!";
module.exports.category = "mod";
module.exports.usage = "+warnings [@member]";
module.exports.aliases = ["warns"];
