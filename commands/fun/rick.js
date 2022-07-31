

module.exports.run = async (client, message, args) => {
  var target;
  if (message.mentions.members.first()) target = await message.guild.members.cache.get(message.mentions.members.first().id);
  else target = await message.guild.members.cache.get(args[0]);
  
  if (!target) {
    await message.reply("There isn't a valid member to rickroll!");
  }
  else {
    const rick = {
      title: "You have been... RICKROLLED!!!",
      description: "It's a rickroll. L",
      image: {
        url: "https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif",
      },
      footer: {
        text: "I'm sorry, little one."
      }
    }
    try {
      const rickdm = await target.createDM();
      await rickdm.send({embeds: [rick]});
      await message.channel.send(`${message.member}, <@${target.user.id}> has been rickrolled!!`);
    }
    catch(err) {
      await message.channel.send(`An error has occured while trying to send DM. ${err}`)
    }
  }
}

module.exports.name = "rick";
module.exports.description = "Rickrolls someone!";
module.exports.category = "fun";
module.exports.usage = "+rick [@user]";
