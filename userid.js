const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let user;
  if (args[0]) {
    if (client.users.cache.has(args[0])) {
      user = client.users.cache.get(args[0]);
      await message.reply({content: `\`${user.id}\``});
    }
  } else {
    await message.reply({content: `\`${message.author.id}\``})
  }
}


module.exports.name = "userid";
module.exports.description = "Gets someone's Discord ID, can also get yours.";
module.exports.category = "info";
module.exports.usage = "+userid [optional: @user]";
module.exports.aliases = ["uid", "id"];