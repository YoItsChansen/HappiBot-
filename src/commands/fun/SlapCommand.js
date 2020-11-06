const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class SlapCommand extends BaseCommand {
  constructor() {
    super('slap', 'fun', []);
  }

  run(client, message, args) {
    const mentioned = message.mentions.users.first()
    const embed = new Discord.MessageEmbed()
    embed.setAuthor("Yikes!")
    function randomInt(max){
      return Math.floor(Math.random() * Math.floor(max));
    }
    const arrayPhrases = [
      " slapped ",
      " slapped the monster named ",
      " literally face palmed ",
      " , a Volleyball player slapped "
    ]
    var arrayGifs = [
      "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943",
      "https://i.imgur.com/fm49srQ.gif",
      "https://i.pinimg.com/originals/cd/13/ad/cd13adaeb8b4208db2270d7c94963101.gif",
      "https://media2.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif",
      "https://i.pinimg.com/originals/bf/ef/b4/bfefb401ed8f1f7a3fee62d76a2856a4.gif",
      "https://i.imgur.com/o2SJYUS.gif",
      "https://media1.tenor.com/images/af36628688f5f50f297c5e4bce61a35c/tenor.gif?itemid=17314633",
      "https://media2.giphy.com/media/tX29X2Dx3sAXS/giphy.gif"
    ]

    if(!mentioned){
      embed.setTitle("Who do you wanna slap dummy? :/")
      message.reply(embed)
    }else if(mentioned){
      embed.setTitle(message.author.username + arrayPhrases[randomInt(arrayPhrases.length)] + mentioned.username)
      embed.setImage(arrayGifs[randomInt(arrayGifs.length)])
      message.reply(embed)
    }
    
  }
}