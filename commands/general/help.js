const Discord = require("discord.js");
const os = require("os");
const es = require("./../../config/embed.json");


module.exports.run = async (client, message, args) => {
  const startEmbed = new Discord.MessageEmbed()
    .setTitle(`Total Commands: ${client.commands.size}`)
    .setDescription("Here are all the commands.")
    .addFields(
      {name: "Command List", value: `\`${client.commands.map(command => command.name).join(",")}\``},
      {name: "Hosted on", value: `${os.type()}`},
    )
    .setColor(es.colours.general)

  let btnraw = new Discord.MessageActionRow().addComponents(
    [
      new Discord.MessageButton().setCustomId("home").setStyle("SUCCESS").setLabel("Home"),
      new Discord.MessageButton().setCustomId("ping").setStyle("SECONDARY").setLabel("Ping"),
    ]
  );
  let dbtnraw = new Discord.MessageActionRow().addComponents(
    [
      new Discord.MessageButton().setCustomId("d_home").setStyle("SUCCESS").setLabel("Home").setDisabled(true),
    new Discord.MessageButton().setCustomId("ping").setStyle("SECONDARY").setLabel("Ping").setDisabled(true),
    ]
  );

  let selectrow = new Discord.MessageActionRow().addComponents([
    new Discord.MessageSelectMenu()
      .setCustomId('categoryselect')
      .setPlaceholder('Select a Category: ')
      .addOptions([
        {
          label: `Anime`,
          description: `Shows anime commands.`,
          value: `anime`
        },
        {
          label: `Fun`,
          description: `Shows fun commands.`,
          value: `fun`
        },
        {
          label: `General`,
          description: `Shows general commands.`,
          value: `general`
        },
        {
          label: `Info`,
          description: `Shows info commands.`,
          value: `info`
        },
        {
          label: `Moderation`,
          description: `Shows moderation commands.`,
          value: `mod`
        },
      ])
  ]);
  let dselectrow = new Discord.MessageActionRow().addComponents([
    new Discord.MessageSelectMenu()
      .setCustomId('categoryselect')
      .setPlaceholder('Disabled, Use +help again!')
      .addOptions([
        {
          label: `Anime`,
          description: `Shows anime commands.`,
          value: `anime`
        },
        {
          label: `Fun`,
          description: `Shows fun commands.`,
          value: `fun`
        },
        {
          label: `General`,
          description: `Shows general commands.`,
          value: `general`
        },
        {
          label: `Info`,
          description: `Shows info commands.`,
          value: `info`
        },
        {
          label: `Moderation`,
          description: `Shows moderation commands.`,
          value: `mod`
        },
      ])
      .setDisabled(true)
  ]);
  
  let infoEmbed = new Discord.MessageEmbed()
    .setColor(es.colours.info)
    .setTitle("Info Commands")
    .setDescription(`>>> ${client.commands
      .filter(command => command.category === "info")
      .map((command) => `\`${command.name}\``)
      .join(", ")}`)
  let modEmbed = new Discord.MessageEmbed()
    .setColor("GREY")
    .setTitle("Moderation Commands")
    .setDescription(`>>> ${client.commands
      .filter(command => command.category === "mod")
      .map((command) => `\`${command.name}\``)
      .join(", ")}`)
  let funEmbed = new Discord.MessageEmbed()
    .setColor("GREY")
    .setTitle("Fun Commands")
    .setDescription(`>>> ${client.commands
      .filter(command => command.category === "fun")
      .map((command) => `\`${command.name}\``)
      .join(", ")}`)
  let generalEmbed = new Discord.MessageEmbed()
    .setColor(es.colours.general)
    .setTitle("General Commands")
    .setDescription(`>>> ${client.commands
      .filter(command => command.category === "general")
      .map((command) => `\`${command.name}\``)
      .join(", ")}`)
  let animeEmbed = new Discord.MessageEmbed()
    .setColor(es.colours.anime)
    .setTitle("Anime Commands")
    .setDescription(`>>> ${client.commands
      .filter(command => command.category === "anime")
      .map((command) => `\`${command.name}\``)
      .join(", ")}`)

  if (!args[0]) await message.channel.send({embeds: [startEmbed], components: [btnraw, selectrow]}).then(async (msg) => {
    let filter = i => i.user.id === message.author.id;
    let collector = await msg.createMessageComponentCollector({filter: filter, time: 1000 * 60})
    collector.on('collect', async (interact) => {
      if (interact.isButton()) {         
        if(interact.customId==="home"){
          await interact.deferUpdate().catch(e => {
            console.log(e);
          });
          await msg.edit({embeds: [startEmbed]})
        } else if (interact.customId==="ping") {
          await interact.deferUpdate().catch(e =>{
            console.log(e);
          })
          const iniEmbed = {
            title: "Pinging...",
            description: "Calculating the ping...",
            image: {
            url: "https://c.tenor.com/_C6ijUhjvdMAAAAC/nyan-hellcat.gif",
            },
            color: es.colours.random,
          }
          await message.channel.send({embeds: [iniEmbed]}).then(async resultmessage => {
            const ping = resultmessage.createdTimestamp-message.createdTimestamp;
            const wsPing = client.ws.ping;
            const pingEmbed = {
              title: "Pinged",
              description: "Ping Calculated",
              color: "RANDOM",
              fields: [
                {
                  name: "Latency",
                  value: `${ping.toString()} ms`,
                },
                {
                  name: "WS Ping",
                  value: `${wsPing.toString()} ms`,
                },
                {
                  name: "Hosted on",
                  value: `\`${os.type()}\``
                },
              ],
              thumbnail: {
                url: message.guild.iconURL({dynamic: true}),
              },
            }
            await resultmessage.edit({embeds: [pingEmbed]});
          });
        }
      } 
      else if (interact.isSelectMenu()) {
        if (interact.customId==="categoryselect") {
          if (interact.values[0]==="anime") {
            await interact.deferUpdate().catch(e => {
              console.log(e);            
            });
            await msg.edit({embeds: [animeEmbed]});
          }
          else if (interact.values[0]==="info") {
            await interact.deferUpdate().catch(e => {
              console.log(e);            
            });
            await msg.edit({embeds: [infoEmbed]});
          }
          else if (interact.values[0]==="fun") {
            await interact.deferUpdate().catch(e => {
              console.log(e);            
            });
            await msg.edit({embeds: [funEmbed]});
          }
          else if (interact.values[0]==="general") {
            await interact.deferUpdate().catch(e => {
              console.log(e);            
            });
            await msg.edit({embeds: [generalEmbed]});
          }
          else if (interact.values[0]==="mod") {
            await interact.deferUpdate().catch(e => {
              console.log(e);            
            });
            await msg.edit({embeds: [modEmbed]});
          }
        }
      }
    });
    collector.on('end', async () => {
      await msg.edit({content: `***Command timed out! Use +help again to access more!***`, embeds: [startEmbed], components: [dbtnraw, dselectrow]})
    });
  });
  else {
    const command = client.commands.has(args[0]);
    if (command==false) await message.reply("Invalid arguments!");
    else {
      let descriptionEmbed = {
        title: `Description: ${client.commands.filter(command => command.name === args[0]).map((command) => `${command.name}`)}`,
        description: `${client.commands.filter(command => command.name === args[0]).map((command) => `\`${command.description}\``)}`,
        fields: [
          {
            name: "Usage: ",
            value: `${client.commands.filter(command => command.name === args[0]).map((command) => `\`${command.usage}\``)}`,
          }  
        ],
        thumbnail: {
          url: message.author.displayAvatarURL({dynamic: true}),
        },
        footer: {
          text: "For more help use `+help`!",
          icon_url: message.guild.iconURL({dynamic: true}),
        }
      }
      await message.channel.send({embeds: [descriptionEmbed]});
    }
  }
}

module.exports.name = "help";
module.exports.description = "Displays all commands and their descriptions!";
module.exports.category = "general";
module.exports.usage = "+help [optional: command name]";
module.exports.aliases = ["h"];
