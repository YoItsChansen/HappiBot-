const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'fun', []);
  }

  run(client, message, args) {
    const mentioned = message.mentions.users.first()
    const embed = new Discord.MessageEmbed()
    embed.setAuthor("HappiBot, The Kicker!")
    if(!mentioned){
      embed.setTitle("Mention someone dum dum... You dont want me to kick u do you?")
      embed.setImage("https://i.gifer.com/1OyU.gif")
    } else if(mentioned){
      embed.setTitle(mentioned.username+", Has been kicked. \n ***Reason: Not Specified***")
    }
    message.reply(embed)
  }
}