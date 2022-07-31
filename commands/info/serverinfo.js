

module.exports.run = async (client, message, args) => {

  const guildOwner = await client.users.fetch(message.guild.ownerId);
  const guildInfo = {
    color: "RANDOM",
    title: `Guild Info of: ${message.guild}`,
    description: `Here are all the informations of the guild: ${message.guild.name}`,
    fields: [
      {
        name: "Owner:",
        value: `\`${guildOwner.tag}\``,
      },
      {
			  name: '\u200b',
			  value: '\u200b',
			  inline: false,
		  },
      {
        name: "Member Count:",
        value: `\`${message.guild.memberCount}\``,
        inline: true,
      },
      {
        name: "NSFW Level:",
        value: `\`${message.guild.nsfwLevel}\``,
        inline: true,
      },
      {
        name: "Premium (Nitro) Level:",
        value: `\`${message.guild.premiumTier}\``,
        inline: true,
      },
      {
			  name: '\u200b',
			  value: '\u200b',
			  inline: false,
		  },
      {
        name: "Role Count:",
        value: `\`${message.guild.roles.cache.size}\``,
        inline: true,
      },
      {
        name: "Emoji Count:",
        value: `\`${message.guild.emojis.cache.size}\``,
        inline: true,
      },
      {
        name: "Sticker Count:",
        value: `\`${message.guild.stickers.cache.size}\``,
        inline: true,
      },
    ],
    timestamp: new Date(),
    image: {
      url: message.guild.iconURL({dynamic: true}),
    },
    footer: {
      text: "Use \"+help\" to see more commands!",
      icon_url: message.author.avatarURL({dynamic: true}),
    },
  }

  await message.channel.send({embeds: [guildInfo]});
}

module.exports.name = "serverinfo";
module.exports.description = "Displays server info!";
module.exports.category = "info";
module.exports.usage = "+serverinfo";
module.exports.aliases = ["si", "server"];
