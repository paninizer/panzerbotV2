const Discord = require("discord.js");
const jcd = new Map();
const prettyMS = require("pretty-ms");
const es = require("./../../config/embed.json");
const f = require("./../../config/fun.json");

module.exports.run = async (client, message, args) => {
  if (jcd.has(message.member.id)) {
    const cd = mcd.get(message.member.id)-Date.now();
    if (cd > 0) {
      await message.reply(`Please wait ${prettyMS(cd, {verbose: true})}!`);
      return;
    }
  }
  
  const embed = {
    title: `A Joke!!!`,
    description: f.jokes[Math.floor(Math.random()*f.jokes.length)],
    color: es.colours.fun,
    footer: {
    text: "Hope you laughed. Have fun!",
    }
  }
  await message.channel.send({embeds: [embed]});
  jcd.set(message.member.id, Date.now()+3000);
}

module.exports.name = "joke";
module.exports.description = "Displays a random joke.";
module.exports.category = "fun";
module.exports.usage = "+joke";