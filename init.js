const fs = require("fs");
const Discord = require("discord.js");

module.exports.run = async (client) => {
  /*init command handler*/
  client.commands = new Discord.Collection();
  /*init aliases*/
  client.aliases = new Discord.Collection();

  //init
  fs.readdirSync("./commands/").forEach(async (dir) => {
    const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter((file) =>
      file.endsWith(".js")
    );
    for (const file of commandFiles) {
      const commandName = file.split(".")[0]
      const command = require(`./commands/${dir}/${file}`);
      await client.commands.set(commandName, command);
      if (command.aliases) {
        command.aliases.forEach(alias => {
          client.aliases.set(alias, command)
        });
      }
    }
  });
  await client.commands.sort((commandA, commandB) => commandA-commandB);

  /*init tank database*/
  client.tanks = new Discord.Collection();
  fs.readdirSync("./tanks_info/").forEach(async (n_dir) => {
    fs.readdirSync(`./tanks_info/${n_dir}`).forEach(async (t_dir) => {
      const tankTypeFiles = fs.readdirSync(`./tanks_info/${n_dir}/${t_dir}`).filter((file) => 
        file.endsWith(".json")
      );
      for (const file of tankTypeFiles) {
        const filename = file.split(".")[0];
        const tank = JSON.parse(fs.readFileSync(`./tanks_info/${n_dir}/${t_dir}/${filename}.json`, 'utf-8'));
        await client.tanks.set(tank.name, tank);
      }
    })
  })
  await client.tanks.sort((tankA, tankB) => tankA.name-tankB.name);
}