const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const dev = await client.users.cache.get('744625722714357800');
  const devEmbed = {
    title: "Panzer Chan",
    description: "Object Oriented Programming Languages only programmer. Very busy...",
    thumbnail: {
      url: `${dev.avatarURL({dynamic: true})}`,
    },
    fields: [
      {
        name: "Discord User",
        value: `${dev.tag}`,
      },
      {
        name: "Joined Discord On:",
        value: `${dev.createdAt.toString()}`,
      },
    ],
    color: `#96A67C`,
  }
  const btnrow = new Discord.MessageActionRow().addComponents(
    [
      new Discord.MessageButton().setURL("https://github.com/panzer-chan").setStyle("LINK").setLabel("GitHub"),
      new Discord.MessageButton().setURL("https://replit.com/@panzer-chan").setStyle("LINK").setLabel("Repl.it"),
      new Discord.MessageButton().setURL(process.env['fr']).setStyle("LINK").setLabel("Face Reveal"),
    ]
  );
  await message.channel.send({embeds: [devEmbed], components: [btnrow]});
}

module.exports.name = "dev";
module.exports.category = "general";
module.exports.description = "Displays info about the dev!";
module.exports.usage = "+dev";
