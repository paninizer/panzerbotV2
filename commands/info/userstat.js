const es = require("./../../config/embed.json");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let member;
  if (message.mentions.members.first()) {
    member = message.mentions.members.first();
  } else if (message.guild.members.cache.has(args[0])) {
    member = message.guild.members.cache.get(args[0]);
  } else {
    member = message.member;
  }
  const userembed = {
    color: es.colours.general,
    title: `Userstat of ${member.user.tag}`,
    description: `*Listed are the stats of this user!*`,
    fields: [
      {
        name: `UserID:`,
        value: `\`${member.id}\``,
        inline: true
      },
      {
        name: `Nickname:`,
        value: `\`${member.nickname||"Same as username"}\``,
        inline: true
      },
      {
        name: `Presence:`,
        value: `Status: \`${member.presence.status || "None"}\``,
        inline: true
      }, 
      {
        name: `\u200b`,
        value: `\u200b`,
      },
      {
        name: `Joined Discord At:`,
        value: `\`${member.user.createdAt}\`\n*${Date.now()-member.user.createdAt} ago*`,
        inline: true
      },
      {
        name: `Joined Server At:`,
        value: `\`${member.joinedAt}\`\n*${Date.now()-member.user.joinedAt} ago*`,
        inline: true
      }
    ],
    thumbnail: {
      url: member.avatarURL({dynamic: true})
    },
    timestamp: new Date(),
    footer: {
      text: `Use **${prefix.getPrefix(message.guild.id)||"+"}help** to use help!`,
      icon_url: message.guild.iconURL({dynamic: true})
    }
  }

  await message.channel.send({embeds: [userembed]});
}
module.exports.name = "userstat";
module.exports.description = "Displays your (or another user's) stats.";
module.exports.category = "general";
module.exports.usage = "+userstat [optional: @user]";
module.exports.aliases = ["us"];
