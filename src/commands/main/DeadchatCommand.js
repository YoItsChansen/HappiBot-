const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class DeadchatCommand extends BaseCommand {
  constructor() {
    super('deadchat', 'main', []);
  }

  run(client, message, args) {
    var embed = new Discord.MessageEmbed()
    .setAuthor("HappiBot")
    .setTitle("Dead Chat!!!")
    .setDescription("<@&771949980591194112> , please revive the chat before its too late! \n Sorry bout the ping, but you signed up for this!")
    .setThumbnail("https://media1.tenor.com/images/1f8c7736a46059a800df67a2779b3a86/tenor.gif?itemid=7121337")
    message.channel.send(embed)
  }
}