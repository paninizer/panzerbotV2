const os = require("os");

module.exports.run = async (client, message, args) => {
  const iniEmbed = {
    title: "Pinging...",
    description: "Calculating the ping...",
    image: {
      url: "https://c.tenor.com/_C6ijUhjvdMAAAAC/nyan-hellcat.gif",
    },
    color: "RANDOM",
  }
  await message.channel.send({embeds: [iniEmbed]}).then(async resultmessage => {
    const ping = resultmessage.createdTimestamp-message.createdTimestamp;
    const wsPing = client.ws.ping;
    const pingEmbed = {
      title: "Pinged",
      description: "Ping Calculated",
      color: "RANDOM",
      fields: [
        {
          name: "Latency",
          value: `${ping.toString()} ms`,
        },
        {
          name: "WS Ping",
          value: `${wsPing.toString()} ms`,
        },
        {
          name: "Hosted on",
          value: `\`${os.type()}\``
        },
      ],
      thumbnail: {
        url: message.guild.iconURL({dynamic: true}),
      },
    }
    await resultmessage.edit({embeds: [pingEmbed]});
  });
}

module.exports.name = "ping";
module.exports.category = "general";
module.exports.description = "Gets the bot's ping!";
module.exports.usage = "+ping";
