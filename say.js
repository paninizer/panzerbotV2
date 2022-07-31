module.exports.run = async (client, message, args) => {
  let toSay = args.join(" ")
  if (!toSay) return message.reply({content: "You have to provide something for me to say, stupid"})
  await message.channel.send({content: toSay})
}

module.exports.name = "say";
module.exports.description = "The bots says something you order!";
module.exports.category = "fun";
module.exports.usage = "+say [something to say]";