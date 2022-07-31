const Discord = require("discord.js")


module.exports.run = async (client, message, args) => {
  if (message.author.id===message.guild.ownerId){
      const confirmbtn = new Discord.MessageActionRow().addComponents([
        new Discord.MessageButton().setCustomId("cancelleave").setStyle("DANGER").setLabel("Cancel"), 
        new Discord.MessageButton().setCustomId("confirmleave").setStyle("SUCCESS").setLabel("Confirm"),
      ]);
      const d_confirmbtn = new Discord.MessageActionRow().addComponents([
        new Discord.MessageButton().setCustomId("d_cancelleave").setStyle("DANGER").setLabel("Cancel").setDisabled(true), 
        new Discord.MessageButton().setCustomId("d_confirmleave").setStyle("SUCCESS").setLabel("Confirm").setDisabled(true),
      ]);    
      const confirmembed = {
        title: "Confirm Leave?",
        description: "Do you really want to not let the bot be a part of your server anymore?",
        thumbnail: {
          url: message.guild.iconURL({dynamic: true}),
        },
      }
      const d_confirmembed = {
        title: "Leave Cancelled",
        description: "Leaved cancelled because time ran out or you cancelled it.",
        thumbnail: {
          url: message.guild.iconURL({dynamic: true}),
        },
      }
      await message.channel.send({embeds: [confirmembed], components: [confirmbtn]}).then(async (msg) => {
        let filter = i => i.user.id === message.guild.ownerId;
      let collector = await msg.createMessageComponentCollector({filter: filter, time: 1000 * 60})
      collector.on('collect', async (btn) =>{
        if (btn.isButton()){
          if (btn.customId==="confirmleave"){
            await message.channel.send("Well, goodbye...");
            await collector.stop();
            await msg.edit({components: [d_confirmbtn]});
            await message.guild.leave();
          }
          if (btn.customId==="cancelleave"){
            await msg.edit({embeds: d_confirmembed, components: [d_confirmbtn]});
          }
        }
      });
      collector.on('end', async () => {
        await msg.edit({embeds: [d_confirmembed], components: [d_confirmbtn]});
        await msg.reply("Interaction Timed Out!");
      });
    });
  }
}


module.exports.name = "leave";
module.exports.description = "The bot will leave this server, sad.";
module.exports.category = "general";
module.exports.usage = "+leave";