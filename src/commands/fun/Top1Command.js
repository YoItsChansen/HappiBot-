const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class Top1Command extends BaseCommand {
  constructor() {
    super('best', 'fun', []);
  }

  run(client, message, args) {
    const mentioned = message.mentions.users.random()
    const embed = new Discord.MessageEmbed()
    .setAuthor("HappiBot!")
    if(mentioned){
      embed.setTitle("***Selected: "+mentioned.username+"***")
      embed.setImage("https://media1.giphy.com/media/znodP9eurvThe/200.gif")
    } else if(!mentioned){
      embed.setTitle("***No one is the best out of No one... Stupid Mention someone :/***")
      embed.setImage("https://i.gifer.com/1OyU.gif")
    }
    message.channel.send(embed)

  }
}