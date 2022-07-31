module.exports.run = async (client, message, args) => {
  const user = message.mentions.users.first() || message.author;
  const userembed = {
    title: `Avatar of ${user.tag}`,
    image: {
      url: `${user.avatarURL({dynamic: true})}`
    }
  }

  await message.channel.send({content: `Avatar extraction completed.`, embeds: [userembed]}).catch(console.error)
}

module.exports.name = "avatar";
module.exports.description = "Displays your avatar!";
module.exports.category = "info";
module.exports.usage = "+avatar [optional: @user]";
module.exports.aliases = ["av"];