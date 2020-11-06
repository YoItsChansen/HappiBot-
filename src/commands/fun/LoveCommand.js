const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class LoveCommand extends BaseCommand {
  constructor() {
    super('love', 'fun', []);
  }

  run(client, message, args) {
    const mentioned = message.mentions.users.first()
    var loves = [" Here ya go :D... Smile now!",
     " We love chuuu! U cutie :)",
      " Everyone loves you :D",
       " *Smooch*",
       " Mwa Mwa... Happi Bot loves you!", 
       " Kisses and Hugs all yours :D",
      " Everyone loves you you li'l munchkin!",
      " UwU Kiss Kiss Smooch Smooch :3",
      " U cutie I wanna hug you soooo bad :3",
      " UGHHHHH UR SOO CUTE :3",
        " Are you from paris? Cuz eifell for u ;)",
       " Are you magnet? cuz you attract me ;o",
        " You know you should be my pillow ;), Ill see you in the bed tonight ;o"]
    function randInt(max){
      return Math.floor(Math.random() * Math.floor(max));
    }
    var gifs = ["https://i.pinimg.com/originals/95/47/93/95479393fc0eb50fc73103215ec16cd9.gif",
    "https://i.pinimg.com/originals/0a/16/52/0a1652de311806ce55820a7115993853.gif",
    "https://tenor.com/6Qmy.gif",
    "https://media.tenor.com/images/c45f78087c771247447890276b4351dc/tenor.gif",
    "https://media.tenor.com/images/3a9d2bd1bde9ed8ea02b2222988be6da/tenor.gif",
    "https://i.pinimg.com/originals/7d/e8/09/7de8096fbbb85206d9b873ec248aa589.gif",
    "https://i.pinimg.com/originals/78/3e/07/783e075c9a7185c81b289ab2ced101d8.gif",
    "https://i.pinimg.com/originals/92/4e/40/924e40f008fd2fe2dfe466ea3f968f69.gif",
    "https://media.tenor.com/images/8cb8d9b4caeceb1dbe0ff55f955000b9/tenor.gif",
    "https://www.icegif.com/wp-content/uploads/felt-in-love-icegif.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCA1PyifdbpdAGtUe9uBTFyUvqLUnfTz6ldQ&usqp=CAU",
    "https://i.pinimg.com/originals/f5/11/31/f51131bf1c5e617b12856bdd47a03eae.gif",
  "https://i.pinimg.com/originals/0d/42/be/0d42beb8d32649de0767e077787ba4ed.gif"]
    var embed = new Discord.MessageEmbed()
    .setTitle("Happi's feel loved service UwU and its totally free!")
    .setImage(gifs[randInt(gifs.length)])
    if(mentioned){
      embed.setDescription("***" + mentioned.username + loves[randInt(loves.length)] + "***")
    }else if(!mentioned){
      embed.setDescription("***" + message.author.username + loves[randInt(loves.length)] + "***")
    }

    message.channel.send(embed)
  }
}