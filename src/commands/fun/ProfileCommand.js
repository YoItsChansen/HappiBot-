const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class ProfileCommand extends BaseCommand {
  constructor() {
    super('profile', 'fun', []);
  }

  run(client, message, args) {
    const mentionedperson = message.mentions.users.first();

    var profiles = new Array();



    //The profiles of everyone :D
    profiles["Happi"] = new Array("Discord Name: Happi", 
    "Age: 14",
     "From: Philippines", "HappiBot Creator!","Programmer","Guitarist")

    profiles["Samu"] = new Array("Discord Name: Samu",
    "Age: 14",
     "From: Spain")
    
     profiles["`°bunny°`"] = new Array("Preffered Discord Name: `°sτrαωβεrrγ°`",
     "Age: 14",
     "From: Morocco",
     "Happi's Girfriend",
     "Cutie pie",
     "Shortie",
     "Besti")

























































     
    function openProfile(){
      var embed = new Discord.MessageEmbed()
      .setTitle(mentionedperson.username + "'s Profile")
      .setDescription(profiles[mentionedperson.username][0]+'\n'+profiles[mentionedperson.username][1]+'\n'+profiles[mentionedperson.username][2])
      var embed2 = new Discord.MessageEmbed()
      .setTitle("Check your dm's")
      .setDescription(message.author.username + ", you've got mail!")
      .setThumbnail("https://media1.tenor.com/images/2cbd7dab811413f74180ddbd0abb2bbd/tenor.gif?itemid=11623462")
      message.reply(embed2)
      if(profiles[mentionedperson.username][3]){
        embed.addField("____***Extra Information***____",profiles[mentionedperson.username][3])
      }
      if(profiles[mentionedperson.username][4]){
        embed.addField("**--------------**",profiles[mentionedperson.username][4])
      }
      if(profiles[mentionedperson.username][5]){
        embed.addField("**--------------**",profiles[mentionedperson.username][5])
      }
      if(profiles[mentionedperson.username][6]){
        embed.addField("**--------------**",profiles[mentionedperson.username][6])
      }
      return embed
    }

     if(profiles[mentionedperson.username.toString()]){
      message.author.send(openProfile())
     } else if(!profiles[mentionedperson.username.toString()]){
       var errorembed = new Discord.MessageEmbed()
       .setTitle("Yikes!")
       .setDescription("User has yet to register his/her profile.")
       message.reply(errorembed)
     }


    

  }
}