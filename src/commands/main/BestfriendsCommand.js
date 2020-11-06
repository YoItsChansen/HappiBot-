const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class BestfriendsCommand extends BaseCommand {
  constructor() {
    super('bestfriends', 'main', []);
  }

  run(client, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("HappiBot")
    .setColor(3,2,1)
    .setThumbnail('https://media0.giphy.com/media/fwo7bzEVxbYS4eSNVd/giphy.gif')
    .setDescription("***Happi#2112 's Best Friends!*** \n **1. (Girlfriend) Strawberry** \n **2. Samu** \n **3. Marcie** \n **4. Smol / Autumn** \n **5. Hayato / Givoanni / Smol-kun**")
    message.channel.send(embed);
  }
}