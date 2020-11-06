const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class TtCommand extends BaseCommand {
  constructor() {
    super('tt', 'fun', []);
  }

  run(client, message, args) {
    const mentioned = message.mentions.users.first()
    var Penises = ["*Ur Flat*","*Barely Visible I cant show it.",". .","**. .**","*o o*","**o o**","O O","**O O**","(.)(.)","**(.)(.)**","(  o)(  o)","**(   o)(   o)**","**(    O)(    O)**","**( O     )     0)**"]
    function randInt(max){
      return Math.floor(Math.random() * Math.floor(max));
    }
    var cm = randInt(Penises.length)
    var embed = new Discord.MessageEmbed()
    .setTitle("Tiddie sizeinator")
    if(mentioned){
      embed.setDescription(mentioned.username+ "'s Tits is " + cm + " cm big O_o \n " + Penises[cm])
    } else if(!mentioned){
      embed.setDescription(message.author.username + "'s Tits is " + cm + " cm big O_o \n " + Penises[cm])
    }

    message.channel.send(embed)
  }
}