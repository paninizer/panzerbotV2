const url = 'https://www.reddit.com/r/dankmemes/hot/.json?limit=100'
const https = require("https")
const Discord = require("discord.js")
const dmcd = new Map();

module.exports.run = async (client, message, args) => {
    if (dmcd.has(message.member.id)) {
    const cd = dmcd.get(message.member.id)-Date.now();
    if (cd > 0) {
      await message.reply(`Please wait ${prettyMS(cd, {verbose: true})}!`);
      return;
    }
  }
  https.get(url, (result) => {
    var body = ''
    result.on('data', async (chunk) => {
      body += chunk;
    })

    result.on('end', async () => {
      var response = await JSON.parse(body)
      var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

      if (index.post_hint !== 'image') {
        var text = index.selftext
        const textembed = new Discord.MessageEmbed()
          .setTitle(subRedditName)
          .setColor("RED")
          .setDescription(`[${title}](${link})\n\n${text}`)
          .setURL(`https://reddit.com/${subRedditName}`)
        await message.channel.send({embeds: [textembed]})
      }

      var image = index.preview.images[0].source.url.replace('&amp;', '&')
      var title = index.title
      var link = 'https://reddit.com' + index.permalink
      var subRedditName = index.subreddit_name_prefixed

      if (index.post_hint !== 'image') {
        const textembed = new Discord.MessageEmbed()
          .setTitle(subRedditName)
          .setColor("RED")
          .setDescription(`[${title}](${link})\n\n${text}`)
          .setURL(`https://reddit.com/${subRedditName}`)
        await message.channel.send({embeds: [textembed]})
      }

      const imageembed = new Discord.MessageEmbed()
        .setTitle(subRedditName)
        .setImage(image)
        .setColor("RED")
        .setDescription(`[${title}](${link})`)
        .setURL(`https://reddit.com/${subRedditName}`)
      await message.channel.send({ embeds: [imageembed] });
    }).on('error', async (e) => {
      console.log('Got an error: ', e);
    })
  })
  dmcd.set(message.member.id, Date.now()+3000);
}

module.exports.name = "dankmeme";
module.exports.description = "Daily Juicy Memes from r/dankmemes!";
module.exports.category = "fun";
module.exports.usage = "+dankmeme";
module.exports.aliases = ["dm"];