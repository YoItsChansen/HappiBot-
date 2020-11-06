const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class SimprateCommand extends BaseCommand {
  constructor() {
    super('simprate', 'fun', []);
  }

  run(client, message, args) {
    const randommem = message.guild.members.cache.random()
    const randomusr =  randommem.user.username
    const mentioned = message.mentions.users.first()
    function randomInt(max){
      return Math.floor(Math.random() * Math.floor(max) + 1);
    }
    var maxSimp = 200
    var embed = new Discord.MessageEmbed()
    .setTitle("Happi's Simpinator Calculator Generator!")

      if(mentioned){
        embed.setDescription(mentioned.username + " is ***" + randomInt(maxSimp) + "% simp for " + randomusr + "*** ")
      } else if(!mentioned){
        embed.setDescription(message.author.username + " is ***" + randomInt(maxSimp) + "% simp for " + randomusr + "*** ")
      }
    message.reply(embed)
  }
}