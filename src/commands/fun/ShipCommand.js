const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class ShipCommand extends BaseCommand {
  constructor() {
    super('ship', 'fun', []);
  }

  run(client, message, args) {
    const mentioned = message.mentions.users.first()
     const guild = message.guild
     var arraygifs = ["https://thumbs.gfycat.com/IncredibleMarriedBats-size_restricted.gif",
     "https://media3.giphy.com/media/ifYeiuFoT9xxIlyxwN/giphy.gif",
    "https://media3.giphy.com/media/B2dhU4ICFq9dxEFuDw/giphy.gif"]
     var memCount = guild.memberCount
    function member(){
      return guild.members.cache.random().user
    }
    function randomInt(max){
      return Math.floor(Math.random() * Math.floor(max));
    }
    const embed = new Discord.MessageEmbed()
    .setAuthor("Happi's Shipperator")
    .setImage(arraygifs[randomInt(arraygifs.length)])
   if(!mentioned){
    embed.setTitle(member().username + " and " + message.author.username + " both of you have been matched! ;) \n ***Compatability: " + randomInt(200) + "%***"+"\n ***He/She is your 1 out of " + memCount + "***")
   }else if(mentioned){
    embed.setTitle(member().username + " and " + mentioned.username + " both of you have been matched! ;) \n ***Compatability: " + randomInt(200) + "%***"+"\n ***He/She is your 1 out of " + memCount + "***")
   }
    
    
    
    message.channel.send(embed)
  }
}