//dependencies-timeout
const parseTime = require("parse-duration").default;
const prettyMS = require("pretty-ms");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
  const tag = `<@${message.author.id}>`;
  let target = message.guild.members.cache.get(message.mentions.members.first().id) || message.guild.members.cache.get(args[0]);
  let reason = args.join(" ").slice(22) || "None";
  if (
    message.member.permissions.has('MODERATE_MEMBERS') ||
    message.member.permissions.has('ADMINISTRATOR')
  ) {
      if (!message.guild.me.permissions.has('MODERATE MEMBERS')&&
          !message.guild.me.permissions.has('ADMINISTRATOR')) {
         let botPermErr = new Discord.MessageEmbed()
        .setTitle("**Bot Permission Error!**")
        .setDescription("**Please enable permission \"MODERATE_MEMBERS\" or \"ADMINISTRATOR\" for this to work!")
        return message.channel.send({embeds: [botPermErr]});
      }
      else if (target) {
        if (target === message.member) {
        await message.channel.send(`${tag}, You can't timeout yourself!!!`)
        }
        else if (target === message.guild.me) {
        await message.channel.send(`${tag}, You can't timeout the bot!!!`)
        }
        else {
          let time = args.slice(1).join(" ");
          if (!time) {
            await message.channel.send(`${tag}, please input a time for the timeout!`)
          }
          let parsedTime = parseTime(time);
          if (parsedTime<ms("1m") || parsedTime>ms("28d")) {
            await message.channel.send(`${tag}, please input a valid time!`)
          }
          await target.timeout(parsedTime, reason);
          await message.channel.send(`${tag}, <@${target.user.id}> has been timeoutted for **${prettyMS(parsedTime, {verbose: true})}**!`);
        }
      }
      else {
        await message.channel.send(`${tag} Please Specify a valid user to timeout!`);
      }
  }
}

module.exports.name = "timeout";
module.exports.description = "Timeouts (mutes) someone!";
module.exports.category = "mod";
module.exports.usage = "+timeout [@user] [time] [reason]";
module.exports.aliases = ["mute", "to"];
