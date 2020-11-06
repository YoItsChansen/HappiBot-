const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class PpCommand extends BaseCommand {
  constructor() {
    super('pp', 'fun', []);
  }

  run(client, message, args) {
    const mentioned = message.mentions.users.first()
    var Penises = ["8D","8=D","8==D","8===D","8====D","8=====D","8======D","8=======D","8========D","8=========D","8==========D","8===========D","8============D","**8=================D**"]
    function randInt(max){
      return Math.floor(Math.random() * Math.floor(max));
    }
    var cm = randInt(Penises.length)
    var embed = new Discord.MessageEmbed()
    .setTitle("peeepeee calculator")

    .setFooter("Credits to: Happi for giving you big pp ;)")
    .setThumbnail("https://media1.giphy.com/media/JPmMi4ZlXqmRa8F5wF/giphy.gif")
    .setColor(randInt(100) + 1000,randInt(100) + 1000,randInt(100) + 1000)
    if(mentioned){
      embed.setDescription(mentioned.username + "'s penis \n " + Penises[cm])
    }else if(!mentioned){
      embed.setDescription(message.author.username + "'s penis \n " + Penises[cm])
    }
    message.channel.send(embed)
  }
}