const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const invEmbed = {
    title: "Invite Panzer Chan to Your Servers!",
    url: "https://discord.com/api/oauth2/authorize?client_id=854776549260394526&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D854776549260394526%26permissions%3D8%26scope%3Dbot&response_type=code&scope=identify%20guilds%20guilds.members.read%20messages.read%20relationships.read%20activities.read%20bot",
    description: "**Click the Link in the Title or the Button to Invite the Bot!**",
    thumbnail: {
      url: message.author.displayAvatarURL({dynamic: true}),
    },
    footer: {
      text: "For help type \"+help\"!",
      icon_url: message.guild.iconURL({dynamic: true}),
    }
  }

  const inviterow = new Discord.MessageActionRow().addComponents([
    new Discord.MessageButton().setURL("https://discord.com/api/oauth2/authorize?client_id=854776549260394526&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D854776549260394526%26permissions%3D8%26scope%3Dbot&response_type=code&scope=identify%20guilds%20guilds.members.read%20messages.read%20relationships.read%20activities.read%20bot").setStyle("LINK").setLabel("General Purpose"),
    new Discord.MessageButton().setStyle("SECONDARY").setLabel("Economy - Coming Soon!").setDisabled(true),
  ]);

  await message.channel.send({embeds: [invEmbed], components: [inviterow]})
}

module.exports.name = "invite";
module.exports.description = "Invite Link for the Bot!";
module.exports.category = "general";
module.exports.usage = "+invite";
module.exports.aliases = ["inv"];
