const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class TodecideCommand extends BaseCommand {
  constructor() {
    super('todecide', 'fun', []);
  }

  run(client, message, args) {
    var embed = new Discord.MessageEmbed()
    embed.setAuthor("HappiBot! Truth Or Dare!")
    const mentioned = message.mentions.users.first()
    var arraytd = ["Truth","Dare"]
    function rand(max){
      return Math.floor(Math.random() * Math.floor(max));
    }
    if(mentioned){
      embed.setTitle(mentioned.username+" will do "+arraytd[rand(arraytd.length)])
      
    } else if(!mentioned){
     embed.setTitle("Bruh... You stupid? mention someone dummy...")
    }
    message.reply(embed)
  }
}