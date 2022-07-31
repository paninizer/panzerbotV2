const Discord = require("discord.js")
const es = require("./../../config/embed.json");
module.exports.run = async (client, message, args) => {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const botOwner = process.env['owner']
  if (message.author.id == botOwner) {
    const shutdownEmbed = new Discord.MessageEmbed()
    .setTitle("Shutdown Commencing")
    .setDescription("Shutting down bot...")
    .setColor(es.colours.olivegreen)
    await message.channel.send({embeds: [shutdownEmbed]});
    sleep(100);
    console.log("Shutdown initiated by owner.");
    sleep(100);
    await message.channel.send({embeds: [
      new Discord.MessageEmbed()
      .setTitle("Shutdown Finished")
      .setDescription("Shutdown succeeded!")
      .setColor(es.colours.olivegreen)
    ]});
    await client.destroy();
  }
}

module.exports.name = "shutdown";
module.exports.description = "Shutdowns the bot for maintenance. Only the owner can do it.";
module.exports.category = "owner";
module.exports.usage = "+shutdown";
module.exports.aliases = ["sd", "off"];
