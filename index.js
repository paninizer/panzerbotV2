//uptime & according dependencies
const express = require("express");
const app = express();

//using express to make this bot run 24/7
app.listen(3000, () => {
  console.log("%cExpress working!", "color:green;");
});
app.get("/", (req, res) => {
  res.send("I am the Bone of my Sword. Steel is my Body and Fire is my Blood. I have created over a Thousand Blades, Unknown to Death, Nor known to Life. Have withstood Pain to create many Weapons. Yet those Hands will never hold Anything. So, as I Pray-- Unlimited Blade Works");
});

//go to uptimerobot.com and input the domain of the express thing into a new monitor. Then it will keep this alive 24/7


//discord api & according dependencies
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: 32767, //must use intents
  allowedMentions: {parse: ["roles", "users"], repliedUser: true}
});

//number of guilds
var guild_number = 0;

const init = require("./init.js");
init.run(client);

//os type requirement
const os = require("os");

const { Sequelize, Op, Model, DataTypes } = require("sequelize");

const warningsdb = new Sequelize({
  dialect: 'sqlite',
  storage: './warnings.sqlite',
  logging: false,
});

//models
const Warnings = require("./models/warnings.js")(warningsdb);

//state: on
client.once("ready", async () => {
  await Warnings.sync();
  console.log(`%cSynced database successfully!`, "color:green;");
  console.log(`%cLogged in as ${client.user.tag}!`, "color: blue;");
  console.log("Connected to server(s):");
  client.guilds.cache.forEach(async (guild) => {
    console.log(" - " + guild.name + "\n    ID: " + guild.id + "\n");
    guild_number += 1;
  });
  console.log(`%cThe number of guilds connected: ${guild_number}`, "color:yellow");
  console.log(`  - Loaded ${client.commands.size} commands!`);
  console.log(`  - Loaded ${client.tanks.size} tanks!`);
  client.user.setActivity('World of Tanks', {type: "PLAYING"});
  client.user.setStatus('dnd');
  console.log(os.type());
  console.log(os.release());
  console.log(os.platform());
});


const es = require(`./config/embed.json`);
const prefix = require("discord-prefix");
const defaultPrefix = "+";
//looks for commands in messages
client.on("messageCreate", async message => {
  let guildPrefix = prefix.getPrefix(message.guild.id);
  if (!guildPrefix) guildPrefix = defaultPrefix;
  if (!message.guild) return;
  if (message.author.bot) return;
  else if (message.content.startsWith(guildPrefix)) {
    const args = message.content.slice(guildPrefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
    const command = await client.commands.get(commandName) || await client.aliases.get(commandName);
    if (!command) return;
    try {
      await command.run(client, message, args, Warnings);
    } catch(error) {
      await message.channel.send({embeds: [
        new Discord.MessageEmbed()
          .setTitle(`ERROR!`)
          .setDescription(`An error has occured: \n${error}\n\nAn immediate fix is recommended!`)
        .setColor(es.colours.error)
      ]});
      console.log(`%c${error}`, "color: red");
    }
  }
  else if (message.content===client.user.toString()) {
    const helpembed = {
      title: "Help",
      description: `To view help use \`${guildPrefix}help\`!`,
    }
    await message.reply({embeds: [helpembed]});
  }
});


//snipe
client.snipe = new Discord.Collection();
client.on("messageDelete", async deletedMessage => {
  try {
    await client.snipe.set(deletedMessage.channel.id, deletedMessage);
  }
  catch(err){
    console.log(`%cERROR: ${err}`, "color:red;");
  }
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

//when invited
client.on("guildCreate", async guild => {
  console.log(`Joined Guild: ${guild.name},\n    ID: ${guild.id},\n    Time: ${new Date()}`)
  guild_number++;
});



//TOP SECRET LOGIN LOL
client.login(process.env['token']);

//note to self: type kill 1 in shell and reload page when bot doesn't log in after starting (no problems with Discord API), then restart the bot if necessary

/*comment section*/
/*
still working on tankfacts.js, pure experimental feature

- still trying to work out the others, but I think it should work ;)
- it's just filling in information.... DM me on discord if you want to contribute to that. I'm kinda busy
- Discord: panzer chan#0691

----------------------------------------------------------------
NEW RELEASE:

-------------stable----------------
- new help command! more advanced
- tankfacts
- anime commands
- guild prefix system


--------------beta-----------------
- all moderation command reworked to accept ID!


-----------unfinished--------------
- working on improved snipe command
- finishing tankfacts.js rework to provide alphabetical searching and depending on nations
*/