const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class LovecalcuCommand extends BaseCommand {
  constructor() {
    super('lovecalcu', 'fun', []);
  }

  run(client, message, args) {
    const mentionedmember = message.mentions.users.first();
    function randomInt(max){
      return Math.floor(Math.random() * Math.floor(max) + 1);
    }
    var embed = new Discord.MessageEmbed()
    .setTitle("Happi's Love Calculator")
    .setDescription(message.author.username + " you are "+ randomInt(200) + "% compatible with " + mentionedmember.username)
    message.reply(embed)
  }
}