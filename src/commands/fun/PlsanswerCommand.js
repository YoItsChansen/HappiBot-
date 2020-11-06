const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class PlsanswerCommand extends BaseCommand {
  constructor() {
    super('8ball', 'fun', []);
  }

  run(client, message, args) {
    const answerArray = ["yes","no","yes","yessir","Yeppie","Nope. You high?", "Dummy, no","Yep yep yep!", "Lmao no dum dum...","No, Sorry.", "Yep!", "Maybe not for now :<", "Yes!, but only today daddy.", "Stop asking its obviously a no!", "Yep! Always","Nahh shortie."," Maybe...||Jk thats a no||","||Once you actually have a pp, yes.||", "Lol actually that will be a ||NO!||"]
    function randAnswer(max){
      return Math.floor(Math.random() * Math.floor(max));
    }
    var embed = new Discord.MessageEmbed()
    .setTitle("Happi's tuthball 8ball")
    .setDescription("Answer to " + message.author.username + "'s question" + "\n ***" + answerArray[randAnswer(answerArray.length)] + "***")
    .setThumbnail("https://media1.giphy.com/media/3orifhNhn840GpMMPm/giphy.gif")
    message.channel.send(embed)
  }
}